﻿// 版权归百小僧及百签科技（广东）有限公司所有。
//
// 此源代码遵循位于源代码树根目录中的 LICENSE 文件的许可证。

using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.DependencyInjection;

namespace Furion.DatabaseAccessor;

/// <summary>
/// 自动调用 SaveChanges 拦截器（Razor Pages）
/// </summary>
internal sealed class AutoSaveChangesPageFilter : IAsyncPageFilter, IOrderedFilter
{
    /// <summary>
    /// 过滤器排序
    /// </summary>
    private const int FilterOrder = 9999;

    /// <summary>
    /// 排序属性
    /// </summary>
    public int Order => FilterOrder;

    /// <summary>
    /// 模型绑定拦截
    /// </summary>
    /// <param name="context"></param>
    /// <returns></returns>
    /// <exception cref="NotImplementedException"></exception>
    public Task OnPageHandlerSelectionAsync(PageHandlerSelectedContext context)
    {
        return Task.CompletedTask;
    }

    /// <summary>
    /// 拦截请求
    /// </summary>
    /// <param name="context"></param>
    /// <param name="next"></param>
    /// <returns></returns>
    /// <exception cref="NotImplementedException"></exception>
    public async Task OnPageHandlerExecutionAsync(PageHandlerExecutingContext context, PageHandlerExecutionDelegate next)
    {
        // 获取动作方法描述器
        var method = context.HandlerMethod?.MethodInfo;
        // 处理 Blazor Server
        if (method == null)
        {
            _ = await next.Invoke();
            return;
        }

        // 获取请求上下文
        var httpContext = context.HttpContext;

        // 判断是否贴有工作单元特性
        if (method.IsDefined(typeof(UnitOfWorkAttribute), true))
        {
            _ = await next.Invoke();
            return;
        }

        // 调用方法
        var resultContext = await next.Invoke();

        // 判断是否手动提交
        var isManualSaveChanges = method.IsDefined(typeof(ManualCommitAttribute), true);

        // 判断是否异常，并且没有贴 [ManualCommit] 特性
        if (resultContext.Exception == null && !isManualSaveChanges)
        {
            httpContext.RequestServices.GetRequiredService<IDbContextPool>().SavePoolNow();
        }
    }
}
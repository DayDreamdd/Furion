﻿// ------------------------------------------------------------------------
// 版权信息
// 版权归百小僧及百签科技（广东）有限公司所有。
// 所有权利保留。
// 官方网站：https://baiqian.com
//
// 许可证信息
// Furion 项目主要遵循 MIT 许可证和 Apache 许可证（版本 2.0）进行分发和使用。
// 许可证的完整文本可以在源代码树根目录中的 LICENSE-APACHE 和 LICENSE-MIT 文件中找到。
// 官方网站：https://furion.net
//
// 使用条款
// 使用本代码应遵守相关法律法规和许可证的要求。
//
// 免责声明
// 对于因使用本代码而产生的任何直接、间接、偶然、特殊或后果性损害，我们不承担任何责任。
//
// 其他重要信息
// Furion 项目的版权、商标、专利和其他相关权利均受相应法律法规的保护。
// 有关 Furion 项目的其他详细信息，请参阅位于源代码树根目录中的 COPYRIGHT 和 DISCLAIMER 文件。
//
// 更多信息
// 请访问 https://gitee.com/dotnetchina/Furion 获取更多关于 Furion 项目的许可证和版权信息。
// ------------------------------------------------------------------------

using Furion.ConfigurableOptions;
using Microsoft.Extensions.Configuration;

namespace Furion.UnifyResult;

/// <summary>
/// 规范化配置选项
/// </summary>
public sealed class UnifyResultSettingsOptions : IConfigurableOptions<UnifyResultSettingsOptions>
{
    /// <summary>
    /// 设置返回 200 状态码列表
    /// <para>默认：401，403，如果设置为 null，则标识所有状态码都返回 200 </para>
    /// </summary>
    public int[] Return200StatusCodes { get; set; }

    /// <summary>
    /// 适配（篡改）Http 状态码（只支持短路状态码，比如 401，403，500 等）
    /// </summary>
    public int[][] AdaptStatusCodes { get; set; }

    /// <summary>
    /// 是否支持 MVC 控制台规范化处理
    /// </summary>
    public bool? SupportMvcController { get; set; }

    /// <summary>
    /// 默认只显示验证错误的首个消息
    /// </summary>
    public bool? SingleValidationErrorDisplay { get; set; }

    /// <summary>
    /// 选项后期配置
    /// </summary>
    /// <param name="options"></param>
    /// <param name="configuration"></param>
    public void PostConfigure(UnifyResultSettingsOptions options, IConfiguration configuration)
    {
        options.Return200StatusCodes ??= new[] { 401, 403 };
        options.SupportMvcController ??= false;
        options.SingleValidationErrorDisplay ??= false;
    }
}
﻿// 版权归百小僧及百签科技（广东）有限公司所有。
//
// 此源代码遵循位于源代码树根目录中的 LICENSE 文件的许可证。

namespace Furion.DependencyInjection;

/// <summary>
/// 跳过全局代理
/// </summary>
[SuppressSniffer, AttributeUsage(AttributeTargets.Class)]
public class SuppressProxyAttribute : Attribute
{
}
﻿// 版权归百小僧及百签科技（广东）有限公司所有。
//
// 此源代码遵循位于源代码树根目录中的 LICENSE 文件的许可证。

using Furion.JsonSerialization;

namespace Newtonsoft.Json;

/// <summary>
/// Newtonsoft.Json 拓展
/// </summary>
[SuppressSniffer]
public static class NewtonsoftJsonExtensions
{
    /// <summary>
    /// 添加 DateTime/DateTime?/DateTimeOffset/DateTimeOffset? 类型序列化处理
    /// </summary>
    /// <param name="converters"></param>
    /// <param name="outputFormat"></param>
    /// <param name="localized">自动转换 DateTimeOffset 为当地时间</param>
    /// <returns></returns>
    public static IList<JsonConverter> AddDateTimeTypeConverters(this IList<JsonConverter> converters, string outputFormat = default, bool localized = false)
    {
        converters.Add(new NewtonsoftJsonDateTimeJsonConverter(outputFormat));
        converters.Add(new NewtonsoftNullableJsonDateTimeJsonConverter(outputFormat));

        converters.Add(new NewtonsoftJsonDateTimeOffsetJsonConverter(outputFormat, localized));
        converters.Add(new NewtonsoftJsonNullableDateTimeOffsetJsonConverter(outputFormat, localized));

        return converters;
    }

    /// <summary>
    /// 添加 long/long? 类型序列化处理
    /// </summary>
    /// <remarks></remarks>
    public static IList<JsonConverter> AddLongTypeConverters(this IList<JsonConverter> converters)
    {
        converters.Add(new NewtonsoftJsonLongToStringJsonConverter());
        converters.Add(new NewtonsoftJsonNullableLongToStringJsonConverter());

        return converters;
    }

    /// <summary>
    /// 添加 Clay 类型序列化处理
    /// </summary>
    /// <remarks></remarks>
    public static IList<JsonConverter> AddClayConverters(this IList<JsonConverter> converters)
    {
        converters.Add(new NewtonsoftJsonClayJsonConverter());

        return converters;
    }

    /// <summary>
    /// 添加 DateOnly/DateOnly? 类型序列化处理
    /// </summary>
    /// <param name="converters"></param>
    /// <returns></returns>
    public static IList<JsonConverter> AddDateOnlyConverters(this IList<JsonConverter> converters)
    {
#if !NET5_0
        converters.Add(new NewtonsoftJsonDateOnlyJsonConverter());
        converters.Add(new NewtonsoftJsonNullableDateOnlyJsonConverter());
#endif
        return converters;
    }

    /// <summary>
    /// 添加 TimeOnly/TimeOnly? 类型序列化处理
    /// </summary>
    /// <param name="converters"></param>
    /// <returns></returns>
    public static IList<JsonConverter> AddTimeOnlyConverters(this IList<JsonConverter> converters)
    {
#if !NET5_0
        converters.Add(new NewtonsoftJsonTimeOnlyJsonConverter());
        converters.Add(new NewtonsoftJsonNullableTimeOnlyJsonConverter());
#endif
        return converters;
    }
}
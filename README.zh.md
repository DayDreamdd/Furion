**中** | [En](https://github.com/MonkSoul/Furion)

# 先知

一个应用程序框架，您可以将它集成到任何 .NET/C# 应用程序中。

## 安装

```powershell
dotnet add package Furion
```

## 例子

我们在 [主页](https://furion.net) 上有不少例子，这是让您入门的第一个：

```cs
Serve.Run();

[DynamicApiController]
public class HelloService
{
    public string Say() => "Hello, Furion";
}
```

打开浏览器访问 `http://localhost:5000`。

## 文档

您可以在 [主页](https://furion.net) 找到 [Furion](https://gitee.com/dotnetchina/Furion) 文档。

## 贡献

该存储库的主要目的是继续发展 [Furion](https://gitee.com/dotnetchina/Furion) 核心，使其更快、更易于使用。 [Furion](https://gitee.com/dotnetchina/Furion) 的开发在 [Gitee](https://gitee.com/dotnetchina/Furion) 上公开进行，我们感谢社区贡献错误修复和改进。

阅读 [贡献指南](https://gitee.com/dotnetchina/Furion/blob/v4/CONTRIBUTING.md) 内容，了解如何参与改进 [Furion](https://gitee.com/dotnetchina/Furion)。

## 协议

[Furion](https://gitee.com/dotnetchina/Furion) 主要根据 MIT 许可证和 Apache 许可证（版本 2.0）。

有关详细信息，请参阅 [LICENSE-APACHE](https://gitee.com/dotnetchina/Furion/blob/v4/LICENSE-APACHE)、[LICENSE-MIT](https://gitee.com/dotnetchina/Furion/blob/v4/LICENSE-MIT)、[COPYRIGHT](https://gitee.com/dotnetchina/Furion/blob/v4/COPYRIGHT.md) 和 [DISCLAIMER](https://gitee.com/dotnetchina/Furion/blob/v4/DISCLAIMER.md)。

[![](./assets/baiqian.svg)](https://baiqian.com)

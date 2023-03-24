"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[4415],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=c(n),m=o,f=s["".concat(p,".").concat(m)]||s[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5194:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var r=n(7462),o=(n(7294),n(3905)),a=n(4996);const i={id:"net6-to-net7",title:"2.5 .NET6 \u5347\u7ea7 .NET7",sidebar_label:"2.5 .NET6 \u5347\u7ea7 .NET7",description:"\u4e86\u89e3\u5982\u4f55\u4ece .NET6 \u5347\u7ea7\u5230 .NET7"},l=void 0,p={unversionedId:"net6-to-net7",id:"net6-to-net7",title:"2.5 .NET6 \u5347\u7ea7 .NET7",description:"\u4e86\u89e3\u5982\u4f55\u4ece .NET6 \u5347\u7ea7\u5230 .NET7",source:"@site/docs/net6-to-net7.mdx",sourceDirName:".",slug:"/net6-to-net7",permalink:"/docs/net6-to-net7",draft:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/v4/handbook/docs/net6-to-net7.mdx",tags:[],version:"current",lastUpdatedBy:"MonkSoul",lastUpdatedAt:1679553640,formattedLastUpdatedAt:"Mar 23, 2023",frontMatter:{id:"net6-to-net7",title:"2.5 .NET6 \u5347\u7ea7 .NET7",sidebar_label:"2.5 .NET6 \u5347\u7ea7 .NET7",description:"\u4e86\u89e3\u5982\u4f55\u4ece .NET6 \u5347\u7ea7\u5230 .NET7"},sidebar:"docs",previous:{title:"2.5 .NET5 \u5347\u7ea7 .NET6",permalink:"/docs/net5-to-net6"},next:{title:"2.5 .NET7 \u5347\u7ea7 .NET8 \u2728",permalink:"/docs/net7-to-net8"}},c={},d=[{value:"2.5.1 \u5347\u7ea7\u6ce8\u610f\u4e8b\u9879",id:"251-\u5347\u7ea7\u6ce8\u610f\u4e8b\u9879",level:2},{value:"2.5.1.1 \u5b89\u88c5 <code>.NET7 SDK</code>",id:"2511-\u5b89\u88c5-net7-sdk",level:3},{value:"2.5.1.2 \u7f16\u8f91 <code>.csproj</code> \u6587\u4ef6",id:"2512-\u7f16\u8f91-csproj-\u6587\u4ef6",level:3},{value:"2.5.1.3 \u5347\u7ea7 <code>NuGet</code> \u5305",id:"2513-\u5347\u7ea7-nuget-\u5305",level:3},{value:"2.5.1.4 \u91cd\u65b0\u7f16\u8bd1\u6574\u4e2a\u89e3\u51b3\u65b9\u6848",id:"2514-\u91cd\u65b0\u7f16\u8bd1\u6574\u4e2a\u89e3\u51b3\u65b9\u6848",level:3}],s={toc:d},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:".NET7 \u53d1\u5e03",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"\ud83d\ude80\ud83c\udf89\ud83d\udd25 2022 \u5e74 11 \u6708 08 \u65e5\uff0c\u5fae\u8f6f\u53d1\u5e03\u4e86 .NET7 \u9996\u4e2a\u6b63\u5f0f\u7248\u3002"))),(0,o.kt)("h2",{id:"251-\u5347\u7ea7\u6ce8\u610f\u4e8b\u9879"},"2.5.1 \u5347\u7ea7\u6ce8\u610f\u4e8b\u9879"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u76ee\u524d\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"strong"},"Furion")," \u6240\u6709\u7248\u672c\uff080.x-3.x\uff09\u7684\u7528\u6237\u5747\u53ef\u4ee5\u5feb\u901f\u65e0\u7f1d\u5347\u7ea7\u81f3 ",(0,o.kt)("inlineCode",{parentName:"strong"},"Furion v4.x")," \u7248\u672c\uff0c\u53ea\u9700\u8981\u505a\u5c11\u91cf\u66f4\u6539\u5373\u53ef\u3002")),(0,o.kt)("h3",{id:"2511-\u5b89\u88c5-net7-sdk"},"2.5.1.1 \u5b89\u88c5 ",(0,o.kt)("inlineCode",{parentName:"h3"},".NET7 SDK")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://dotnet.microsoft.com/download/dotnet/7.0"},"https://dotnet.microsoft.com/download/dotnet/7.0")),(0,o.kt)("h3",{id:"2512-\u7f16\u8f91-csproj-\u6587\u4ef6"},"2.5.1.2 \u7f16\u8f91 ",(0,o.kt)("inlineCode",{parentName:"h3"},".csproj")," \u6587\u4ef6"),(0,o.kt)("p",null,"\u7f16\u8f91\u89e3\u51b3\u65b9\u6848\u6240\u6709\u9879\u76ee\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},".csproj")," \u6587\u4ef6\uff0c\u5e76\u66ff\u6362 ",(0,o.kt)("inlineCode",{parentName:"p"},"<TargetFramework>net6.0</TargetFramework>")," \u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"<TargetFramework>net7.0</TargetFramework>"),"\uff0c\u5982\uff1a"),(0,o.kt)("img",{src:(0,a.Z)("img/net73.png")}),(0,o.kt)("p",null,"\u5f53\u7136\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"Ctrl + F")," \u5168\u5c40\u66ff\u6362"),(0,o.kt)("img",{src:(0,a.Z)("img/net74.png")}),(0,o.kt)("h3",{id:"2513-\u5347\u7ea7-nuget-\u5305"},"2.5.1.3 \u5347\u7ea7 ",(0,o.kt)("inlineCode",{parentName:"h3"},"NuGet")," \u5305"),(0,o.kt)("p",null,"\u5c06 ",(0,o.kt)("inlineCode",{parentName:"p"},"Furion")," \u6240\u6709\u5305\u5347\u7ea7\u81f3 ",(0,o.kt)("inlineCode",{parentName:"p"},"v4.8.7.20")," \u7248\u672c\uff0c\u540c\u65f6 ",(0,o.kt)("inlineCode",{parentName:"p"},"Microsoft")," \u6240\u6709\u5305\u5347\u7ea7\u81f3 ",(0,o.kt)("inlineCode",{parentName:"p"},"v7.0.3")," \u7248\u672c\uff0c\u5982\uff1a"),(0,o.kt)("img",{src:(0,a.Z)("img/net75.png")}),(0,o.kt)("h3",{id:"2514-\u91cd\u65b0\u7f16\u8bd1\u6574\u4e2a\u89e3\u51b3\u65b9\u6848"},"2.5.1.4 \u91cd\u65b0\u7f16\u8bd1\u6574\u4e2a\u89e3\u51b3\u65b9\u6848"),(0,o.kt)("p",null,"\u5347\u7ea7\u5b8c\u6210\uff01\uff01\uff01"))}m.isMDXComponent=!0}}]);
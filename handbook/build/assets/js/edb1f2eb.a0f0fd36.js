"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[939],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,k=u["".concat(s,".").concat(m)]||u[m]||p[m]||l;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3539:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return p}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={id:"dbcontext-sql-template",title:"9.16 Sql \u6a21\u677f",sidebar_label:"9.16 Sql \u6a21\u677f"},s=void 0,d={unversionedId:"dbcontext-sql-template",id:"dbcontext-sql-template",title:"9.16 Sql \u6a21\u677f",description:"9.16.1 Sql \u6a21\u677f",source:"@site/docs/dbcontext-sql-template.mdx",sourceDirName:".",slug:"/dbcontext-sql-template",permalink:"/furion/docs/dbcontext-sql-template",draft:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/net6/handbook/docs/dbcontext-sql-template.mdx",tags:[],version:"current",lastUpdatedBy:"MonkSoul",lastUpdatedAt:1651894493,formattedLastUpdatedAt:"5/7/2022",frontMatter:{id:"dbcontext-sql-template",title:"9.16 Sql \u6a21\u677f",sidebar_label:"9.16 Sql \u6a21\u677f"},sidebar:"docs",previous:{title:"9.15 Sql \u64cd\u4f5c",permalink:"/furion/docs/dbcontext-sql"},next:{title:"9.17 Sql \u9ad8\u7ea7\u4ee3\u7406",permalink:"/furion/docs/dbcontext-sql-proxy"}},c={},p=[{value:"9.16.1 <code>Sql</code> \u6a21\u677f",id:"9161-sql-\u6a21\u677f",level:2},{value:"9.16.2 <code>Sql</code> \u6a21\u677f\u4f18\u7f3a\u70b9",id:"9162-sql-\u6a21\u677f\u4f18\u7f3a\u70b9",level:2},{value:"9.16.2.1 \u4f18\u70b9",id:"91621-\u4f18\u70b9",level:3},{value:"9.16.2.2 \u7f3a\u70b9",id:"91622-\u7f3a\u70b9",level:3},{value:"9.16.3 \u5982\u4f55\u4f7f\u7528",id:"9163-\u5982\u4f55\u4f7f\u7528",level:2},{value:"9.16.3.1 \u5e38\u89c4\u4f7f\u7528",id:"91631-\u5e38\u89c4\u4f7f\u7528",level:3},{value:"9.16.3.2 \u9ad8\u7ea7\u5d4c\u5957",id:"91632-\u9ad8\u7ea7\u5d4c\u5957",level:3},{value:"9.16.4 <code>Sql</code> \u6a21\u677f\u914d\u7f6e",id:"9164-sql-\u6a21\u677f\u914d\u7f6e",level:2},{value:"9.16.4.1 \u666e\u901a\u6a21\u5f0f",id:"91641-\u666e\u901a\u6a21\u5f0f",level:3},{value:"9.16.4.2 \u66f4\u591a\u914d\u7f6e",id:"91642-\u66f4\u591a\u914d\u7f6e",level:3},{value:"9.16.5 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"9165-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}],u={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"9161-sql-\u6a21\u677f"},"9.16.1 ",(0,l.kt)("inlineCode",{parentName:"h2"},"Sql")," \u6a21\u677f"),(0,l.kt)("p",null,"\u901a\u5e38\u6211\u4eec\u7a0b\u5e8f\u4e2d\u6267\u884c\u6570\u636e\u5e93\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"sql")," \u8bed\u53e5\u90fd\u5199\u5728\u4e86\u7a0b\u5e8f\u96c6\u4e2d\uff0c\u968f\u7a0b\u5e8f\u4e00\u8d77\u7f16\u8bd1\uff0c\u540e\u7eed\u9700\u8981\u4fee\u6539\uff0c\u5219\u91cd\u65b0\u7f16\u8bd1\u4ee3\u7801\u3002"),(0,l.kt)("p",null,"\u6240\u4ee5\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"Furion")," \u521b\u9020\u51fa\u4e00\u79cd ",(0,l.kt)("inlineCode",{parentName:"p"},"Sql")," \u6a21\u677f\u7684\u65b9\u5f0f\uff0c\u7a0b\u5e8f\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"Sql")," \u65f6\uff0c\u53ea\u9700\u8981\u4f7f\u7528\u7279\u6b8a\u6807\u8bb0\u5373\u53ef\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"#(\u6a21\u677fKey)"),"\uff0c\u8fd9\u4e9b\u771f\u5b9e\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Sql")," \u914d\u7f6e\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},".json")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},".xml")," \u914d\u7f6e\u6587\u4ef6\u4e2d\u3002"),(0,l.kt)("p",null,"\u5982\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Json")," \u65b9\u5f0f")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:"showLineNumbers",showLineNumbers:!0},'{\n  "Select.User": "select * from User where id > @id"\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Xml")," \u65b9\u5f0f")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8" ?>\n<configuration>\n  <Select.User>select * from User where id > @id</Select.User>\n</configuration>\n')),(0,l.kt)("h2",{id:"9162-sql-\u6a21\u677f\u4f18\u7f3a\u70b9"},"9.16.2 ",(0,l.kt)("inlineCode",{parentName:"h2"},"Sql")," \u6a21\u677f\u4f18\u7f3a\u70b9"),(0,l.kt)("h3",{id:"91621-\u4f18\u70b9"},"9.16.2.1 \u4f18\u70b9"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301 ",(0,l.kt)("inlineCode",{parentName:"li"},"Sql")," \u52a8\u6001\u914d\u7f6e\uff0c\u53ef\u5728\u7a0b\u5e8f\u8fd0\u884c\u65f6\u52a8\u6001\u8c03\u914d ",(0,l.kt)("inlineCode",{parentName:"li"},"Sql")," \u8bed\u53e5"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u7a0b\u5e8f ",(0,l.kt)("inlineCode",{parentName:"li"},"Sql")," \u8bed\u53e5\u52a0\u5bc6")),(0,l.kt)("h3",{id:"91622-\u7f3a\u70b9"},"9.16.2.2 \u7f3a\u70b9"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9700\u589e\u52a0\u5bf9\u5e94\u914d\u7f6e\u6587\u4ef6"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u5bb9\u6613\u8c03\u8bd5 ",(0,l.kt)("inlineCode",{parentName:"li"},"Sql")," \u4ee3\u7801")),(0,l.kt)("h2",{id:"9163-\u5982\u4f55\u4f7f\u7528"},"9.16.3 \u5982\u4f55\u4f7f\u7528"),(0,l.kt)("p",null,"\u5728\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"Sql")," \u7684\u65f6\u5019\uff0c\u53ea\u9700\u8981\u586b\u5199\u6307\u5b9a\u6a21\u677f\u5373\u53ef\u3002"),(0,l.kt)("h3",{id:"91631-\u5e38\u89c4\u4f7f\u7528"},"9.16.3.1 \u5e38\u89c4\u4f7f\u7528"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'// \u4ed3\u50a8\u65b9\u5f0f\nvar users = repository.SqlQuery<User>("#(Select.User)", new { id = 1});\n\n// \u61d2\u4eba\u65b9\u5f0f\nvar users = "#(Select.User)".SqlQuery<User>(new { id = 1});\n\n// Sql \u4ee3\u7406\u65b9\u5f0f\n[SqlExecute("#(Select.User)")]\nList<User> GetUser(int id);\n')),(0,l.kt)("h3",{id:"91632-\u9ad8\u7ea7\u5d4c\u5957"},"9.16.3.2 \u9ad8\u7ea7\u5d4c\u5957"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'var users = repository.SqlQuery<User>(\n@"select * from user u\nleft join #(User.Detail) d on u.Id = d.UserId\nwhere id > @id");\n')),(0,l.kt)("h2",{id:"9164-sql-\u6a21\u677f\u914d\u7f6e"},"9.16.4 ",(0,l.kt)("inlineCode",{parentName:"h2"},"Sql")," \u6a21\u677f\u914d\u7f6e"),(0,l.kt)("h3",{id:"91641-\u666e\u901a\u6a21\u5f0f"},"9.16.4.1 \u666e\u901a\u6a21\u5f0f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:"showLineNumbers",showLineNumbers:!0},'{\n  "Select.User": "select * from User"\n}\n')),(0,l.kt)("h3",{id:"91642-\u66f4\u591a\u914d\u7f6e"},"9.16.4.2 \u66f4\u591a\u914d\u7f6e"),(0,l.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u529f\u80fd\u79fb\u9664\u58f0\u660e")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u4ee5\u4e0b\u5185\u5bb9\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"Furion 2.13 +")," \u7248\u672c\u4e2d\u5df2\u79fb\u9664\u3002"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:"showLineNumbers",showLineNumbers:!0},'{\n  "Select.User": {\n    "Sql": "select * from User where id > @id and Name = @name",\n    "Params": [\n      {\n        "Name": " Id",\n        "Value": "1",\n        "DbType": "Int16",\n        "Size": 10\n      },\n      {\n        "Name": " Name",\n        "Value": "\u767e\u5c0f\u50e7",\n        "DbType": "String",\n        "Size": 10\n      }\n    ]\n  }\n}\n')),(0,l.kt)("h2",{id:"9165-\u53cd\u9988\u4e0e\u5efa\u8bae"},"9.16.5 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u7ed9 Furion \u63d0 ",(0,l.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002"))))}m.isMDXComponent=!0}}]);
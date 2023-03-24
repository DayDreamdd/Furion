"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[4821],{3905:(e,n,r)=>{r.d(n,{Zo:()=>l,kt:()=>d});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=t.createContext({}),p=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},l=function(e){var n=p(e.components);return t.createElement(u.Provider,{value:n},e.children)},y="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,s=e.originalType,u=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),y=p(r),m=a,d=y["".concat(u,".").concat(m)]||y[m]||c[m]||s;return r?t.createElement(d,i(i({ref:n},l),{},{components:r})):t.createElement(d,i({ref:n},l))}));function d(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=m;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o[y]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<s;p++)i[p]=r[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8724:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var t=r(7462),a=(r(7294),r(3905));const s={id:"dbcontext-query",title:"9.10 \u67e5\u8be2\u64cd\u4f5c",sidebar_label:"9.10 \u67e5\u8be2\u64cd\u4f5c"},i=void 0,o={unversionedId:"dbcontext-query",id:"dbcontext-query",title:"9.10 \u67e5\u8be2\u64cd\u4f5c",description:"9.10.1 \u6839\u636e\u4e3b\u952e\u67e5\u8be2\u4e00\u6761",source:"@site/docs/dbcontext-query.mdx",sourceDirName:".",slug:"/dbcontext-query",permalink:"/docs/dbcontext-query",draft:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/v4/handbook/docs/dbcontext-query.mdx",tags:[],version:"current",lastUpdatedBy:"MonkSoul",lastUpdatedAt:1651894493,formattedLastUpdatedAt:"May 7, 2022",frontMatter:{id:"dbcontext-query",title:"9.10 \u67e5\u8be2\u64cd\u4f5c",sidebar_label:"9.10 \u67e5\u8be2\u64cd\u4f5c"},sidebar:"docs",previous:{title:"9.9 \u6279\u91cf\u64cd\u4f5c",permalink:"/docs/dbcontext-batch"},next:{title:"9.11 \u9ad8\u7ea7\u67e5\u8be2\u64cd\u4f5c",permalink:"/docs/dbcontext-hight-query"}},u={},p=[{value:"9.10.1 \u6839\u636e\u4e3b\u952e\u67e5\u8be2\u4e00\u6761",id:"9101-\u6839\u636e\u4e3b\u952e\u67e5\u8be2\u4e00\u6761",level:2},{value:"9.10.2 \u6839\u636e\u6761\u4ef6\u67e5\u8be2\u4e00\u6761",id:"9102-\u6839\u636e\u6761\u4ef6\u67e5\u8be2\u4e00\u6761",level:2},{value:"9.10.3 \u67e5\u8be2\u6240\u6709\u6570\u636e",id:"9103-\u67e5\u8be2\u6240\u6709\u6570\u636e",level:2},{value:"9.10.4 \u6839\u636e\u6761\u4ef6\u67e5\u8be2\u6240\u6709\u6570\u636e",id:"9104-\u6839\u636e\u6761\u4ef6\u67e5\u8be2\u6240\u6709\u6570\u636e",level:2},{value:"9.10.5 \u5206\u9875\u67e5\u8be2",id:"9105-\u5206\u9875\u67e5\u8be2",level:2},{value:"9.10.6 \u5176\u4ed6\u67e5\u8be2",id:"9106-\u5176\u4ed6\u67e5\u8be2",level:2},{value:"9.10.6.1 \u67e5\u770b\u8bb0\u5f55\u662f\u5426\u5b58\u5728",id:"91061-\u67e5\u770b\u8bb0\u5f55\u662f\u5426\u5b58\u5728",level:3},{value:"9.10.6.2 \u67e5\u8be2\u8bb0\u5f55\u6570",id:"91062-\u67e5\u8be2\u8bb0\u5f55\u6570",level:3},{value:"9.10.6.3 \u67e5\u8be2\u6700\u5927\u503c",id:"91063-\u67e5\u8be2\u6700\u5927\u503c",level:3},{value:"9.10.6.4 \u67e5\u8be2\u6700\u5c0f\u503c",id:"91064-\u67e5\u8be2\u6700\u5c0f\u503c",level:3},{value:"9.10.6.5 \u6c42\u548c\u67e5\u8be2",id:"91065-\u6c42\u548c\u67e5\u8be2",level:3},{value:"9.10.6.6 \u6c42\u5e73\u5747\u503c\u67e5\u8be2",id:"91066-\u6c42\u5e73\u5747\u503c\u67e5\u8be2",level:3},{value:"9.10.6.7 \u65f6\u95f4\u67e5\u8be2",id:"91067-\u65f6\u95f4\u67e5\u8be2",level:3},{value:"9.10.6.8 \u6a21\u7cca\u67e5\u8be2",id:"91068-\u6a21\u7cca\u67e5\u8be2",level:3},{value:"9.10.6.9 <code>Case When</code>",id:"91069-case-when",level:3},{value:"9.10.7 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"9107-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}],l={toc:p},y="wrapper";function c(e){let{components:n,...r}=e;return(0,a.kt)(y,(0,t.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"9101-\u6839\u636e\u4e3b\u952e\u67e5\u8be2\u4e00\u6761"},"9.10.1 \u6839\u636e\u4e3b\u952e\u67e5\u8be2\u4e00\u6761"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nvar person = repository.Find(1);\n\n// \u793a\u4f8b\u4e8c\nvar person = repository.FindOrDefault(1);\n\n// \u793a\u4f8b\u4e09\nvar person = repository.Entities.Find(1);\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nvar person = await repository.FindAsync(1);\n\n// \u793a\u4f8b\u4e8c\nvar person = await repository.FindOrDefaultAsync(1);\n\n// \u793a\u4f8b\u4e09\nvar person = await repository.Entities.FindAsync(1);\n\n")),(0,a.kt)("admonition",{title:"\u5c0f\u63d0\u793a",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u53ef\u4ee5\u652f\u6301\u591a\u4e2a\u952e\u67e5\u8be2\uff0c\u5982\u4e3b\u952e\u3001\u8054\u5408\u952e\u3002",(0,a.kt)("inlineCode",{parentName:"p"},'repository.Find(1, "\u767e\u5c0f\u50e7")'),";")),(0,a.kt)("h2",{id:"9102-\u6839\u636e\u6761\u4ef6\u67e5\u8be2\u4e00\u6761"},"9.10.2 \u6839\u636e\u6761\u4ef6\u67e5\u8be2\u4e00\u6761"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nvar person = repository.Single(u => u.Name == "Furion");\n\n// \u793a\u4f8b\u4e8c\nvar person = repository.SingleOrDefault(u => u.Name == "Furion");\n\n// \u793a\u4f8b\u4e09\nvar person = repository.First(u => u.Name == "Furion");\n\n// \u793a\u4f8b\u56db\nvar person = repository.FirstOrDefault(u => u.Name == "Furion");\n\n// \u793a\u4f8b\u4e94\nvar person = repository.Last(u => u.Name == "Furion");\n\n// \u793a\u4f8b\u516d\nvar person = repository.LastOrDefault(u => u.Name == "Furion");\n\n// \u793a\u4f8b\u4e03\nvar person = repository.Entities.Single(u => u.Name == "Furion");\n\n// \u793a\u4f8b\u516b\nvar person = repository.Entities.First(u => u.Name == "Furion");\n\n// \u793a\u4f8b\u4e5d\nvar person = repository.Entities.FirstOrDefault(u => u.Name == "Furion");\n\n// \u793a\u4f8b\u5341\nvar person = repository.Entities.Last(u => u.Name == "Furion");\n\n// \u793a\u4f8b\u5341\u4e00\nvar person = repository.Entities.LastOrDefault(u => u.Name == "Furion");\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nvar person = await repository.SingleAsync(u => u.Name == "Furion");\n\n// \u793a\u4f8b\u4e8c\nvar person = await repository.SingleOrDefaultAsync(u => u.Name == "Furion");\n\n// \u793a\u4f8b\u4e09\nvar person = await repository.FirstAsync(u => u.Name == "Furion");\n\n// \u793a\u4f8b\u56db\nvar person = await repository.FirstOrDefaultAsync(u => u.Name == "Furion");\n\n// \u793a\u4f8b\u4e94\nvar person = await repository.LastAsync(u => u.Name == "Furion");\n\n// \u793a\u4f8b\u516d\nvar person = await repository.LastOrDefaultAsync(u => u.Name == "Furion");\n\n// \u793a\u4f8b\u4e03\nvar person = await repository.Entities.SingleAsync(u => u.Name == "Furion");\n\n// \u793a\u4f8b\u516b\nvar person = await repository.Entities.FirstAsync(u => u.Name == "Furion");\n\n// \u793a\u4f8b\u4e5d\nvar person = await repository.Entities.FirstOrDefaultAsync(u => u.Name == "Furion");\n\n// \u793a\u4f8b\u5341\nvar person = await repository.Entities.LastAsync(u => u.Name == "Furion");\n\n// \u793a\u4f8b\u5341\u4e00\nvar person = await repository.Entities.LastOrDefaultAsync(u => u.Name == "Furion");\n')),(0,a.kt)("h2",{id:"9103-\u67e5\u8be2\u6240\u6709\u6570\u636e"},"9.10.3 \u67e5\u8be2\u6240\u6709\u6570\u636e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nvar persons = repository.Entities;\n\n// \u793a\u4f8b\u4e8c\nvar persons = repository.DetachedEntities;\n\n// \u793a\u4f8b\u4e09\nvar persons = repository.AsQueryable();\n\n// \u793a\u4f8b\u56db\nvar persons = repository.AsEnumerable();\n\n// \u793a\u4f8b\u4e94\nvar persons = await repository.AsQueryable().ToListAsync();\n")),(0,a.kt)("h2",{id:"9104-\u6839\u636e\u6761\u4ef6\u67e5\u8be2\u6240\u6709\u6570\u636e"},"9.10.4 \u6839\u636e\u6761\u4ef6\u67e5\u8be2\u6240\u6709\u6570\u636e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'// \u793a\u4f8b\u4e00\nvar persons = repository.Where(u => u.Id > 10);\n\n// \u793a\u4f8b\u4e8c\nvar persons = repository.Where(u => u.Id > 10 && u.Name.Equals("Furion"));\n\n// \u793a\u4f8b\u4e09  (\u591a\u4e2a where \u91cc\u662f "\u5e76\u4e14"\uff0cId>10 and Name == "Furion")\nvar persons = repository.Where(u => u.Id > 10).Where(u => u.Name.Equals("Furion"));\n\n// \u793a\u4f8b\u56db (\u5224\u65ad name \u662f\u5426\u6709\u503c\uff0c\u5982\u679c name \u662f\u7a7a\u7684\u5219\u4e0d\u4f1a\u6267\u884c u => u.Id > 10 && u.Name.Equals("Furion")\uff0c\u5982\u679c name \u6709\u503c\u5c31\u4f1a\u6267\u884c u => u.Id > 10 && u.Name.Equals("Furion"))\nvar persons = repository.Where(!string.IsNullOrEmpty(name), u => u.Id > 10 && u.Name.Equals("Furion"));\n\n// \u793a\u4f8b\u4e94\nvar persons = repository.Where(!string.IsNullOrEmpty(name), u => u.Id > 10)\n                        .Where(age > 18, u => u.Name.Contains("\u767e\u5c0f\u50e7"))\n                        .Where(u => u.Age > 18);\n\n// \u793a\u4f8b\u516d (\u5728\u4e00\u4e2a where \u91cc\u7528\u9017\u53f7\u5206\u9694\u662f "\u6216\u8005"\uff0cName=="Furion" or Name == "\u767e\u5c0f\u50e7" or Name == "MonkSoul")\nvar persons = repository.Where(u => u.Name == "Furion",\n                                 u => u.Name == "\u767e\u5c0f\u50e7",\n                                 u => u.Name == "MonkSoul");\n\n// \u793a\u4f8b\u4e03\nvar persons = repository.Where(u => u.Id > 10).Where(u => u.Name.Equals("Furion"))\n                        .Where(age > 18, u => u.Name.Contains("\u767e\u5c0f\u50e7"))\n                        .Where(u => u.Name == "Furion",\n                                 u => u.Name == "\u767e\u5c0f\u50e7",\n                                 u => u.Name == "MonkSoul");\n\n// \u793a\u4f8b\u516b\nvar persons = repository.Where((age > 18, u => u.Name == "Furion"),\n                                   (!string.IsNullOrEmpty(name), u => u.Id > 10));\n\n// \u793a\u4f8b\u4e5d\nvar persons = repository.Where(u => u.Id > 10).Where(u => u.Name.Equals("Furion"))\n                        .Where(age > 18, u => u.Name.Contains("\u767e\u5c0f\u50e7"))\n                        .Where(u => u.Name == "Furion",\n                                 u => u.Name == "\u767e\u5c0f\u50e7",\n                                 u => u.Name == "MonkSoul")\n                        .Where((age > 18, u => u.Name == "Furion"),\n                                   (!string.IsNullOrEmpty(name), u => u.Id > 10));\n\n// \u793a\u4f8b\u5341\nvar persons = repository.Entities.Where(u => u.Id > 10)\n                                 .Where(age > 18, u => u.Name.Contains("\u767e\u5c0f\u50e7"));\n\n// \u793a\u4f8b\u5341\u4e00\nvar persons = repository.DetachedEntities.Where(u => u.Id > 20);\n\n// \u793a\u4f8b\u5341\u4e8c\nvar persons = repository.AsQueryable(u => u.Id > 20).Where(u => u.Name == "Furion");\n')),(0,a.kt)("h2",{id:"9105-\u5206\u9875\u67e5\u8be2"},"9.10.5 \u5206\u9875\u67e5\u8be2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nvar persons = repository.Where(u => u.Id > 10).ToPagedList();\n\n// \u793a\u4f8b\u4e8c\nvar persons = repository.Where(u => u.Id > 10).ToPagedList(1, 10);\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nvar persons = await repository.Where(u => u.Id > 10).ToPagedListAsync();\n\n// \u793a\u4f8b\u4e8c\nvar persons = await repository.Where(u => u.Id > 10).ToPagedListAsync(1, 10);\n")),(0,a.kt)("h2",{id:"9106-\u5176\u4ed6\u67e5\u8be2"},"9.10.6 \u5176\u4ed6\u67e5\u8be2"),(0,a.kt)("h3",{id:"91061-\u67e5\u770b\u8bb0\u5f55\u662f\u5426\u5b58\u5728"},"9.10.6.1 \u67e5\u770b\u8bb0\u5f55\u662f\u5426\u5b58\u5728"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nvar isExists = repository.Any();\n\n// \u793a\u4f8b\u4e8c\nvar isExists = repository.Any(u => u.Id > 10);\n\n// \u793a\u4f8b\u4e09\nvar isExists = repository.Entities.Any();\n\n// \u793a\u4f8b\u56db\nvar isExists = repository.DetachedEntities.Any(u => u.Id > 10);\n\n// \u793a\u4f8b\u4e94\nvar isExists = repository.Where(u => u.Id > 10).Any();\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nvar isExists = await repository.AnyAsync();\n\n// \u793a\u4f8b\u4e8c\nvar isExists = await repository.AnyAsync(u => u.Id > 10);\n\n// \u793a\u4f8b\u4e09\nvar isExists = await repository.Entities.AnyAsync();\n\n// \u793a\u4f8b\u56db\nvar isExists = await repository.DetachedEntities.AnyAsync(u => u.Id > 10);\n\n// \u793a\u4f8b\u4e94\nvar isExists = await repository.Where(u => u.Id > 10).AnyAsync();\n")),(0,a.kt)("h3",{id:"91062-\u67e5\u8be2\u8bb0\u5f55\u6570"},"9.10.6.2 \u67e5\u8be2\u8bb0\u5f55\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nvar count = repository.Count();\n\n// \u793a\u4f8b\u4e8c\nvar count = repository.Count(u => u.Id > 10);\n\n// \u793a\u4f8b\u4e09\nvar count = repository.Entities.Count(u => u.Id > 10);\n\n// \u793a\u4f8b\u56db\nvar count = repository.Entities.DetachedEntities.Count();\n\n// \u793a\u4f8b\u4e94\nvar count = repository.Where(u => u.Id > 10).Count();\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nvar count = await repository.CountAsync();\n\n// \u793a\u4f8b\u4e8c\nvar count = await repository.CountAsync(u => u.Id > 10);\n\n// \u793a\u4f8b\u4e09\nvar count = await repository.Entities.CountAsync(u => u.Id > 10);\n\n// \u793a\u4f8b\u56db\nvar count = await repository.Entities.DetachedEntities.CountAsync();\n\n// \u793a\u4f8b\u4e94\nvar count = await repository.Where(u => u.Id > 10).CountAsync();\n")),(0,a.kt)("h3",{id:"91063-\u67e5\u8be2\u6700\u5927\u503c"},"9.10.6.3 \u67e5\u8be2\u6700\u5927\u503c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nvar entity = repository.Max();\n\n// \u793a\u4f8b\u4e8c\nvar value = repository.Max(u => u.Id);\n\n// \u793a\u4f8b\u4e09\nvar entity = repository.Entities.Max();\n\n// \u793a\u4f8b\u56db\nvar value = repository.Entities.DetachedEntities.Max(u => u.Age);\n\n// \u793a\u4f8b\u4e94\nvar value = repository.Where(u => u.Id > 10).Max(u => u.Age);\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nvar entity = await repository.MaxAsync();\n\n// \u793a\u4f8b\u4e8c\nvar value = await repository.MaxAsync(u => u.Id);\n\n// \u793a\u4f8b\u4e09\nvar entity = await repository.Entities.MaxAsync();\n\n// \u793a\u4f8b\u56db\nvar value = await repository.Entities.DetachedEntities.MaxAsync(u => u.Age);\n\n// \u793a\u4f8b\u4e94\nvar value = await repository.Where(u => u.Id > 10).MaxAsync(u => u.Age);\n")),(0,a.kt)("h3",{id:"91064-\u67e5\u8be2\u6700\u5c0f\u503c"},"9.10.6.4 \u67e5\u8be2\u6700\u5c0f\u503c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nvar entity = repository.Min();\n\n// \u793a\u4f8b\u4e8c\nvar value = repository.Min(u => u.Id);\n\n// \u793a\u4f8b\u4e09\nvar entity = repository.Entities.Min();\n\n// \u793a\u4f8b\u56db\nvar value = repository.Entities.DetachedEntities.Min(u => u.Age);\n\n// \u793a\u4f8b\u4e94\nvar value = repository.Where(u => u.Id > 10).Min(u => u.Age);\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nvar entity = await repository.MinAsync();\n\n// \u793a\u4f8b\u4e8c\nvar value = await repository.MinAsync(u => u.Id);\n\n// \u793a\u4f8b\u4e09\nvar entity = await repository.Entities.MinAsync();\n\n// \u793a\u4f8b\u56db\nvar value = await repository.Entities.DetachedEntities.MinAsync(u => u.Age);\n\n// \u793a\u4f8b\u4e94\nvar value = await repository.Where(u => u.Id > 10).MinAsync(u => u.Age);\n")),(0,a.kt)("h3",{id:"91065-\u6c42\u548c\u67e5\u8be2"},"9.10.6.5 \u6c42\u548c\u67e5\u8be2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nvar sum = repository.Entities.Sum(u => u.Cost);\n\n// \u793a\u4f8b\u4e8c\nvar sum = repository.AsQueryable().Sum(u => u.Cost);\n\n// \u793a\u4f8b\u4e09\nvar sum = repository.DetachedEntities.Sum(u => u.Cost);\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nvar sum = await repository.Entities.SumAsync(u => u.Cost);\n\n// \u793a\u4f8b\u4e8c\nvar sum = await repository.AsQueryable().SumAsync(u => u.Cost);\n\n// \u793a\u4f8b\u4e09\nvar sum = await repository.DetachedEntities.SumAsync(u => u.Cost);\n")),(0,a.kt)("h3",{id:"91066-\u6c42\u5e73\u5747\u503c\u67e5\u8be2"},"9.10.6.6 \u6c42\u5e73\u5747\u503c\u67e5\u8be2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"// ==== \u540c\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nvar sum = repository.Entities.Average(u => u.Cost);\n\n// \u793a\u4f8b\u4e8c\nvar sum = repository.AsQueryable().Average(u => u.Cost);\n\n// \u793a\u4f8b\u4e09\nvar sum = repository.DetachedEntities.Average(u => u.Cost);\n\n// ==== \u5f02\u6b65\u64cd\u4f5c ====\n\n// \u793a\u4f8b\u4e00\nvar sum = await repository.Entities.AverageAsync(u => u.Cost);\n\n// \u793a\u4f8b\u4e8c\nvar sum = await repository.AsQueryable().AverageAsync(u => u.Cost);\n\n// \u793a\u4f8b\u4e09\nvar sum = await repository.DetachedEntities.AverageAsync(u => u.Cost);\n")),(0,a.kt)("h3",{id:"91067-\u65f6\u95f4\u67e5\u8be2"},"9.10.6.7 \u65f6\u95f4\u67e5\u8be2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'var starDate = DateTime.Parse("2020-09-10");\nvar endDate = DateTime.Parse("2020-09-10");\nvar query = repository.Where(u => u.CreatedDt >= starDate && u.CreatedDt <= endDate);\n')),(0,a.kt)("h3",{id:"91068-\u6a21\u7cca\u67e5\u8be2"},"9.10.6.8 \u6a21\u7cca\u67e5\u8be2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'// \u793a\u4f8b\u4e00\nrepository.Where(u => u.Name.StartsWith("Furion"));\n\n// \u793a\u4f8b\u4e8c\n_testRepository.Where(u => u.Name.EndsWith("Furion"));\n\n// \u793a\u4f8b\u4e09\n_testRepository.Where(u => u.Name.Contains("Furion"));\n')),(0,a.kt)("h3",{id:"91069-case-when"},"9.10.6.9 ",(0,a.kt)("inlineCode",{parentName:"h3"},"Case When")),(0,a.kt)("p",null,"\u6570\u636e\u5e93\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Case When")," \u5b9e\u9645\u4e0a\u5bf9\u5e94\u7684\u662f\u6211\u4eec\u7a0b\u5e8f\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"\u4e09\u5143\u8868\u8fbe\u5f0f")," \uff0c\u4e5f\u5c31\u662f\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"\u4e09\u5143\u8868\u8fbe\u5f0f")," \u5373\u53ef\u81ea\u52a8\u751f\u6210 ",(0,a.kt)("inlineCode",{parentName:"p"},"Case When")," \u8bed\u53e5\u3002"),(0,a.kt)("h2",{id:"9107-\u53cd\u9988\u4e0e\u5efa\u8bae"},"9.10.7 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,a.kt)("admonition",{title:"\u4e0e\u6211\u4eec\u4ea4\u6d41",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u7ed9 Furion \u63d0 ",(0,a.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002")))}c.isMDXComponent=!0}}]);
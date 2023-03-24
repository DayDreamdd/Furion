"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[4091],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(n),m=o,f=s["".concat(p,".").concat(m)]||s[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6155:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={id:"tp",title:"15. TP \u9759\u6001\u7c7b",sidebar_label:"15. TP \u9759\u6001\u7c7b"},i=void 0,l={unversionedId:"global/tp",id:"global/tp",title:"15. TP \u9759\u6001\u7c7b",description:"\u4ee5\u4e0b\u5185\u5bb9\u4ec5\u9650 Furion 3.5.3 + \u7248\u672c\u4f7f\u7528\u3002",source:"@site/docs/global/tp.mdx",sourceDirName:"global",slug:"/global/tp",permalink:"/docs/global/tp",draft:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/v4/handbook/docs/global/tp.mdx",tags:[],version:"current",lastUpdatedBy:"MonkSoul",lastUpdatedAt:1677751808,formattedLastUpdatedAt:"Mar 2, 2023",frontMatter:{id:"tp",title:"15. TP \u9759\u6001\u7c7b",sidebar_label:"15. TP \u9759\u6001\u7c7b"},sidebar:"global",previous:{title:"14. JWTEncryption \u9759\u6001\u7c7b",permalink:"/docs/global/jwt"},next:{title:"16. Log \u9759\u6001\u7c7b",permalink:"/docs/global/log"}},p={},c=[{value:"15.1 \u751f\u6210\u89c4\u8303\u7684\u65e5\u5fd7\u6a21\u677f",id:"151-\u751f\u6210\u89c4\u8303\u7684\u65e5\u5fd7\u6a21\u677f",level:2}],u={toc:c},s="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"\u7248\u672c\u8bf4\u660e",type:"important"},(0,o.kt)("p",{parentName:"admonition"},"\u4ee5\u4e0b\u5185\u5bb9\u4ec5\u9650 ",(0,o.kt)("inlineCode",{parentName:"p"},"Furion 3.5.3 +")," \u7248\u672c\u4f7f\u7528\u3002")),(0,o.kt)("h2",{id:"151-\u751f\u6210\u89c4\u8303\u7684\u65e5\u5fd7\u6a21\u677f"},"15.1 \u751f\u6210\u89c4\u8303\u7684\u65e5\u5fd7\u6a21\u677f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'// \u751f\u6210\u6a21\u677f\u5b57\u7b26\u4e32\nvar template = TP.Wrapper("Furion \u6846\u67b6", "\u8ba9 .NET \u5f00\u53d1\u66f4\u7b80\u5355\uff0c\u66f4\u901a\u7528\uff0c\u66f4\u6d41\u884c\u3002",\n    "##\u4f5c\u8005## \u767e\u5c0f\u50e7",\n    "##\u5f53\u524d\u7248\u672c## v3.5.3",\n    "##\u6587\u6863\u5730\u5740## https://furion.baiqian.ltd",\n    "##Copyright## \u767e\u5c0f\u50e7, \u767e\u7b7e\u79d1\u6280\uff08\u5e7f\u4e1c\uff09\u6709\u9650\u516c\u53f8");\n\nConsole.WriteLine(template);\n')),(0,o.kt)("p",null,"\u65e5\u5fd7\u6253\u5370\u6a21\u677f\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"showLineNumbers",showLineNumbers:!0},"\u250f\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501  Furion \u6846\u67b6 \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n\u2523 \u8ba9 .NET \u5f00\u53d1\u66f4\u7b80\u5355\uff0c\u66f4\u901a\u7528\uff0c\u66f4\u6d41\u884c\u3002\n\u2523\n\u2523 \u4f5c\u8005\uff1a        \u767e\u5c0f\u50e7\n\u2523 \u5f53\u524d\u7248\u672c\uff1a    v3.5.3\n\u2523 \u6587\u6863\u5730\u5740\uff1a    https://furion.baiqian.ltd\n\u2523 Copyright\uff1a   \u767e\u5c0f\u50e7, \u767e\u7b7e\u79d1\u6280\uff08\u5e7f\u4e1c\uff09\u6709\u9650\u516c\u53f8\n\u2517\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501  Furion \u6846\u67b6 \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n\n")),(0,o.kt)("admonition",{title:"\u5173\u4e8e\u5c5e\u6027\u751f\u6210",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u5982\u679c\u5217\u8868\u9879\u4ee5 ",(0,o.kt)("inlineCode",{parentName:"p"},"##\u5c5e\u6027\u540d##")," \u5f00\u5934\uff0c\u81ea\u52a8\u751f\u6210 ",(0,o.kt)("inlineCode",{parentName:"p"},"\u5c5e\u6027\u540d\uff1a")," \u4f5c\u4e3a\u884c\u9996\u4e14\u81ea\u52a8\u7b49\u5bbd\u5bf9\u9f50\u3002"),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"Furion 3.9.1")," \u4e4b\u524d\u7248\u672c\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"[\u5c5e\u6027\u540d]")," \u5f00\u5934\u3002")))}d.isMDXComponent=!0}}]);
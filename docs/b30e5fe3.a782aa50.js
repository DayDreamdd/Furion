(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{101:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),b=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=b(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=b(r),d=n,f=p["".concat(a,".").concat(d)]||p[d]||s[d]||i;return r?o.a.createElement(f,c(c({ref:t},l),{},{components:r})):o.a.createElement(f,c({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},102:function(e,t,r){"use strict";var n=r(0),o=r(19);t.a=function(){var e=Object(n.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},103:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return a}));var n=r(102),o=r(104);function i(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var i=void 0===n?{}:n,a=i.forcePrependBaseUrl,c=void 0!==a&&a,u=i.absolute,l=void 0!==u&&u;if(!r)return r;if(r.startsWith("#"))return r;if(Object(o.b)(r))return r;if(c)return t+r;var b=r.startsWith(t)?r:t+r.replace(/^\//,"");return l?e+b:b}(i,r,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},104:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}))},82:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return b}));var n=r(2),o=r(6),i=(r(0),r(101)),a=(r(103),{id:"author",title:"\u5173\u4e8e\u4f5c\u8005",sidebar_label:"1.2 \u5173\u4e8e\u4f5c\u8005"}),c={unversionedId:"author",id:"author",isDocsHomePage:!1,title:"\u5173\u4e8e\u4f5c\u8005",description:"\u4e92\u8054\u7f51\u8d26\u53f7",source:"@site/docs\\author.mdx",slug:"/author",permalink:"/docs/author",editUrl:"https://gitee.com/monksoul/Fur/tree/alpha/docs/docs/author.mdx",version:"current",sidebar_label:"1.2 \u5173\u4e8e\u4f5c\u8005",sidebar:"docs",previous:{title:"\u4ecb\u7ecd",permalink:"/docs/"},next:{title:"\u4e00\u5206\u949f\u5165\u95e8",permalink:"/docs/get-start"}},u=[{value:"\u4e92\u8054\u7f51\u8d26\u53f7",id:"\u4e92\u8054\u7f51\u8d26\u53f7",children:[]},{value:"\u6280\u672f\u80fd\u529b",id:"\u6280\u672f\u80fd\u529b",children:[]},{value:"\u804c\u4e1a\u60c5\u51b5",id:"\u804c\u4e1a\u60c5\u51b5",children:[]},{value:"\u5174\u8da3\u7231\u597d",id:"\u5174\u8da3\u7231\u597d",children:[]},{value:"\u4e2a\u4eba\u4e3b\u9875",id:"\u4e2a\u4eba\u4e3b\u9875",children:[]}],l={rightToc:u};function b(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"\u4e92\u8054\u7f51\u8d26\u53f7"},"\u4e92\u8054\u7f51\u8d26\u53f7"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u767e\u5c0f\u50e7"),Object(i.b)("li",{parentName:"ul"},"Monk/MonkSoul")),Object(i.b)("h2",{id:"\u6280\u672f\u80fd\u529b"},"\u6280\u672f\u80fd\u529b"),Object(i.b)("p",null,"\u81ea 2008 \u5e74 \u63a5\u89e6 IT \u8fd9\u4e2a\u884c\u4e1a\u4e5f\u6709\u5341\u4f59\u5e74\u4e86\uff0c\u5728 \u540e\u7aef\uff08",Object(i.b)("inlineCode",{parentName:"p"},".NET/.NET Core/Java/PHP"),"\uff09\u3001\u79fb\u52a8\u7aef\uff08",Object(i.b)("inlineCode",{parentName:"p"},"Xamarin/\u5c0f\u7a0b\u5e8f/Java/Objective-C"),"\uff09\u3001\u684c\u9762\u7aef\uff08",Object(i.b)("inlineCode",{parentName:"p"},"WinForm/WPF/Electron"),"\uff09\u3001\u524d\u7aef\uff08",Object(i.b)("inlineCode",{parentName:"p"},"React/Vue/Angular/Node"),"\uff09\u7b49\u4e3b\u6d41\u9886\u57df\u7565\u77e5\u4e00\u4e8c\u3002"),Object(i.b)("p",null,"\u540c\u65f6\u5728\u6280\u672f\u57f9\u8bad\u9886\u57df\u4e5f\u591a\u6709\u6d89\u8db3\u3002"),Object(i.b)("h2",{id:"\u804c\u4e1a\u60c5\u51b5"},"\u804c\u4e1a\u60c5\u51b5"),Object(i.b)("p",null,"\u76ee\u524d\u7ecf\u8425\u4e00\u5bb6\u81ea\u5df1\u521b\u529e\u7684\u8f6f\u4ef6\u79d1\u6280\u516c\u53f8\uff0c\u4e3b\u8981\u9500\u552e\u81ea\u4e3b\u7814\u53d1\u7684 ERP \u4ea7\u54c1\u3002"),Object(i.b)("p",null,"\u5403\u4e0d\u8d77\u996d\u7684\u65f6\u5019\u4e5f\u4f1a\u63a5\u5916\u5305\u9879\u76ee\u3002"),Object(i.b)("h2",{id:"\u5174\u8da3\u7231\u597d"},"\u5174\u8da3\u7231\u597d"),Object(i.b)("p",null,"\u662f\u4e2a\u5403\u8d27\uff0c\u559c\u6b22\u770b\u6296\u97f3\uff0c\u770b\u52a8\u6f2b\uff0c\u770b\u7f8e\u5267\uff0c\u770b\u535a\u5ba2\u56ed\u3001\u770b\u5f00\u6e90\u4e2d\u56fd\u3002"),Object(i.b)("p",null,"\u5bf9\u65b0\u6280\u672f\u9887\u611f\u5174\u8da3\uff0c\u559c\u6b22\u5f00\u6e90\u4e8b\u4e1a\uff0c\u559c\u6b22\u5206\u4eab\u6280\u672f\u3002"),Object(i.b)("h2",{id:"\u4e2a\u4eba\u4e3b\u9875"},"\u4e2a\u4eba\u4e3b\u9875"),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://gitee.com/monksoul"}),"https://gitee.com/monksoul")),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/monksoul"}),"https://github.com/monksoul")))}b.isMDXComponent=!0}}]);
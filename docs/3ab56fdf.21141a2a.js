(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{101:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,i=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),u=p(n),O=a,j=u["".concat(i,".").concat(O)]||u[O]||m[O]||b;return n?r.a.createElement(j,l(l({ref:t},o),{},{components:n})):r.a.createElement(j,l({ref:t},o))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,i=new Array(b);i[0]=O;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var o=2;o<b;o++)i[o]=n[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},102:function(e,t,n){"use strict";var a=n(0),r=n(19);t.a=function(){var e=Object(a.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},103:function(e,t,n){"use strict";n.d(t,"b",(function(){return b})),n.d(t,"a",(function(){return i}));var a=n(102),r=n(104);function b(){var e=Object(a.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,b=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var b=void 0===a?{}:a,i=b.forcePrependBaseUrl,l=void 0!==i&&i,c=b.absolute,o=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(l)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+p:p}(b,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,b().withBaseUrl)(e,t)}},104:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},67:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),b=(n(0),n(101)),i=n(103),l={slug:"welcome",title:"Fur \u4ecb\u7ecd",author:"dotnet\u4e2d\u56fd",author_title:"\u4e3a\u4e2d\u56fd .NET \u5f00\u53d1\u8005\u63d0\u4f9b\u4f18\u8d28\u7684\u8d44\u8baf\u548c\u6280\u672f\u5206\u4eab\u3002",author_url:"https://www.cnblogs.com/dotnetchina/",author_image_url:"https://pic.cnblogs.com/avatar/2130316/20200912005200.png",tags:["fur","furos",".net",".netcore",".net5"]},c={permalink:"/blog/welcome",editUrl:"https://gitee.com/monksoul/Fur/tree/alpha/docs/blog/2020-08-19-welcome.mdx",source:"@site/blog\\2020-08-19-welcome.mdx",description:"<img",date:"2020-08-19T00:00:00.000Z",tags:[{label:"fur",permalink:"/blog/tags/fur"},{label:"furos",permalink:"/blog/tags/furos"},{label:".net",permalink:"/blog/tags/net"},{label:".netcore",permalink:"/blog/tags/netcore"},{label:".net5",permalink:"/blog/tags/net-5"}],title:"Fur \u4ecb\u7ecd",readingTime:1.885,truncated:!0},o=[{value:"\u540d\u5b57\u7684\u7531\u6765",id:"\u540d\u5b57\u7684\u7531\u6765",children:[]},{value:"\u5173\u4e8e LOGO",id:"\u5173\u4e8e-logo",children:[]},{value:"\u5f00\u6e90\u5730\u5740",id:"\u5f00\u6e90\u5730\u5740",children:[]},{value:"\u67b6\u6784\u8bbe\u8ba1",id:"\u67b6\u6784\u8bbe\u8ba1",children:[]},{value:"\u529f\u80fd\u6a21\u5757",id:"\u529f\u80fd\u6a21\u5757",children:[]},{value:"\u6846\u67b6\u4f9d\u8d56",id:"\u6846\u67b6\u4f9d\u8d56",children:[]},{value:"\u73af\u5883\u8981\u6c42",id:"\u73af\u5883\u8981\u6c42",children:[]},{value:"\u652f\u6301\u5e73\u53f0",id:"\u652f\u6301\u5e73\u53f0",children:[]},{value:"\u95ee\u7b54 FAQ",id:"\u95ee\u7b54-faq",children:[]},{value:"\u5173\u4e8e\u4f5c\u8005",id:"\u5173\u4e8e\u4f5c\u8005",children:[]},{value:"\u9879\u76ee\u6210\u5458",id:"\u9879\u76ee\u6210\u5458",children:[]},{value:"\u8c01\u5728\u4f7f\u7528",id:"\u8c01\u5728\u4f7f\u7528",children:[]},{value:"\u8d21\u732e\u4ee3\u7801",id:"\u8d21\u732e\u4ee3\u7801",children:[]}],p={rightToc:o};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("img",{src:Object(i.a)("img/furlogo.png"),height:"80",style:{margin:"0 auto",display:"block"}}),Object(b.b)("div",{style:{textAlign:"center",marginTop:25}},Object(b.b)("p",null,Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://gitee.com/monksoul/Fur/stargazers"}),Object(b.b)("img",Object(a.a)({parentName:"a"},{src:"https://gitee.com/monksoul/Fur/badge/star.svg?theme=dark",alt:"star"})))," ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://gitee.com/monksoul/Fur/members"}),Object(b.b)("img",Object(a.a)({parentName:"a"},{src:"https://gitee.com/monksoul/Fur/badge/fork.svg?theme=dark",alt:"fork"})))," ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/MonkSoul/Fur/stargazers"}),Object(b.b)("img",Object(a.a)({parentName:"a"},{src:"https://img.shields.io/github/stars/MonkSoul/Fur?logo=github",alt:"GitHub stars"})))," ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/MonkSoul/Fur/network"}),Object(b.b)("img",Object(a.a)({parentName:"a"},{src:"https://img.shields.io/github/forks/MonkSoul/Fur?logo=github",alt:"GitHub forks"})))," ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/MonkSoul/Fur/blob/alpha/LICENSE"}),Object(b.b)("img",Object(a.a)({parentName:"a"},{src:"https://img.shields.io/github/license/MonkSoul/Fur",alt:"GitHub license"})))," ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://qm.qq.com/cgi-bin/qm/qr?k=PzLMVFTwHlW0Y4HNmLKVKM3BKpzpTHMF&jump_from=webapi"}),Object(b.b)("img",Object(a.a)({parentName:"a"},{src:"https://img.shields.io/badge/QQ%E7%BE%A4-592844340-blue",alt:"QQ\u7fa4-592844340"}))))),Object(b.b)("div",{style:{textAlign:"center"}},Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"Fur")," \u662f ",Object(b.b)("inlineCode",{parentName:"p"},".NET 5")," \u5e73\u53f0\u4e0b\u6781\u6613\u5165\u95e8\u3001\u6781\u901f\u5f00\u53d1\u7684 Web \u5e94\u7528\u6846\u67b6\u3002")),Object(b.b)("h2",{id:"\u540d\u5b57\u7684\u7531\u6765"},"\u540d\u5b57\u7684\u7531\u6765"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"\u6545\u4e8b\u662f\u8fd9\u6837\u5b50\u7684\uff1a"),Object(b.b)("p",{parentName:"blockquote"},"\u8d77\u521d\uff0c\u60f3\u5f00\u53d1\u4e00\u4e2a\u6781\u6613\u5165\u95e8\u7684\u6846\u67b6\uff0c\u5f00\u53d1\u7406\u5ff5\u4e3a\uff1a",Object(b.b)("inlineCode",{parentName:"p"},"\u4e00\u5207\u4ece\u7b80\uff0c\u53ea\u4e3a\u4e86\u66f4\u61d2"),"\u3002"),Object(b.b)("p",{parentName:"blockquote"},"\u6240\u4ee5\u81ea\u7136\u800c\u7136\u60f3\u5230\u4e86\uff1a",Object(b.b)("inlineCode",{parentName:"p"},"Lazier"),"\uff0c\u4e5f\u5c31\u662f ",Object(b.b)("strong",{parentName:"p"},"\u66f4\u61d2")," \u7684\u610f\u601d\u3002\u4f46\u662f ",Object(b.b)("strong",{parentName:"p"},"\u66f4\u61d2")," \u548c ",Object(b.b)("strong",{parentName:"p"},"\u66f4\u70c2")," \u8bfb\u97f3\u5f88\u76f8\u8fd1\u4e14\u4e2d\u6587\u540d\u6ca1\u6709\u7279\u8272\uff0c\u5bf9\u6b64\u6362\u540d\u95ee\u9898\u6211\u82e6\u607c\u4e86\u597d\u51e0\u5929\u3002"),Object(b.b)("p",{parentName:"blockquote"},"\u521a\u597d\u6709\u4e00\u6b21\u6211\u5728\u535a\u5ba2\u56ed\u4e2d\u5e2e\u4e00\u4e2a\u535a\u53cb\u89e3\u7b54\u95ee\u9898\uff0c\u89e3\u51b3\u540e\u535a\u53cb\u5938\u6211\u5bf9 ",Object(b.b)("inlineCode",{parentName:"p"},".NET Core")," \u9887\u6709\u4e86\u89e3\uff0c\u6211\u5c31\u987a\u5634\u56de\u7b54\u4e86\u4e00\u53e5\uff1a",Object(b.b)("strong",{parentName:"p"},"\u201c\u7565\u61c2\u76ae\u6bdb\u201d"),"\u3002"),Object(b.b)("p",{parentName:"blockquote"},"\u5c31\u8fd9\u65f6\uff0c\u8111\u74dc\u5b50\u7075\u673a\u4e00\u52a8\uff0c\u5e72\u8106\u8d77\u540d\u4e3a\uff1a",Object(b.b)("strong",{parentName:"p"},"\u201c\u76ae\u6bdb\u201d"),"\uff1f\u82f1\u6587\u5355\u8bcd ",Object(b.b)("strong",{parentName:"p"},"\u201c",Object(b.b)("inlineCode",{parentName:"strong"},"Fur")," ","[f\u025c\u02d0(r)]","\u201d"),"\uff0c\u5355\u8bcd\u53c8\u77ed\u800c\u4e14\u4e2d\u6587\u8bfb\u97f3\u65e2\u4fd7\u6c14\u53c8\u987a\u53e3\u3002\ud83d\ude04\ud83d\ude0e"),Object(b.b)("p",{parentName:"blockquote"},"\u6240\u4ee5\uff0c",Object(b.b)("strong",{parentName:"p"},Object(b.b)("inlineCode",{parentName:"strong"},"Fur"))," \u5c31\u8bde\u751f\u4e86\u3002"),Object(b.b)("p",{parentName:"blockquote"},"\u4e4b\u540e\u5c31\u6709\u4e86 ",Object(b.b)("strong",{parentName:"p"},"\u201c\u5c0f\u50e7\u4e0d\u624d\uff0c\u7565\u61c2\u76ae\u6bdb\uff08Fur\uff09\u3002\u201d")," \u5e7f\u544a\u8bed \u548c ",Object(b.b)("strong",{parentName:"p"},Object(b.b)("a",Object(a.a)({parentName:"strong"},{href:"https://furos.cn"}),"furos.cn"))," \u57df\u540d\u3002")),Object(b.b)("h2",{id:"\u5173\u4e8e-logo"},"\u5173\u4e8e LOGO"),Object(b.b)("p",null,"\u6211\u76f8\u4fe1\u5f88\u591a\u4eba\u770b\u5230 ",Object(b.b)("inlineCode",{parentName:"p"},"Fur")," \u7684 LOGO \u65f6\u90fd\u4f1a\u95ee\uff1a\u201c\u4e3a\u4ec0\u4e48\u9009\u62e9\u5976\u725b\uff1f\u201d\uff0c\u56e0\u4e3a ",Object(b.b)("strong",{parentName:"p"},"\u90a3\u4e9b\u5e74\u5439\u8fc7\u7684\u725b\u903c\u90fd\u5b9e\u73b0\u4e86 \ud83d\udc2e"),"\u3002"),Object(b.b)("p",null,"\u4e4b\u6240\u4ee5\u9009\u62e9 ",Object(b.b)("strong",{parentName:"p"},"\u5976\u725b")," \u662f\u56e0\u4e3a ",Object(b.b)("inlineCode",{parentName:"p"},"\u725b")," \u5177\u6709\u811a\u8e0f\u5b9e\u5730\uff0c\u4efb\u52b3\u4efb\u6028\u7684\u505a\u4e8b\u98ce\u683c\uff0c\u540c\u65f6 ",Object(b.b)("strong",{parentName:"p"},"\u5976\u725b")," \u610f\u5473\u7740\u4e30\u5bcc\u7684\u8425\u517b\u4ef7\u503c\uff0c\u6b63\u5982 ",Object(b.b)("inlineCode",{parentName:"p"},"Fur")," \u6240\u80fd\u5e26\u7ed9\u4f60\u7684\u3002"),Object(b.b)("h2",{id:"\u5f00\u6e90\u5730\u5740"},"\u5f00\u6e90\u5730\u5740"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Gitee\uff1a",Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"https://gitee.com/monksoul/Fur"}),"https://gitee.com/monksoul/Fur")),Object(b.b)("li",{parentName:"ul"},"GitHub\uff1a",Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/monksoul/Fur"}),"https://github.com/monksoul/Fur")),Object(b.b)("li",{parentName:"ul"},"\u535a\u5ba2\u56ed\uff1a",Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.cnblogs.com/dotnetchina"}),"https://www.cnblogs.com/dotnetchina"))),Object(b.b)("h2",{id:"\u67b6\u6784\u8bbe\u8ba1"},"\u67b6\u6784\u8bbe\u8ba1"),Object(b.b)("p",null,"\u6b63\u5728\u6574\u7406\u4e2d..."),Object(b.b)("h2",{id:"\u529f\u80fd\u6a21\u5757"},"\u529f\u80fd\u6a21\u5757"),Object(b.b)("img",{src:Object(i.a)("img/furfunctions.png")}),Object(b.b)("h2",{id:"\u6846\u67b6\u4f9d\u8d56"},"\u6846\u67b6\u4f9d\u8d56"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"Fur")," \u4e3a\u4e86\u8ffd\u6c42\u6781\u901f\u5165\u95e8\uff0c\u6781\u81f4\u6027\u80fd\uff0c\u5c3d\u53ef\u80fd\u7684\u4e0d\u4f7f\u7528\u6216\u51cf\u5c11\u7b2c\u4e09\u65b9\u4f9d\u8d56\u3002\u76ee\u524d ",Object(b.b)("inlineCode",{parentName:"p"},"Fur")," \u4ec5\u96c6\u6210\u4e86\u4ee5\u4e0b\u4e09\u4e2a\u4f9d\u8d56\uff1a"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/MapsterMapper/Mapster"}),"Mapster"),"\uff1a\u6bd4 ",Object(b.b)("inlineCode",{parentName:"li"},"AutoMapper")," \u8fd8\u9ad8\u6027\u80fd\u7684\u5bf9\u8c61\u6620\u5c04"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/MiniProfiler/dotnet"}),"MiniProfiler"),"\uff1a\u6027\u80fd\u5206\u6790\u548c\u76d1\u542c\u5fc5\u5907"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/domaindrivendev/Swashbuckle.AspNetCore"}),"Swashbuckle"),"\uff1a",Object(b.b)("inlineCode",{parentName:"li"},"Swagger")," \u63a5\u53e3\u6587\u6863")),Object(b.b)("p",null,"\u9ebb\u96c0\u867d\u5c0f\u4e94\u810f\u4ff1\u5168\u3002",Object(b.b)("inlineCode",{parentName:"p"},"Fur")," \u5373\u4f7f\u53ea\u96c6\u6210\u4e86\u8fd9\u4e09\u4e2a\u4f9d\u8d56\uff0c\u4f46\u662f\u4e3b\u6d41\u7684 ",Object(b.b)("inlineCode",{parentName:"p"},"\u4f9d\u8d56\u6ce8\u5165/\u63a7\u5236\u53cd\u8f6c"),"\uff0c",Object(b.b)("inlineCode",{parentName:"p"},"AOP")," \u9762\u5411\u5207\u9762\u7f16\u7a0b\uff0c",Object(b.b)("inlineCode",{parentName:"p"},"\u4e8b\u4ef6\u603b\u7ebf"),"\uff0c",Object(b.b)("inlineCode",{parentName:"p"},"\u6570\u636e\u9a8c\u8bc1"),"\uff0c",Object(b.b)("inlineCode",{parentName:"p"},"\u6570\u636e\u5e93\u64cd\u4f5c")," \u7b49\u7b49\u4e00\u4e2a\u90fd\u4e0d\u5c11\u3002"),Object(b.b)("h2",{id:"\u73af\u5883\u8981\u6c42"},"\u73af\u5883\u8981\u6c42"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Visual Studio 2019 16.7 +"),Object(b.b)("li",{parentName:"ul"},".NET 5 SDK +"),Object(b.b)("li",{parentName:"ul"},".Net Standard 2.1 +")),Object(b.b)("h2",{id:"\u652f\u6301\u5e73\u53f0"},"\u652f\u6301\u5e73\u53f0"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u8fd0\u884c\u73af\u5883",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"Windows"),Object(b.b)("li",{parentName:"ul"},"Linux"),Object(b.b)("li",{parentName:"ul"},"MacOS"),Object(b.b)("li",{parentName:"ul"},"Docker/K8S/K3S/Rancher"))),Object(b.b)("li",{parentName:"ul"},"\u6570\u636e\u5e93",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"SqlServer"),Object(b.b)("li",{parentName:"ul"},"Sqlite"),Object(b.b)("li",{parentName:"ul"},"Azure Cosmos"),Object(b.b)("li",{parentName:"ul"},"MySql"),Object(b.b)("li",{parentName:"ul"},"PostgreSQL"),Object(b.b)("li",{parentName:"ul"},"\u5185\u5b58\u6570\u636e\u5e93"),Object(b.b)("li",{parentName:"ul"},"Oracle")))),Object(b.b)("h2",{id:"\u95ee\u7b54-faq"},"\u95ee\u7b54 FAQ"),Object(b.b)("p",null,"\ud83e\udd47 ",Object(b.b)("strong",{parentName:"p"},"1. \u4e0d\u662f\u6709\u4e00\u4e2a Abp \u6846\u67b6\u4e86\u5417\uff1f")),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"Abp")," \u786e\u5b9e\u662f\u975e\u5e38\u68d2\u7684\u6846\u67b6\uff0c\u66fe\u7ecf\u672c\u4eba\u4e5f\u53d7\u76ca\u4e8e\u5b83\uff0c",Object(b.b)("inlineCode",{parentName:"p"},"Fur")," \u5e76\u4e0d\u662f\u60f3\u8981\u66ff\u4ee3 ",Object(b.b)("inlineCode",{parentName:"p"},"Abp"),"\uff0c\u800c\u662f\u60f3\u7ed9 ",Object(b.b)("inlineCode",{parentName:"p"},".NET")," \u5f00\u53d1\u8005\u591a\u4e00\u4e2a\u9009\u62e9\u3002"),Object(b.b)("p",null,"\u540c\u65f6 ",Object(b.b)("inlineCode",{parentName:"p"},"Fur")," \u6846\u67b6\u662f\u672c\u4eba\u8fd9 12 \u5e74\u7684 ",Object(b.b)("inlineCode",{parentName:"p"},".NET")," \u5f00\u53d1\u7ecf\u9a8c\u7684\u6d53\u7f29\u7248\u3002"),Object(b.b)("p",null,"\ud83e\udd48 ",Object(b.b)("strong",{parentName:"p"},"2. \u548c Abp \u6846\u67b6\u7684\u533a\u522b\uff1f")),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"Fur")," \u548c ",Object(b.b)("inlineCode",{parentName:"p"},"Abp")," \u6709\u51e0\u5927\u533a\u522b\uff1a"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"Fur")," \u8ffd\u6c42\u7684\u662f\u6781\u5c11\u4f9d\u8d56\u548c\u6781\u901f\u5f00\u53d1\uff0c\u548c ",Object(b.b)("inlineCode",{parentName:"li"},"Abp")," \u5927\u800c\u5305\u5bb9\u4e0d\u540c"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"Fur")," \u9075\u5faa\u5bbd\u677e\u81ea\u7531\u7684 ",Object(b.b)("inlineCode",{parentName:"li"},"Apache-2.0")," \u5f00\u6e90\u534f\u8bae\uff0c\u8fd9\u4e00\u70b9\u548c ",Object(b.b)("inlineCode",{parentName:"li"},"Abp")," \u91c7\u7528\u5546\u7528 ",Object(b.b)("inlineCode",{parentName:"li"},"LGPL-3.0")," \u534f\u8bae\u6709\u7740\u5f88\u5927\u5dee\u522b"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"Fur")," \u7b26\u5408\u4e2d\u56fd\u56fd\u60c5\u5f00\u53d1\uff0c\u6df1\u77e5\u4e2d\u56fd\u5f00\u53d1\u8005\u6700\u9700\u8981\u4ec0\u4e48\uff0c\u6846\u67b6\u5185\u90e8\u63d0\u4f9b\u4e86\u5927\u91cf\u5f00\u53d1\u8005\u9700\u8981\u7684\u8bed\u6cd5\u7cd6\uff0c\u800c\u4e0d\u4ec5\u4ec5\u662f\u57fa\u7840\u64cd\u4f5c"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"Fur")," \u548c ",Object(b.b)("inlineCode",{parentName:"li"},"Abp")," \u5728\u5b9e\u73b0\u76f8\u540c\u529f\u80fd\u4e0a\uff0c",Object(b.b)("inlineCode",{parentName:"li"},"Fur")," \u505a\u7684\u66f4\u52a0\u7075\u6d3b\u548c\u7b80\u5355"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"Fur")," \u662f\u57fa\u4e8e\u6700\u65b0\u7684 ",Object(b.b)("inlineCode",{parentName:"li"},".NET 5")," \u5f00\u53d1\uff0c\u629b\u5f00\u5386\u53f2\u5305\u88b1\uff0c\u4e58\u4e0a ",Object(b.b)("inlineCode",{parentName:"li"},".NET")," \u5f7b\u5e95\u8de8\u5e73\u53f0\u7684\u5927\u8239"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"Fur")," \u662f\u4f5c\u4e3a\u4e2d\u56fd\u5f00\u53d1\u8005\u63a8\u51fa\uff0c\u4ec5\u6b64\u800c\u5df2")),Object(b.b)("p",null,"\ud83e\udd49 ",Object(b.b)("strong",{parentName:"p"},"3. \u4e3a\u4ec0\u4e48\u60f3\u8981\u5f00\u53d1\u8fd9\u6837\u7684\u4e00\u4e2a\u6846\u67b6\uff1f")),Object(b.b)("p",null,"\u5f00\u53d1\u8fd9\u6837\u7684\u6846\u67b6\u76ee\u7684\u662f\u4e3a\u4e86\u80fd\u591f\u63d0\u9ad8\u81ea\u5df1\u7684\u5f00\u53d1\u6548\u7387\uff0c\u4e5f\u662f\u4e3a\u4e86\u9a8c\u8bc1\u81ea\u5df1\u5bf9 ",Object(b.b)("inlineCode",{parentName:"p"},".NET")," \u65b0\u6280\u672f\u7684\u638c\u63e1\u7a0b\u5ea6\uff0c\u540c\u65f6\u4e5f\u5e0c\u671b\u901a\u8fc7\u5f00\u6e90\u80fd\u591f\u5e2e\u5230\u66f4\u591a\u7684 ",Object(b.b)("inlineCode",{parentName:"p"},".NET")," \u5f00\u53d1\u8005\uff0c\u4e5f\u80fd\u4ece\u4e2d\u53d7\u76ca\u3002"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"\u5173\u4e8e\u4f5c\u8005"},"\u5173\u4e8e\u4f5c\u8005"),Object(b.b)("p",null,"\u4e00\u4e2a\u62e5\u6709 12 \u5e74\u5f00\u53d1\u7ecf\u9a8c ",Object(b.b)("inlineCode",{parentName:"p"},".NETer"),"\u3002\u559c\u6b22\u5206\u4eab\uff0c\u559c\u6b22\u65b0\u6280\u672f\uff0c\u5728\u4e92\u8054\u7f51\u591a\u4e2a\u6280\u672f\u9886\u57df\u7686\u6709\u67d3\u6307\u3002"),Object(b.b)("h2",{id:"\u9879\u76ee\u6210\u5458"},"\u9879\u76ee\u6210\u5458"),Object(b.b)("a",{href:"https://gitee.com/monksoul",target:"_blank",margin:"5",style:{margin:5}},Object(b.b)("img",{src:"https://portrait.gitee.com/uploads/avatars/user/324/974299_monksoul_1578937227.png!avatar100",height:"40"})),Object(b.b)("a",{href:"https://gitee.com/dotnetchina",target:"_blank",margin:"5",style:{margin:5}},Object(b.b)("img",{src:"https://portrait.gitee.com/uploads/avatars/user/2685/8055741_dotnetchina_1599843748.png!avatar100",height:"40"})),Object(b.b)("a",{href:"https://gitee.com/zero530",target:"_blank",margin:"5",style:{margin:5}},Object(b.b)("img",{src:"https://portrait.gitee.com/uploads/avatars/user/574/1722306_zero530_1578958528.png!avatar100",height:"40"})),Object(b.b)("a",{href:"https://gitee.com/rgleehom",target:"_blank",margin:"5",style:{margin:5}},Object(b.b)("img",{src:"data:image/png;base64,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",height:"40"})),Object(b.b)("a",{href:"https://gitee.com/KaneLeung",target:"_blank",margin:"5",style:{margin:5}},Object(b.b)("img",{src:"https://portrait.gitee.com/uploads/avatars/user/483/1449079_KaneLeung_1600044384.png!avatar100",height:"40"})),Object(b.b)("a",{href:"https://gitee.com/qd98zhq",target:"_blank",margin:"5",style:{margin:5}},Object(b.b)("img",{src:"https://portrait.gitee.com/uploads/avatars/user/205/617984_qd98zhq_1600045204.png!avatar100",height:"40"})),Object(b.b)("p",null),Object(b.b)("p",null,"\ud83c\udf88 \u6b22\u8fce\u66f4\u591a\u7684\u5f00\u53d1\u8005\u52a0\u5165 ",Object(b.b)("inlineCode",{parentName:"p"},"Fur")," \u5927\u5bb6\u5ead\u3002"),Object(b.b)("h2",{id:"\u8c01\u5728\u4f7f\u7528"},"\u8c01\u5728\u4f7f\u7528"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u767e\u7b7e\u79d1\u6280\uff08\u5e7f\u4e1c\uff09\u6709\u9650\u516c\u53f8"),Object(b.b)("li",{parentName:"ul"},"\u7801\u4e3a\u79d1\u6280\uff08\u5e7f\u5dde\uff09\u6709\u9650\u516c\u53f8"),Object(b.b)("li",{parentName:"ul"},"\u4e2d\u5c71\u8d62\u53cb\u7f51\u7edc\u79d1\u6280\u6709\u9650\u516c\u53f8"),Object(b.b)("li",{parentName:"ul"},"\u5e7f\u5dde\u542f\u987a\u56fd\u9645\u8d27\u8fd0\u4ee3\u7406\u6709\u9650\u516c\u53f8"),Object(b.b)("li",{parentName:"ul"},"\u68ee\u4e30\u4f9b\u5e94\u94fe\u670d\u52a1\uff08\u5e7f\u5dde\uff09\u6709\u9650\u516c\u53f8"),Object(b.b)("li",{parentName:"ul"},"\u4e2d\u5c71\u6a21\u601d\u8f6f\u4ef6\u79d1\u6280\u6709\u9650\u516c\u53f8"),Object(b.b)("li",{parentName:"ul"},"\u6df1\u5733\u5e02\u6613\u80dc\u79d1\u6280\u6709\u9650\u516c\u53f8"),Object(b.b)("li",{parentName:"ul"},"\u73e0\u6d77\u5e02\u6052\u6cf0\u65b0\u8f6f\u4ef6\u6709\u9650\u8d23\u4efb\u516c\u53f8")),Object(b.b)("h2",{id:"\u8d21\u732e\u4ee3\u7801"},"\u8d21\u732e\u4ee3\u7801"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"Fur")," \u9075\u5faa ",Object(b.b)("inlineCode",{parentName:"p"},"Apache-2.0")," \u5f00\u6e90\u534f\u8bae\uff0c\u6b22\u8fce\u5927\u5bb6\u63d0\u4ea4 ",Object(b.b)("inlineCode",{parentName:"p"},"PR")," \u6216 ",Object(b.b)("inlineCode",{parentName:"p"},"Issue"),"\u3002"),Object(b.b)("p",null,"\u5982\u679c\u8981\u4e3a\u9879\u76ee\u505a\u51fa\u8d21\u732e\uff0c\u8bf7\u67e5\u770b\u8d21\u732e\u6307\u5357\u3002"))}u.isMDXComponent=!0}}]);
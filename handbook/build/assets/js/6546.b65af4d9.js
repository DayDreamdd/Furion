"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[6546],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),m=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=m(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=m(r),f=a,p=d["".concat(c,".").concat(f)]||d[f]||u[f]||l;return r?n.createElement(p,i(i({ref:t},s),{},{components:r})):n.createElement(p,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var m=2;m<l;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6165:function(e,t,r){r.d(t,{Z:function(){return b}});var n=r(3366),a=r(7294),l=r(6010),i=r(4328),o=r(6742),c="sidebar_2ahu",m="sidebarItemTitle_2hhb",s="sidebarItemList_2xAf",u="sidebarItem_2UVv",d="sidebarItemLink_1RT6",f="sidebarItemLinkActive_12pM",p=r(4973);function g(e){var t=e.sidebar;return 0===t.items.length?null:a.createElement("nav",{className:(0,l.Z)(c,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},a.createElement("div",{className:(0,l.Z)(m,"margin-bottom--md")},t.title),a.createElement("ul",{className:s},t.items.map((function(e){return a.createElement("li",{key:e.permalink,className:u},a.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:f},e.title))}))))}var v=r(571),h=["sidebar","toc","children"];var b=function(e){var t=e.sidebar,r=e.toc,o=e.children,c=(0,n.Z)(e,h),m=t&&t.items.length>0;return a.createElement(i.Z,c,a.createElement("div",{className:"container margin-vert--lg"},a.createElement("div",{className:"row"},m&&a.createElement("aside",{className:"col col--3"},a.createElement(g,{sidebar:t})),a.createElement("main",{className:(0,l.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},o),r&&a.createElement("div",{className:"col col--2"},a.createElement(v.Z,{toc:r})))))}},4884:function(e,t,r){r.d(t,{Z:function(){return y}});var n=r(7294),a=r(6010),l=r(3905),i=r(4973),o=r(6742),c=r(4996),m=r(941),s=r(9572),u=r(6146),d="blogPostTitle_GeHD",f="blogPostData_291c",p="blogPostDetailsFull_3kfx",g=r(7682),v="image_1yU8";var h=function(e){var t=e.author,r=t.name,a=t.title,l=t.url,i=t.imageURL;return n.createElement("div",{className:"avatar margin-bottom--sm"},i&&n.createElement(o.Z,{className:"avatar__photo-link avatar__photo",href:l},n.createElement("img",{className:v,src:i,alt:r})),r&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(o.Z,{href:l,itemProp:"url"},n.createElement("span",{itemProp:"name"},r))),a&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},a)))},b="authorCol_1R69";function E(e){var t=e.authors,r=e.assets;return 0===t.length?n.createElement(n.Fragment,null):n.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map((function(e,t){var l;return n.createElement("div",{className:(0,a.Z)("col col--6",b),key:t},n.createElement(h,{author:Object.assign({},e,{imageURL:null!=(l=r.authorsImageUrls[t])?l:e.imageURL})}))})))}var y=function(e){var t,r,v,h,b=(v=(0,m.c2)().selectMessage,function(e){var t=Math.ceil(e);return v(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),y=(0,c.C)().withBaseUrl,N=e.children,_=e.frontMatter,Z=e.assets,O=e.metadata,k=e.truncated,P=e.isBlogPostPage,T=void 0!==P&&P,w=O.date,C=O.formattedDate,L=O.permalink,j=O.tags,x=O.readingTime,R=O.title,U=O.editUrl,I=O.authors,A=null!=(t=Z.image)?t:_.image;return n.createElement("article",{className:T?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(h=T?"h1":"h2",n.createElement("header",null,n.createElement(h,{className:d,itemProp:"headline"},T?R:n.createElement(o.Z,{itemProp:"url",to:L},R)),n.createElement("div",{className:(0,a.Z)(f,"margin-vert--md")},n.createElement("time",{dateTime:w,itemProp:"datePublished"},C),void 0!==x&&n.createElement(n.Fragment,null," \xb7 ",b(x))),n.createElement(E,{authors:I,assets:Z}))),A&&n.createElement("meta",{itemProp:"image",content:y(A,{absolute:!0})}),n.createElement("div",{className:"markdown",itemProp:"articleBody"},n.createElement(l.Zo,{components:s.Z},N)),(j.length>0||k)&&n.createElement("footer",{className:(0,a.Z)("row docusaurus-mt-lg",(r={},r[p]=T,r))},j.length>0&&n.createElement("div",{className:(0,a.Z)("col",{"col--9":!T})},n.createElement(g.Z,{tags:j})),T&&U&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(u.Z,{editUrl:U})),!T&&k&&n.createElement("div",{className:"col col--3 text--right"},n.createElement(o.Z,{to:O.permalink,"aria-label":"Read more about "+R},n.createElement("b",null,n.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},6146:function(e,t,r){r.d(t,{Z:function(){return d}});var n=r(7294),a=r(4973),l=r(7462),i=r(3366),o=r(6010),c="iconEdit_2_ui",m=["className"],s=function(e){var t=e.className,r=(0,i.Z)(e,m);return n.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.Z)(c,t),"aria-hidden":"true"},r),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},u=r(941);function d(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.kM.common.editThisPage},n.createElement(s,null),n.createElement(a.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},571:function(e,t,r){r.d(t,{r:function(){return f},Z:function(){return p}});var n=r(7294),a=r(6010),l=r(941);function i(e){var t=e.getBoundingClientRect();return t.top===t.bottom?i(e.parentNode):t}function o(e){var t,r=e.anchorTopOffset,n=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),a=n.find((function(e){return i(e).top>=r}));return a?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(i(a))?a:null!=(t=n[n.indexOf(a)-1])?t:null:n[n.length-1]}function c(){var e=(0,n.useRef)(0),t=(0,l.LU)().navbar.hideOnScroll;return(0,n.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}var m=function(e){var t=(0,n.useRef)(void 0),r=c();(0,n.useEffect)((function(){var n=e.linkClassName,a=e.linkActiveClassName;function l(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(n),l=o({anchorTopOffset:r.current}),i=e.find((function(e){return l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,r){if(r){var n;t.current&&t.current!==e&&(null==(n=t.current)||n.classList.remove(a)),e.classList.add(a),t.current=e}else e.classList.remove(a)}(e,e===i)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),function(){document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,r])},s="tableOfContents_35-E",u="table-of-contents__link",d={linkClassName:u,linkActiveClassName:"table-of-contents__link--active"};function f(e){var t=e.toc,r=e.isChild;return t.length?n.createElement("ul",{className:r?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:u,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(f,{isChild:!0,toc:e.children}))}))):null}var p=function(e){var t=e.toc;return m(d),n.createElement("div",{className:(0,a.Z)(s,"thin-scrollbar")},n.createElement(f,{toc:t}))}},7211:function(e,t,r){r.d(t,{Z:function(){return m}});var n=r(7294),a=r(6010),l=r(6742),i="tag_1Okp",o="tagRegular_3MiF",c="tagWithCount_1HU1";var m=function(e){var t,r=e.permalink,m=e.name,s=e.count;return n.createElement(l.Z,{href:r,className:(0,a.Z)(i,(t={},t[o]=!s,t[c]=s,t))},m,s&&n.createElement("span",null,s))}},7682:function(e,t,r){r.d(t,{Z:function(){return m}});var n=r(7294),a=r(6010),l=r(4973),i=r(7211),o="tags_2ga9",c="tag_11ep";function m(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,a.Z)(o,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,r=e.permalink;return n.createElement("li",{key:r,className:c},n.createElement(i.Z,{name:t,permalink:r}))}))))}}}]);
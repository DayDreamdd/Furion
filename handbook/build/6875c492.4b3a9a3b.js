(window.webpackJsonp=window.webpackJsonp||[]).push([[54,13,23],{130:function(e,a,t){"use strict";t.r(a);var r=t(0),l=t.n(r),n=t(210),o=t(238),c=t(203),m=t(218);a.default=function(e){var a=e.metadata,t=e.items,r=e.sidebar,s=a.allTagsPath,i=a.name,f=a.count;return l.a.createElement(n.a,{title:'Posts tagged "'+i+'"',description:'Blog | Tagged "'+i+'"',wrapperClassName:"blog-wrapper"},l.a.createElement("div",{className:"container margin-vert--lg"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--2"},l.a.createElement(m.a,{sidebar:r})),l.a.createElement("main",{className:"col col--8"},l.a.createElement("h1",null,f," ",function(e,a){return e>1?a+"s":a}(f,"post"),' tagged with "',i,'"'),l.a.createElement(c.a,{href:s},"View All Tags"),l.a.createElement("div",{className:"margin-vert--xl"},t.map((function(e){var a=e.content;return l.a.createElement(o.a,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:!0},l.a.createElement(a,null))})))))))}},211:function(e,a,t){"use strict";var r=t(3),l=t(7),n=t(0),o=t.n(n),c=t(201),m=t(203),s=t(202),i=t(17),f=t(60),u=t.n(f);function d(e){var a=e.to,t=e.href,n=e.label,c=e.prependBaseUrlToHref,s=Object(l.a)(e,["to","href","label","prependBaseUrlToHref"]),f=Object(i.a)(a),u=Object(i.a)(t,{forcePrependBaseUrl:!0});return o.a.createElement(m.a,Object(r.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:c?u:t}:{to:f},s),n)}var g=function(e){var a=e.url,t=e.alt;return o.a.createElement("img",{className:"footer__logo",alt:t,src:a,style:{background:"#fff",padding:"5px 10px"}})};a.a=function(){var e=Object(s.useThemeConfig)().footer,a=e||{},t=a.copyright,r=a.links,l=void 0===r?[]:r,n=a.logo,m=void 0===n?{}:n,f=Object(i.a)(m.src);return e?o.a.createElement("footer",{className:Object(c.a)("footer",{"footer--dark":"dark"===e.style})},o.a.createElement("div",{className:"container"},l&&l.length>0&&o.a.createElement("div",{className:"row footer__links"},l.map((function(e,a){return o.a.createElement("div",{key:a,className:"col footer__col"},null!=e.title?o.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?o.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,a){return e.html?o.a.createElement("li",{key:a,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):o.a.createElement("li",{key:e.href||e.to,className:"footer__item"},o.a.createElement(d,e))}))):null)}))),(m||t)&&o.a.createElement("div",{className:"footer__bottom text--center"},m&&m.src&&o.a.createElement("div",{className:"margin-bottom--sm"},m.href?o.a.createElement("a",{href:m.href,target:"_blank",rel:"noopener noreferrer",className:u.a.footerLogoLink},o.a.createElement(g,{alt:m.alt,url:f})):o.a.createElement(g,{alt:m.alt,url:f})),t?o.a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:t}}):null))):null}}}]);
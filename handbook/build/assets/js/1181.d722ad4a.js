"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[1181,1500],{4608:function(e,t,r){r.r(t);var l=r(7294),a=r(4328),n=r(4973);t.default=function(){return l.createElement(a.Z,{title:(0,n.I)({id:"theme.NotFound.title",message:"Page Not Found"})},l.createElement("main",{className:"container margin-vert--xl"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col col--6 col--offset-3"},l.createElement("h1",{className:"hero__title"},l.createElement(n.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),l.createElement("p",null,l.createElement(n.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),l.createElement("p",null,l.createElement(n.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},546:function(e,t,r){r.d(t,{Z:function(){return h}});var l=r(7462),a=r(3366),n=r(7294),o=r(6010),c=r(6742),i=r(941),m=r(4996),s="footerLogoLink_qW4Z",f=["to","href","label","prependBaseUrlToHref"];function u(e){var t=e.to,r=e.href,o=e.label,i=e.prependBaseUrlToHref,s=(0,a.Z)(e,f),u=(0,m.Z)(t),d=(0,m.Z)(r,{forcePrependBaseUrl:!0});return n.createElement(c.Z,(0,l.Z)({className:"footer__link-item"},r?{target:"_blank",rel:"noopener noreferrer",href:i?d:r}:{to:u},s),o)}var d=function(e){var t=e.url,r=e.alt;return n.createElement("img",{className:"footer__logo",alt:r,src:t,style:{background:"#fff",padding:"5px 10px"}})};var h=function(){var e=(0,i.LU)().footer,t=e||{},r=t.copyright,l=t.links,a=void 0===l?[]:l,c=t.logo,f=void 0===c?{}:c,h=(0,m.Z)(f.src);return e?n.createElement("footer",{className:(0,o.Z)("footer",{"footer--dark":"dark"===e.style})},n.createElement("div",{className:"container"},a&&a.length>0&&n.createElement("div",{className:"row footer__links"},a.map((function(e,t){return n.createElement("div",{key:t,className:"col footer__col"},null!=e.title?n.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?n.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?n.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):n.createElement("li",{key:e.href||e.to,className:"footer__item"},n.createElement(u,e))}))):null)}))),(f||r)&&n.createElement("div",{className:"footer__bottom text--center"},f&&f.src&&n.createElement("div",{className:"margin-bottom--sm"},f.href?n.createElement("a",{href:f.href,target:"_blank",rel:"noopener noreferrer",className:s},n.createElement(d,{alt:f.alt,url:h})):n.createElement(d,{alt:f.alt,url:h})),r?n.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:r}}):null))):null}}}]);
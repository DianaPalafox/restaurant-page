(()=>{"use strict";var e,t,n,r,o,a,c,i,s,d,l,u,p,h,f={426:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(81),o=n.n(r),a=n(645),c=n.n(a),i=n(667),s=n.n(i),d=new URL(n(131),n.b),l=c()(o()),u=s()(d);l.push([e.id,"body, html {\n    height: 100%;\n    margin: 0;\n    padding: 0;\n}\n\n/*body {\n    overflow: hidden;  \n}*/\n\n.container {\n    height: 100%;\n    background-color: #134059;\n}\n\n.menu-tab, .home-tab, .contact-tab{\n    width: 90px;\n    height: 10vh;\n    background-color: #134059;\n    border-style: none;\n    color: whitesmoke;\n    font-size: 1em;\n}\n\n.menu-tab:hover, .home-tab:hover, .contact-tab:hover {\n    background-color:#1d6891;\n}\n\n.main {\n    position: relative;\n}\n\n.main-img {\n    background: url("+u+");\n    width: 100vw;\n    height: 80vh;\n}\n\n.header, .footer {\n    height: 10vh;\n    width: 100vw;\n}\n\n.header {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.logo {\n    background-color: black;\n}",""]);const p=l},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},c=[],i=0;i<e.length;i++){var s=e[i],d=r.base?s[0]+r.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=n(u),h={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(h);else{var f=o(h,r);r.byIndex=i,t.splice(i,0,{identifier:u,updater:f,references:1})}c.push(u)}return c}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=n(a[c]);t[i].references--}for(var s=r(e,o),d=0;d<a.length;d++){var l=n(a[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},131:(e,t,n)=>{e.exports=n.p+"17b59f5c65a1d88f4a56.png"}},m={};function v(e){var t=m[e];if(void 0!==t)return t.exports;var n=m[e]={id:e,exports:{}};return f[e](n,n.exports,v),n.exports}v.m=f,v.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return v.d(t,{a:t}),t},v.d=(e,t)=>{for(var n in t)v.o(t,n)&&!v.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},v.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),v.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;v.g.importScripts&&(e=v.g.location+"");var t=v.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),v.p=e})(),v.b=document.baseURI||self.location.href,v.nc=void 0,e=v(379),t=v.n(e),n=v(795),r=v.n(n),o=v(569),a=v.n(o),c=v(565),i=v.n(c),s=v(216),d=v.n(s),l=v(589),u=v.n(l),p=v(426),(h={}).styleTagTransform=u(),h.setAttributes=i(),h.insert=a().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=d(),t()(p.Z,h),p.Z&&p.Z.locals&&p.Z.locals,function(){const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("container");const n=document.createElement("div");n.classList.add("header");const r=document.createElement("div");r.classList.add("tab-container");const o=document.createElement("button");o.textContent="HOME",o.classList.add("home-tab");const a=document.createElement("button");a.textContent="MENU",a.classList.add("menu-tab");const c=document.createElement("button");c.textContent="CONTACT",c.classList.add("contact-tab");const i=document.createElement("div");i.classList.add("main");const s=document.createElement("div");s.classList.add("main-img");const d=document.createElement("div");d.classList.add("logo");const l=document.createElement("div");l.classList.add("footer"),t.appendChild(n),n.appendChild(r),r.appendChild(o),r.appendChild(a),r.appendChild(c),t.appendChild(i),i.appendChild(s),i.appendChild(d),t.appendChild(l),e.appendChild(t)}()})();
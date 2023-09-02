"use strict";(self.webpackChunkelegantota_docs=self.webpackChunkelegantota_docs||[]).push([[217],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(r),h=a,m=p["".concat(u,".").concat(h)]||p[h]||d[h]||i;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=h;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},9803:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={title:"Installation",sidebar_label:"Installation",sidebar_position:2},o=void 0,l={unversionedId:"installation",id:"installation",title:"Installation",description:"ElegantOTA requires no dependencies and runs out of the box with existing libraries provided in Arduino core. You can install ElegantOTA through one of the following methods:",source:"@site/docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/installation",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Installation",sidebar_label:"Installation",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/"},next:{title:"Getting Started",permalink:"/getting-started"}},u={},s=[{value:"1. Via Arduino IDE - Library Manager",id:"1-via-arduino-ide---library-manager",level:3},{value:"2. Manual Install",id:"2-manual-install",level:3},{value:"For Windows:",id:"for-windows",level:5},{value:"For Linux:",id:"for-linux",level:5},{value:"3. Import through Arduino IDE",id:"3-import-through-arduino-ide",level:4}],c={toc:s},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"ElegantOTA requires no dependencies and runs out of the box with existing libraries provided in Arduino core. You can install ElegantOTA through one of the following methods: "),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"1-via-arduino-ide---library-manager"},"1. Via Arduino IDE - Library Manager"),(0,a.kt)("p",null,'Go to Sketch > Include Library > Library Manager > Search for "ElegantOTA" > Install'),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"2-manual-install"},"2. Manual Install"),(0,a.kt)("h5",{id:"for-windows"},"For Windows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Download the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/ayushsharma82/ElegantOTA/archive/master.zip"},"Repository")),(0,a.kt)("li",{parentName:"ul"},"Extract the .zip in ",(0,a.kt)("inlineCode",{parentName:"li"},'Documents > Arduino > Libraries > {Place "ElegantOTA" folder Here}'))),(0,a.kt)("h5",{id:"for-linux"},"For Linux:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Download the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/ayushsharma82/ElegantOTA/archive/master.zip"},"Repository")," "),(0,a.kt)("li",{parentName:"ul"},"Extract the .zip in ",(0,a.kt)("inlineCode",{parentName:"li"},'Sketchbook > Libraries > {Place "ElegantOTA" folder Here}'))),(0,a.kt)("h4",{id:"3-import-through-arduino-ide"},"3. Import through Arduino IDE"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Download the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/ayushsharma82/ElegantOTA/archive/master.zip"},"Repository")),(0,a.kt)("li",{parentName:"ul"},"Go to ",(0,a.kt)("inlineCode",{parentName:"li"},"Sketch > Include Library > Add .zip Library > Select the Downloaded .zip File."))),(0,a.kt)("hr",null))}d.isMDXComponent=!0}}]);
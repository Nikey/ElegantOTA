"use strict";(self.webpackChunkelegantota_docs=self.webpackChunkelegantota_docs||[]).push([[816],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),c=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),d=n,y=p["".concat(o,".").concat(d)]||p[d]||m[d]||l;return r?a.createElement(y,s(s({ref:t},u),{},{components:r})):a.createElement(y,s({ref:t},u))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,s=new Array(l);s[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[p]="string"==typeof e?e:n,s[1]=i;for(var c=2;c<l;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4859:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const l={title:"Disable Filesystem OTA",sidebar_label:"Disable Filesystem OTA (Pro)",sidebar_position:9},s=void 0,i={unversionedId:"disable-filesystem-ota",id:"disable-filesystem-ota",title:"Disable Filesystem OTA",description:"This feature is only available in ElegantOTA Pro.",source:"@site/docs/disable-filesystem-ota.md",sourceDirName:".",slug:"/disable-filesystem-ota",permalink:"/disable-filesystem-ota",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Disable Filesystem OTA",sidebar_label:"Disable Filesystem OTA (Pro)",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Disable Firmware OTA (Pro)",permalink:"/disable-firmware-ota"},next:{title:"Hardware ID (Pro)",permalink:"/hardware-id"}},o={},c=[{value:"Disable Filesystem OTA:",id:"disable-filesystem-ota",level:4},{value:"Enable Filesystem OTA:",id:"enable-filesystem-ota",level:4},{value:"Get Filesystem OTA mode status:",id:"get-filesystem-ota-mode-status",level:4}],u={toc:c},p="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("div",{className:"pro-label"},(0,n.kt)("i",null,(0,n.kt)("h4",{style:{fontWeight:"500",marginBottom:5}},"This feature is only available in ",(0,n.kt)("a",{target:"_blank",style:{color:"red"},href:"https://elegantota.pro"},"ElegantOTA Pro"),"."))),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("p",null,"ElegantOTA allows you to selective enable or disable OTA modes of your choice for security reasons or when you have a important task running where you don't want it to get interrupted by an OTA update. This will be represented in the portal (ElegantOTA webpage) too."),(0,n.kt)("p",null,"Using these functions you can enable or disable filesystem updates ( SPIFFS or LittleFS )."),(0,n.kt)("h4",{id:"disable-filesystem-ota"},"Disable Filesystem OTA:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"// Pass 'false' to disable Filesystem mode\nElegantOTA.setFilesystemMode(true);\n")),(0,n.kt)("h4",{id:"enable-filesystem-ota"},"Enable Filesystem OTA:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"// Pass 'true' to enable Filesystem mode\nElegantOTA.setFilesystemMode(false);\n")),(0,n.kt)("h4",{id:"get-filesystem-ota-mode-status"},"Get Filesystem OTA mode status:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},'// You can use this logic inside a function if neccessary\nif(ElegantOTA.checkFilesystemMode() == true) {\n    Serial.println("Filesystem mode is enabled");\n} else {\n    Serial.println("Filesystem mode is disabled");\n}\n')))}m.isMDXComponent=!0}}]);
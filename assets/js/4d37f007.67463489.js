"use strict";(self.webpackChunkelegantota_docs=self.webpackChunkelegantota_docs||[]).push([[361],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,y=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7280:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={title:"Async Mode",sidebar_label:"Async Mode",sidebar_position:7},i=void 0,l={unversionedId:"async-mode",id:"async-mode",title:"Async Mode",description:"Introduction",source:"@site/docs/async-mode.md",sourceDirName:".",slug:"/async-mode",permalink:"/async-mode",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Async Mode",sidebar_label:"Async Mode",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Callbacks",permalink:"/callbacks"},next:{title:"Disable Firmware OTA (Pro)",permalink:"/disable-firmware-ota"}},s={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Enabling Async Mode",id:"enabling-async-mode",level:2},{value:"Benefits of Async Mode",id:"benefits-of-async-mode",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"One of the features of ElegantOTA is the async mode, which provides asynchronous web server functionality for handling OTA updates. This mode should only be enabled if you are using ESPAsyncWebServer library in your project/firmware."),(0,o.kt)("h2",{id:"enabling-async-mode"},"Enabling Async Mode"),(0,o.kt)("p",null,"To enable async mode for ElegantOTA, follow these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Locate the ",(0,o.kt)("inlineCode",{parentName:"p"},"ELEGANTOTA_USE_ASYNC_WEBSERVER")," macro in the ",(0,o.kt)("inlineCode",{parentName:"p"},"ElegantOTA.h")," file, and set it to ",(0,o.kt)("inlineCode",{parentName:"p"},"1"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"#define ELEGANTOTA_USE_ASYNC_WEBSERVER 1\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Save the changes to the ",(0,o.kt)("inlineCode",{parentName:"p"},"ElegantOTA.h")," file.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You are now ready to use ElegantOTA in async mode for your OTA updates, utilizing the ESPAsyncWebServer library."))),(0,o.kt)("h2",{id:"benefits-of-async-mode"},"Benefits of Async Mode"),(0,o.kt)("p",null,"Enabling async mode for ElegantOTA offers several advantages:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Non-blocking Operation:")," In async mode, ElegantOTA leverages the asynchronous web server capabilities of ESPAsyncWebServer. This means that OTA updates won't block your device's main loop. It allows your device to continue executing other tasks while handling OTA updates in the background.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Improved Responsiveness:")," Your device can remain responsive to user interactions or other processes during OTA updates, ensuring a smoother user experience."))))}u.isMDXComponent=!0}}]);
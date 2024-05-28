"use strict";(self.webpackChunkcrowdin_cli_website=self.webpackChunkcrowdin_cli_website||[]).push([[9649],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>k});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=l(t),u=i,k=m["".concat(c,".").concat(u)]||m[u]||d[u]||o;return t?r.createElement(k,a(a({ref:n},s),{},{components:t})):r.createElement(k,a({ref:n},s))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=u;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p[m]="string"==typeof e?e:i,a[1]=p;for(var l=2;l<o;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1768:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=t(7462),i=(t(7294),t(3905));const o={},a="crowdin screenshot list",p={unversionedId:"commands/crowdin-screenshot-list",id:"commands/crowdin-screenshot-list",title:"crowdin screenshot list",description:"Description",source:"@site/docs/commands/crowdin-screenshot-list.md",sourceDirName:"commands",slug:"/commands/crowdin-screenshot-list",permalink:"/crowdin-cli/commands/crowdin-screenshot-list",draft:!1,editUrl:"https://github.com/crowdin/crowdin-cli/tree/main/website/docs/commands/crowdin-screenshot-list.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"crowdin screenshot",permalink:"/crowdin-cli/commands/crowdin-screenshot"},next:{title:"crowdin screenshot upload",permalink:"/crowdin-cli/commands/crowdin-screenshot-upload"}},c={},l=[{value:"Description",id:"description",level:2},{value:"Synopsis",id:"synopsis",level:2},{value:"Options",id:"options",level:2},{value:"Config Options",id:"config-options",level:2}],s={toc:l},m="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(m,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"crowdin-screenshot-list"},"crowdin screenshot list"),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"List screenshots"),(0,i.kt)("h2",{id:"synopsis"},"Synopsis"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"crowdin screenshot list [CONFIG OPTIONS] [OPTIONS]\n")),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--string-id"),"=",(0,i.kt)("em",{parentName:"p"},"\u2026"),(0,i.kt)("br",{parentName:"p"}),"\n","Numeric string identifier"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-V"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"--version"),(0,i.kt)("br",{parentName:"p"}),"\n","Display version information and exit"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-h"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"--help"),(0,i.kt)("br",{parentName:"p"}),"\n","Display help message and exit"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--no-progress"),(0,i.kt)("br",{parentName:"p"}),"\n","Disable progress on executed command"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-v"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"--verbose"),(0,i.kt)("br",{parentName:"p"}),"\n","Provide more information about the command execution"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--no-colors"),(0,i.kt)("br",{parentName:"p"}),"\n","Disable colors and styles"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-c"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"--config"),"=",(0,i.kt)("em",{parentName:"p"},"\u2026"),(0,i.kt)("br",{parentName:"p"}),"\n","Specify a path to the configuration file. Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"crowdin.yml")," or\n",(0,i.kt)("inlineCode",{parentName:"p"},"crowdin.yaml")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--identity"),"=",(0,i.kt)("em",{parentName:"p"},"\u2026"),(0,i.kt)("br",{parentName:"p"}),"\n","Specify a path to user-specific credentials"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--plain"),(0,i.kt)("br",{parentName:"p"}),"\n","Provide plain, processable output"),(0,i.kt)("h2",{id:"config-options"},"Config Options"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-T"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"--token"),"=",(0,i.kt)("em",{parentName:"p"},"\u2026"),(0,i.kt)("br",{parentName:"p"}),"\n","Personal access token required for authentication"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--base-url"),"=",(0,i.kt)("em",{parentName:"p"},"\u2026"),(0,i.kt)("br",{parentName:"p"}),"\n","Base URL of Crowdin server for API requests execution"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"--base-path"),"=",(0,i.kt)("em",{parentName:"p"},"\u2026"),(0,i.kt)("br",{parentName:"p"}),"\n","Path to your project directory on a local machine"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"-i"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"--project-id"),"=",(0,i.kt)("em",{parentName:"p"},"\u2026"),(0,i.kt)("br",{parentName:"p"}),"\n","Numeric ID of the project"))}d.isMDXComponent=!0}}]);
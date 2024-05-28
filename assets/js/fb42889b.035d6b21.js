"use strict";(self.webpackChunkcrowdin_cli_website=self.webpackChunkcrowdin_cli_website||[]).push([[7722],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>k});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},m=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=l(t),u=o,k=s["".concat(c,".").concat(u)]||s[u]||d[u]||i;return t?r.createElement(k,a(a({ref:n},m),{},{components:t})):r.createElement(k,a({ref:n},m))}));function k(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p[s]="string"==typeof e?e:o,a[1]=p;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9648:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var r=t(7462),o=(t(7294),t(3905));const i={},a="crowdin comment resolve",p={unversionedId:"commands/crowdin-comment-resolve",id:"commands/crowdin-comment-resolve",title:"crowdin comment resolve",description:"Description",source:"@site/docs/commands/crowdin-comment-resolve.md",sourceDirName:"commands",slug:"/commands/crowdin-comment-resolve",permalink:"/crowdin-cli/commands/crowdin-comment-resolve",draft:!1,editUrl:"https://github.com/crowdin/crowdin-cli/tree/main/website/docs/commands/crowdin-comment-resolve.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"crowdin comment add",permalink:"/crowdin-cli/commands/crowdin-comment-add"},next:{title:"crowdin task",permalink:"/crowdin-cli/commands/crowdin-task"}},c={},l=[{value:"Description",id:"description",level:2},{value:"Synopsis",id:"synopsis",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Options",id:"options",level:2},{value:"Config Options",id:"config-options",level:2}],m={toc:l},s="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(s,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"crowdin-comment-resolve"},"crowdin comment resolve"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Resolve reported issues with source strings or translations"),(0,o.kt)("h2",{id:"synopsis"},"Synopsis"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"crowdin comment resolve <id> [CONFIG OPTIONS] [OPTIONS]\n")),(0,o.kt)("h2",{id:"arguments"},"Arguments"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"<","id",">"),(0,o.kt)("br",{parentName:"p"}),"\n","Numeric ID of the string comment"),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-c"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"--config"),"=",(0,o.kt)("em",{parentName:"p"},"\u2026"),(0,o.kt)("br",{parentName:"p"}),"\n","Specify a path to the configuration file. Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"crowdin.yml")," or\n",(0,o.kt)("inlineCode",{parentName:"p"},"crowdin.yaml")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-h"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"--help"),(0,o.kt)("br",{parentName:"p"}),"\n","Display help message and exit"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--identity"),"=",(0,o.kt)("em",{parentName:"p"},"\u2026"),(0,o.kt)("br",{parentName:"p"}),"\n","Specify a path to user-specific credentials"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--no-colors"),(0,o.kt)("br",{parentName:"p"}),"\n","Disable colors and styles"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--no-progress"),(0,o.kt)("br",{parentName:"p"}),"\n","Disable progress on executed command"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-v"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"--verbose"),(0,o.kt)("br",{parentName:"p"}),"\n","Provide more information about the command execution"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-V"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"--version"),(0,o.kt)("br",{parentName:"p"}),"\n","Display version information and exit"),(0,o.kt)("h2",{id:"config-options"},"Config Options"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--base-path"),"=",(0,o.kt)("em",{parentName:"p"},"\u2026"),(0,o.kt)("br",{parentName:"p"}),"\n","Path to your project directory on a local machine"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--base-url"),"=",(0,o.kt)("em",{parentName:"p"},"\u2026"),(0,o.kt)("br",{parentName:"p"}),"\n","Base URL of Crowdin server for API requests execution"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-i"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"--project-id"),"=",(0,o.kt)("em",{parentName:"p"},"\u2026"),(0,o.kt)("br",{parentName:"p"}),"\n","Numeric ID of the project"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"-T"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"--token"),"=",(0,o.kt)("em",{parentName:"p"},"\u2026"),(0,o.kt)("br",{parentName:"p"}),"\n","Personal access token required for authentication"))}d.isMDXComponent=!0}}]);
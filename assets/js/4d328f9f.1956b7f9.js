"use strict";(self.webpackChunkweb_analytics_handbook=self.webpackChunkweb_analytics_handbook||[]).push([[167],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=r,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||a;return t?o.createElement(f,i(i({ref:n},d),{},{components:t})):o.createElement(f,i({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9162:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var o=t(7462),r=t(3366),a=(t(7294),t(3905)),i=["components"],s={sidebar_position:1},l="Manage Docs Versions",c={unversionedId:"handbook/tutorial-extras/manage-docs-versions",id:"handbook/tutorial-extras/manage-docs-versions",isDocsHomePage:!1,title:"Manage Docs Versions",description:"Docusaurus can manage multiple versions of your docs.",source:"@site/docs/handbook/tutorial-extras/manage-docs-versions.md",sourceDirName:"handbook/tutorial-extras",slug:"/handbook/tutorial-extras/manage-docs-versions",permalink:"/web-analytics-handbook/docs/handbook/tutorial-extras/manage-docs-versions",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/handbook/tutorial-extras/manage-docs-versions.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"handbookSidebar",previous:{title:"Congratulations!",permalink:"/web-analytics-handbook/docs/handbook/tutorial-basics/congratulations"},next:{title:"Translate your site",permalink:"/web-analytics-handbook/docs/handbook/tutorial-extras/translate-your-site"}},d=[{value:"Create a docs version",id:"create-a-docs-version",children:[]},{value:"Add a Version Dropdown",id:"add-a-version-dropdown",children:[]},{value:"Update an existing version",id:"update-an-existing-version",children:[]}],u={toc:d};function p(e){var n=e.components,s=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,s,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"manage-docs-versions"},"Manage Docs Versions"),(0,a.kt)("p",null,"Docusaurus can manage multiple versions of your docs."),(0,a.kt)("h2",{id:"create-a-docs-version"},"Create a docs version"),(0,a.kt)("p",null,"Release a version 1.0 of your project:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run docusaurus docs:version 1.0\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"docs")," folder is copied into ",(0,a.kt)("inlineCode",{parentName:"p"},"versioned_docs/version-1.0")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"versions.json")," is created."),(0,a.kt)("p",null,"Your docs now have 2 versions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1.0")," at ",(0,a.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/")," for the version 1.0 docs"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"current")," at ",(0,a.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/next/")," for the ",(0,a.kt)("strong",{parentName:"li"},"upcoming, unreleased docs"))),(0,a.kt)("h2",{id:"add-a-version-dropdown"},"Add a Version Dropdown"),(0,a.kt)("p",null,"To navigate seamlessly across versions, add a version dropdown."),(0,a.kt)("p",null,"Modify the ",(0,a.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"module.exports = {\n  themeConfig: {\n    navbar: {\n      items: [\n        // highlight-start\n        {\n          type: 'docsVersionDropdown',\n        },\n        // highlight-end\n      ],\n    },\n  },\n};\n")),(0,a.kt)("p",null,"The docs version dropdown appears in your navbar:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Docs Version Dropdown",src:t(8730).Z})),(0,a.kt)("h2",{id:"update-an-existing-version"},"Update an existing version"),(0,a.kt)("p",null,"It is possible to edit versioned docs in their respective folder:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"versioned_docs/version-1.0/hello.md")," updates ",(0,a.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/hello")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"docs/hello.md")," updates ",(0,a.kt)("inlineCode",{parentName:"li"},"http://localhost:3000/docs/next/hello"))))}p.isMDXComponent=!0},8730:function(e,n,t){n.Z=t.p+"assets/images/docsVersionDropdown-dda80f009a926fb2dd92bab8faa6c4d8.png"}}]);
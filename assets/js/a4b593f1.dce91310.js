"use strict";(self.webpackChunkwebsite_2=self.webpackChunkwebsite_2||[]).push([[649],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9533:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return p}});var r=n(3117),i=(n(7294),n(3905));const a={sidebar_position:2},o="Pipeline Requirements",l={unversionedId:"About_WARP/PipelineRequirements",id:"About_WARP/PipelineRequirements",title:"Pipeline Requirements",description:"All released WARP pipelines should meet the following criteria:",source:"@site/docs/About_WARP/PipelineRequirements.md",sourceDirName:"About_WARP",slug:"/About_WARP/PipelineRequirements",permalink:"/warp/docs/About_WARP/PipelineRequirements",draft:!1,editUrl:"https://github.com/broadinstitute/warp/edit/develop/website/docs/About_WARP/PipelineRequirements.md",tags:[],version:"current",lastUpdatedBy:"Kaylee Mathews",lastUpdatedAt:1715958325,formattedLastUpdatedAt:"May 17, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Best Practices for Building Data Processing Pipelines",permalink:"/warp/docs/About_WARP/BestPractices"},next:{title:"Testing Pipelines",permalink:"/warp/docs/About_WARP/TestingPipelines"}},s={},p=[],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pipeline-requirements"},"Pipeline Requirements"),(0,i.kt)("p",null,"All released WARP pipelines should meet the following criteria:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Pipelines are written in WDL, modular, and optimized for Google cloud. The pipelines are often portable to other environments."),(0,i.kt)("li",{parentName:"ol"},"Pipelines have plumbing (fast) tests and scientific tests for catching any unintended changes in data processing."),(0,i.kt)("li",{parentName:"ol"},"Pipelines are semantically versioned, have a changelog, and are packaged into a release with all dependencies."),(0,i.kt)("li",{parentName:"ol"},"Pipelines are released to Dockstore automatically upon release and are available in the cloud-based ",(0,i.kt)("a",{parentName:"li",href:"https://app.terra.bio/"},"Terra platform"),"."),(0,i.kt)("li",{parentName:"ol"},"Pipelines have example inputs alongside the pipeline."),(0,i.kt)("li",{parentName:"ol"},"Pipelines have a Readme.md describing the pipeline."),(0,i.kt)("li",{parentName:"ol"},"Pipelines use public docker containers and only open source tools."),(0,i.kt)("li",{parentName:"ol"},"Pipelines are developed in a collaboration between software engineers and a scientific owner of each pipeline who must approve all changes to the code and verify that any resulting changes in outputs are scientifically valid."),(0,i.kt)("li",{parentName:"ol"},"Pipelines have a publication-style methods section to enable easy citation.")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Read more about our pipeline development in our ",(0,i.kt)("a",{parentName:"p",href:"/warp/docs/About_WARP/BestPractices"},"Best Practices")," documentation.")))}d.isMDXComponent=!0}}]);
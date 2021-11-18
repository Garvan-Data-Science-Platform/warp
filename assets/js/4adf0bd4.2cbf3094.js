"use strict";(self.webpackChunkwebsite_2=self.webpackChunkwebsite_2||[]).push([[1651],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=l(n),h=i,m=d["".concat(p,".").concat(h)]||d[h]||u[h]||r;return n?a.createElement(m,s(s({ref:t},c),{},{components:n})):a.createElement(m,s({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var l=2;l<r;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3838:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return l},default:function(){return u}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),s={sidebar_position:3},o="Testing Pipelines",p={unversionedId:"About_WARP/TestingPipelines",id:"About_WARP/TestingPipelines",isDocsHomePage:!1,title:"Testing Pipelines",description:"WARP pipelines have accompanying automated tests that run on each Pull Request (PR). These tests compare validated outputs to the new PR outputs. For any changes in code shared between pipelines, the tests also confirm which pipelines could be affected and ensure that the PR makes no unexpected changes to the affected pipelines.",source:"@site/docs/About_WARP/TestingPipelines.md",sourceDirName:"About_WARP",slug:"/About_WARP/TestingPipelines",permalink:"/warp/docs/About_WARP/TestingPipelines",editUrl:"https://github.com/broadinstitute/warp/edit/develop/website/docs/About_WARP/TestingPipelines.md",tags:[],version:"current",lastUpdatedBy:"ekiernan",lastUpdatedAt:1637265299,formattedLastUpdatedAt:"11/18/2021",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Pipeline Requirements",permalink:"/warp/docs/About_WARP/PipelineRequirements"},next:{title:"Version and Release Pipelines",permalink:"/warp/docs/About_WARP/VersionAndReleasePipelines"}},l=[{value:"WARP branches and how they relate to testing",id:"warp-branches-and-how-they-relate-to-testing",children:[]},{value:"Initiating pipeline tests",id:"initiating-pipeline-tests",children:[]},{value:"Contact us with questions about testing",id:"contact-us-with-questions-about-testing",children:[]}],c={toc:l};function u(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"testing-pipelines"},"Testing Pipelines"),(0,r.kt)("p",null,"WARP pipelines have accompanying automated tests that run on each Pull Request (PR). These tests compare validated outputs to the new PR outputs. For any changes in code shared between pipelines, the tests also confirm which pipelines could be affected and ensure that the PR makes no unexpected changes to the affected pipelines."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"NOTICE 9/29/2020")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"We have formatted all testing input files for Cromwell 52 or higher. If you are using WARP test input files either directily or as a model of how to configure inputs, these changes may impact you."))),(0,r.kt)("h2",{id:"warp-branches-and-how-they-relate-to-testing"},"WARP branches and how they relate to testing"),(0,r.kt)("p",null,"WARP has three main branches that are used for different stages of pipeline testing: ",(0,r.kt)("strong",{parentName:"p"},"develop"),", ",(0,r.kt)("strong",{parentName:"p"},"staging"),", and ",(0,r.kt)("strong",{parentName:"p"},"master"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Branch"),(0,r.kt)("th",{parentName:"tr",align:null},"Purpose"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"develop"),(0,r.kt)("td",{parentName:"tr",align:null},"Code that has passed plumbing tests; pre-releases for testing")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"staging"),(0,r.kt)("td",{parentName:"tr",align:null},"Release candidate code that is frozen for longer scientific testing")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"master"),(0,r.kt)("td",{parentName:"tr",align:null},"Code that has passed scientific testings; published release artifacts")))),(0,r.kt)("h2",{id:"initiating-pipeline-tests"},"Initiating pipeline tests"),(0,r.kt)("p",null,"A PR will initiate a pipeline test if it contains changes to the main workflow WDL, the WDL dependencies (such as tasks), the options JSON file, the pipeline tests, or the test inputs. Smart plumbing and scientific tests compare PR changes to a specified base branch. They then use the WARP directory structure to dynamically determine which pipelines are affected and run tests for all affected pipelines."),(0,r.kt)("h2",{id:"contact-us-with-questions-about-testing"},"Contact us with questions about testing"),(0,r.kt)("p",null,"If you have questions about the WARP testing process, please reach out to ",(0,r.kt)("a",{parentName:"p",href:"mailto:kdegatano@broadinstitute.org"},"Kylee Degatano"),"."))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkwebsite_2=self.webpackChunkwebsite_2||[]).push([[9452],{3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return h}});var n=o(7294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var u=n.createContext({}),l=function(e){var t=n.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=l(o),m=i,h=d["".concat(u,".").concat(m)]||d[m]||p[m]||r;return o?n.createElement(h,s(s({ref:t},c),{},{components:o})):n.createElement(h,s({ref:t},c))}));function h(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=o.length,s=new Array(r);s[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[d]="string"==typeof e?e:i,s[1]=a;for(var l=2;l<r;l++)s[l]=o[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},5529:function(e,t,o){o.r(t),o.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return r},metadata:function(){return a},toc:function(){return l}});var n=o(3117),i=(o(7294),o(3905));const r={sidebar_position:4},s="Reusing WDL code",a={unversionedId:"Best_practices/reusing_code",id:"Best_practices/reusing_code",title:"Reusing WDL code",description:"Whether you\u2019re setting up workflows for future reusability or trying to reuse someone else\u2019s code, the Broad Pipeline Development team has a few tips and tricks to consider for your use case.",source:"@site/docs/Best_practices/reusing_code.md",sourceDirName:"Best_practices",slug:"/Best_practices/reusing_code",permalink:"/warp/docs/Best_practices/reusing_code",draft:!1,editUrl:"https://github.com/broadinstitute/warp/edit/develop/website/docs/Best_practices/reusing_code.md",tags:[],version:"current",lastUpdatedBy:"Nikelle Petrillo",lastUpdatedAt:1721088058,formattedLastUpdatedAt:"Jul 16, 2024",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Setting default values",permalink:"/warp/docs/Best_practices/setting_defaults"},next:{title:"WDL formatting tips",permalink:"/warp/docs/Best_practices/suggested_formats"}},u={},l=[{value:"Setting up your code for reusability",id:"setting-up-your-code-for-reusability",level:2},{value:"Modularize reusable code into small WDL tasks",id:"modularize-reusable-code-into-small-wdl-tasks",level:3},{value:"Code WDL tasks in external WDL scripts, not in workflow definitions",id:"code-wdl-tasks-in-external-wdl-scripts-not-in-workflow-definitions",level:3},{value:"Reusing someone else\u2019s WDL code",id:"reusing-someone-elses-wdl-code",level:2},{value:"Decide if you want to keep the code up-to-date with the source",id:"decide-if-you-want-to-keep-the-code-up-to-date-with-the-source",level:3},{value:"When modifying code, ensure Docker images are compatible with code adjustments",id:"when-modifying-code-ensure-docker-images-are-compatible-with-code-adjustments",level:3}],c={toc:l},d="wrapper";function p(e){let{components:t,...o}=e;return(0,i.kt)(d,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"reusing-wdl-code"},"Reusing WDL code"),(0,i.kt)("p",null,"Whether you\u2019re setting up workflows for future reusability or trying to reuse someone else\u2019s code, the Broad Pipeline Development team has a few tips and tricks to consider for your use case."),(0,i.kt)("h2",{id:"setting-up-your-code-for-reusability"},"Setting up your code for reusability"),(0,i.kt)("p",null,"Set up your WDL code to reuse tools and software keeping in mind the following tips:"),(0,i.kt)("h3",{id:"modularize-reusable-code-into-small-wdl-tasks"},"Modularize reusable code into small WDL tasks"),(0,i.kt)("p",null,"If you\u2019re going to reuse software tools and commands across workflows, it makes sense to thoughtfully modularize these commands into separate WDL tasks that can be called independently. When thinking about how or what to modularize, keep maintenance in mind; when you share a WDL task across workflows, updating that task impacts any other workflow that uses it, including any automated scripts that validate your workflows. You want to keep tasks small and functional enough that you can reuse them, but not so small that you increase your maintenance by having to update multiple tasks with a single workflow update. "),(0,i.kt)("h3",{id:"code-wdl-tasks-in-external-wdl-scripts-not-in-workflow-definitions"},"Code WDL tasks in external WDL scripts, not in workflow definitions"),(0,i.kt)("p",null,"When coding extensive WDL workflows that reuse multiple tasks, it makes sense to place those tasks in separate WDL scripts that your workflow(s) can import. This keeps your workflows clean and easier to read. It also allows you to choose how you group tasks together for reusability and maintenance. For example, you might choose to group together tasks that are for a specific workflow or group tasks by function. In either case, you can put tasks into a separate WDL script dedicated to the tasks alone. WARP has several examples of these task WDLs that you can use as a template, such as the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/blob/master/tasks/broad/ImputationTasks.wdl"},"Imputation task WDL"),", which groups tasks that are for the Imputation pipeline, or the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/blob/master/tasks/broad/Utilities.wdl"},"Utilities task WDL"),", which contains common genomic sequencing file conversion and validation tasks that are applied across multiple workflows. "),(0,i.kt)("h2",{id:"reusing-someone-elses-wdl-code"},"Reusing someone else\u2019s WDL code"),(0,i.kt)("p",null,"The best way to reuse WDL code written by someone else depends on how you want to implement and update it for your workflows. You can reuse code exactly as written by the contributor or you can modify it for your own purposes. If you plan to use code as-is, it can be helpful to pull that code directly from whatever repository stores it. For example, if it\u2019s in GitHub, you can either fork the repository or point directly to code using raw, full-length ",(0,i.kt)("inlineCode",{parentName:"p"},"http")," paths (see Cromwell\u2019s documentation on imports). You can also use forking if you\u2019re planning to modify code, but in that case, sometimes it might even be easier to copy and paste the code. No matter your intentions, keep the following tips in mind when using external code."),(0,i.kt)("h3",{id:"decide-if-you-want-to-keep-the-code-up-to-date-with-the-source"},"Decide if you want to keep the code up-to-date with the source"),(0,i.kt)("p",null,"Sometimes you might want to reuse code that is regularly updated by external contributors. If you want to keep up with these updates, you don\u2019t want to deal with the hassle of manually making modifications. This is why the Pipeline Development team recommends importing the WDL code directly from whatever respository it lives in. If you\u2019re only trying to reuse a specific version of WDL code, you can still pull it directly, but you\u2019ll want to pin to the specific code version."),(0,i.kt)("h3",{id:"when-modifying-code-ensure-docker-images-are-compatible-with-code-adjustments"},"When modifying code, ensure Docker images are compatible with code adjustments"),(0,i.kt)("p",null,"Another use case for reusing code is simply avoiding reinventing the wheel. The WDL community is wide and there are multiple existing code snippets and tasks that have just the tool you need for your analysis. However, keep in mind that some of these tasks are set up to use parameters and scripts that are specific to the Docker specified in the task runtime. If you\u2019re planning on modifying existing code but still using the tool in the task\u2019s Docker, it\u2019s important to check that your modifications are compatible."))}p.isMDXComponent=!0}}]);
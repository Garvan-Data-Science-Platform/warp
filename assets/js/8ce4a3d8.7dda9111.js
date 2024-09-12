"use strict";(self.webpackChunkwebsite_2=self.webpackChunkwebsite_2||[]).push([[1703],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(n),c=i,h=u["".concat(s,".").concat(c)]||u[c]||m[c]||r;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4998:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return r},metadata:function(){return o},toc:function(){return d}});var a=n(3117),i=(n(7294),n(3905));const r={sidebar_position:1,slug:"/Pipelines/BuildIndices_Pipeline/README"},l="BuildIndices Overview",o={unversionedId:"Pipelines/BuildIndices_Pipeline/README",id:"Pipelines/BuildIndices_Pipeline/README",title:"BuildIndices Overview",description:"| Pipeline Version | Date Updated | Documentation Author | Questions or Feedback |",source:"@site/docs/Pipelines/BuildIndices_Pipeline/README.md",sourceDirName:"Pipelines/BuildIndices_Pipeline",slug:"/Pipelines/BuildIndices_Pipeline/README",permalink:"/warp/docs/Pipelines/BuildIndices_Pipeline/README",draft:!1,editUrl:"https://github.com/broadinstitute/warp/edit/develop/website/docs/Pipelines/BuildIndices_Pipeline/README.md",tags:[],version:"current",lastUpdatedBy:"ekiernan",lastUpdatedAt:1726167990,formattedLastUpdatedAt:"Sep 12, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/Pipelines/BuildIndices_Pipeline/README"},sidebar:"docsSidebar",previous:{title:"ATAC Library Metrics Overview",permalink:"/warp/docs/Pipelines/ATAC/library-metrics"},next:{title:"CEMBA Overview",permalink:"/warp/docs/Pipelines/CEMBA_MethylC_Seq_Pipeline/README"}},s={},d=[{value:"Introduction to the BuildIndices workflow",id:"introduction-to-the-buildindices-workflow",level:2},{value:"Quickstart table",id:"quickstart-table",level:2},{value:"Set-up",id:"set-up",level:2},{value:"BuildIndices installation",id:"buildindices-installation",level:3},{value:"Inputs",id:"inputs",level:3},{value:"Input descriptions",id:"input-descriptions",level:4},{value:"BuildIndices tasks and tools",id:"buildindices-tasks-and-tools",level:2},{value:"1. Check inputs, modify reference files, and create STAR index file",id:"1-check-inputs-modify-reference-files-and-create-star-index-file",level:4},{value:"2. Calculates chromosome sizes",id:"2-calculates-chromosome-sizes",level:4},{value:"3. Builds reference bundle for bwa-mem2",id:"3-builds-reference-bundle-for-bwa-mem2",level:4},{value:"Outputs",id:"outputs",level:2},{value:"Versioning and testing",id:"versioning-and-testing",level:2},{value:"Citing the BuildIndices Pipeline",id:"citing-the-buildindices-pipeline",level:2},{value:"Consortia support",id:"consortia-support",level:2},{value:"Feedback",id:"feedback",level:2}],p={toc:d},u="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"buildindices-overview"},"BuildIndices Overview"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Pipeline Version"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Date Updated"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Documentation Author"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Questions or Feedback"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp/releases"},"BuildIndices_v3.0.0")),(0,i.kt)("td",{parentName:"tr",align:"center"},"December, 2023"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Kaylee Mathews"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Please ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp/issues"},"file an issue in WARP"),".")))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"BuildIndices_diagram",src:n(4563).Z,width:"1047",height:"1048"})),(0,i.kt)("h2",{id:"introduction-to-the-buildindices-workflow"},"Introduction to the BuildIndices workflow"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/blob/master/pipelines/skylab/build_indices/BuildIndices.wdl"},"BuildIndices workflow")," is an open-source, cloud-optimized pipeline developed in collaboration with the ",(0,i.kt)("a",{parentName:"p",href:"https://biccn.org/"},"BRAIN Initiative Cell Census Network")," (BICCN) and the BRAIN Initiative Cell Atlas Network (BICAN). "),(0,i.kt)("p",null,"Overall, the workflow filters GTF files for selected gene biotypes, calculates chromosome sizes, and builds reference bundles with required files for ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/alexdobin/STAR"},"STAR")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/bwa-mem2/bwa-mem2"},"bwa-mem2")," aligners."),(0,i.kt)("h2",{id:"quickstart-table"},"Quickstart table"),(0,i.kt)("p",null,"The following table provides a quick glance at the BuildIndices pipeline features:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Pipeline features"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Source"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Overall workflow"),(0,i.kt)("td",{parentName:"tr",align:null},"Reference bundle creation for STAR and bwa-mem2 aligners"),(0,i.kt)("td",{parentName:"tr",align:null},"Code available on ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp/blob/master/pipelines/skylab/build_indices/BuildIndices.wdl"},"GitHub"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Workflow language"),(0,i.kt)("td",{parentName:"tr",align:null},"WDL 1.0"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/openwdl/wdl"},"openWDL"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Genomic Reference Sequence"),(0,i.kt)("td",{parentName:"tr",align:null},"GRCh38 human genome primary sequence, M32 (GRCm39) mouse genome primary sequence, and release 103 (GCF_003339765.1) macaque genome primary sequence"),(0,i.kt)("td",{parentName:"tr",align:null},"GENCODE ",(0,i.kt)("a",{parentName:"td",href:"https://www.gencodegenes.org/human/release_43.html"},"human reference files"),", GENCODE ",(0,i.kt)("a",{parentName:"td",href:"https://www.gencodegenes.org/mouse/release_M32.html"},"mouse reference files"),", and NCBI ",(0,i.kt)("a",{parentName:"td",href:"https://www.ncbi.nlm.nih.gov/datasets/genome/GCF_003339765.1/"},"macaque reference files"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Gene annotation reference (GTF)"),(0,i.kt)("td",{parentName:"tr",align:null},"Reference containing gene annotations"),(0,i.kt)("td",{parentName:"tr",align:null},"GENCODE ",(0,i.kt)("a",{parentName:"td",href:"https://ftp.ebi.ac.uk/pub/databases/gencode/Gencode_human/release_43/gencode.v43.annotation.gtf.gz"},"human GTF"),", GENCODE ",(0,i.kt)("a",{parentName:"td",href:"https://ftp.ebi.ac.uk/pub/databases/gencode/Gencode_mouse/release_M32/gencode.vM32.primary_assembly.annotation.gtf.gz"},"mouse GTF"),", and NCBI ",(0,i.kt)("a",{parentName:"td",href:"https://www.ncbi.nlm.nih.gov/datasets/genome/GCF_003339765.1/"},"macaque GTF"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Reference builders"),(0,i.kt)("td",{parentName:"tr",align:null},"STAR, bwa-mem2"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://pubmed.ncbi.nlm.nih.gov/23104886/"},"Dobin et al. 2013"),", ",(0,i.kt)("a",{parentName:"td",href:"https://ieeexplore.ieee.org/document/8820962"},"Vasimuddin et al. 2019"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Data input file format"),(0,i.kt)("td",{parentName:"tr",align:null},"File format in which reference files are provided"),(0,i.kt)("td",{parentName:"tr",align:null},"FASTA, GTF, TSV")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Data output file format"),(0,i.kt)("td",{parentName:"tr",align:null},"File formats in which BuildIndices output is provided"),(0,i.kt)("td",{parentName:"tr",align:null},"GTF, TAR, TXT")))),(0,i.kt)("h2",{id:"set-up"},"Set-up"),(0,i.kt)("h3",{id:"buildindices-installation"},"BuildIndices installation"),(0,i.kt)("p",null,'To download the latest BuildIndices release, see the release tags prefixed with "BuildIndices" on the WARP ',(0,i.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/releases"},"releases page"),". All BuildIndices pipeline releases are documented in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/blob/master/pipelines/skylab/build_indices/BuildIndices.changelog.md"},"BuildIndices changelog"),". "),(0,i.kt)("p",null,"To search releases of this and other pipelines, use the WARP command-line tool ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/tree/master/wreleaser"},"Wreleaser"),"."),(0,i.kt)("p",null,"If you\u2019re running a BuildIndices workflow version prior to the latest release, the accompanying documentation for that release may be downloaded with the source code on the WARP ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/releases"},"releases page")," (see the folder ",(0,i.kt)("inlineCode",{parentName:"p"},"website/docs/Pipelines/BuildIndices_Pipeline"),")."),(0,i.kt)("p",null,"The BuildIndices pipeline can be deployed using ",(0,i.kt)("a",{parentName:"p",href:"https://cromwell.readthedocs.io/en/stable/"},"Cromwell"),", a GA4GH-compliant, flexible workflow management system that supports multiple computing platforms. The workflow can also be run in ",(0,i.kt)("a",{parentName:"p",href:"https://app.terra.bio"},"Terra"),", a cloud-based analysis platform."),(0,i.kt)("h3",{id:"inputs"},"Inputs"),(0,i.kt)("p",null,"The BuildIndices workflow inputs are specified in JSON configuration files. Configuration files for ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/blob/master/pipelines/skylab/build_indices/Macaque.json"},"macaque")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/blob/master/pipelines/skylab/build_indices/Mouse.json"},"mouse")," references can be found in the WARP repository."),(0,i.kt)("h4",{id:"input-descriptions"},"Input descriptions"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"genome_source"),(0,i.kt)("td",{parentName:"tr",align:null},"Describes the source of the reference genome listed in the GTF file; used to name output files; can be set to \u201cNCBI\u201d or \u201cGENCODE\u201d."),(0,i.kt)("td",{parentName:"tr",align:null},"String")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"gtf_annotation_version"),(0,i.kt)("td",{parentName:"tr",align:null},"Version or release of the reference genome listed in the GTF file; used to name STAR output files; ex.\u201dM32\u201d, \u201c103\u201d."),(0,i.kt)("td",{parentName:"tr",align:null},"String")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"genome_build"),(0,i.kt)("td",{parentName:"tr",align:null},"Assembly accession (NCBI) or version (GENCODE) of the reference genome listed in the GTF file; used to name output files; ex. \u201cGRCm39\u201d, \u201cGCF_003339765.1\u201d."),(0,i.kt)("td",{parentName:"tr",align:null},"String")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"organism"),(0,i.kt)("td",{parentName:"tr",align:null},"Organism of the reference genome; used to name the output files; can be set to \u201cMacaque\u201d, \u201cMouse\u201d, \u201cHuman\u201d, or any other organism matching the reference genome."),(0,i.kt)("td",{parentName:"tr",align:null},"String")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"annotations_gtf"),(0,i.kt)("td",{parentName:"tr",align:null},"GTF file containing gene annotations; used to build the STAR reference files."),(0,i.kt)("td",{parentName:"tr",align:null},"File")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"genome_fa"),(0,i.kt)("td",{parentName:"tr",align:null},"Genome FASTA file used for building indices."),(0,i.kt)("td",{parentName:"tr",align:null},"File")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"biotypes"),(0,i.kt)("td",{parentName:"tr",align:null},"TSV file containing gene biotypes attributes to include in the modified GTF file; the first column contains the biotype and the second column contains \u201cY\u201d to include or \u201cN\u201d to exclude the biotype; ",(0,i.kt)("a",{parentName:"td",href:"https://www.gencodegenes.org/pages/biotypes.html"},"GENCODE biotypes")," are used for GENCODE references and RefSeq biotypes are used for NCBI references."),(0,i.kt)("td",{parentName:"tr",align:null},"File")))),(0,i.kt)("h2",{id:"buildindices-tasks-and-tools"},"BuildIndices tasks and tools"),(0,i.kt)("p",null,"Overall, the BuildIndices workflow:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Checks inputs, modifies reference files, and creates STAR index."),(0,i.kt)("li",{parentName:"ol"},"Calculates chromosome sizes."),(0,i.kt)("li",{parentName:"ol"},"Builds reference bundle for bwa.")),(0,i.kt)("p",null,"The tasks and tools used in the BuildIndices workflow are detailed in the table below. "),(0,i.kt)("p",null,"To see specific tool parameters, select the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/blob/master/pipelines/skylab/build_indices/BuildIndices.wdl"},"workflow WDL link"),"; then find the task and view the ",(0,i.kt)("inlineCode",{parentName:"p"},"command {}")," section of the task in the WDL script. To view or use the exact tool software, see the task's Docker image which is specified in the task WDL ",(0,i.kt)("inlineCode",{parentName:"p"},"# runtime values")," section as ",(0,i.kt)("inlineCode",{parentName:"p"},"docker: "),"."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Task name"),(0,i.kt)("th",{parentName:"tr",align:null},"Tool"),(0,i.kt)("th",{parentName:"tr",align:null},"Software"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"BuildStarSingleNucleus"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp-tools/blob/develop/3rd-party-tools/build-indices/modify_gtf.py"},"modify_gtf.py"),", STAR"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp-tools/tree/develop"},"warp-tools"),", ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/alexdobin/STAR"},"STAR")),(0,i.kt)("td",{parentName:"tr",align:null},"Checks that the input GTF file contains input genome source, genome build version, and annotation version with correct build source information, modifies files for the STAR aligner, and creates STAR index file.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CalculateChromosomeSizes"),(0,i.kt)("td",{parentName:"tr",align:null},"faidx"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"http://www.htslib.org/"},"Samtools")),(0,i.kt)("td",{parentName:"tr",align:null},"Reads the genome FASTA file to create a FASTA index file that contains the genome chromosome sizes.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"BuildBWAreference"),(0,i.kt)("td",{parentName:"tr",align:null},"index"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/bwa-mem2/bwa-mem2"},"bwa-mem2")),(0,i.kt)("td",{parentName:"tr",align:null},"Builds the reference bundle for the bwa aligner.")))),(0,i.kt)("h4",{id:"1-check-inputs-modify-reference-files-and-create-star-index-file"},"1. Check inputs, modify reference files, and create STAR index file"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Check inputs")),(0,i.kt)("p",null,"The BuildStarSingleNucleus task reads the input GTF file and verifies that the ",(0,i.kt)("inlineCode",{parentName:"p"},"genome_source"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"genome_build"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"gtf_annotation_version")," listed in the file match the input values provided to the pipeline."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Modify reference files and create STAR index")),(0,i.kt)("p",null,"The BuildStarSingleNucleus task uses a custom python script, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp-tools/blob/develop/3rd-party-tools/build-indices/modify_gtf.py"},(0,i.kt)("inlineCode",{parentName:"a"},"modify_gtf.py")),", and a list of biotypes (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp-tools/blob/develop/3rd-party-tools/build-indices/Biotypes.tsv"},"example"),") to filter the input GTF file for only the biotypes indicated in the list with the value \u201cY\u201d in the second column. The defaults in the custom code produce reference outputs that are similar to those built with 10x Genomics reference scripts."),(0,i.kt)("p",null,"The task uses the filtered GTF file and STAR ",(0,i.kt)("inlineCode",{parentName:"p"},"--runMode genomeGenerate")," to generate the index file for the STAR aligner. Outputs of the task include the modified GTF and compressed STAR index files."),(0,i.kt)("h4",{id:"2-calculates-chromosome-sizes"},"2. Calculates chromosome sizes"),(0,i.kt)("p",null,"The CalculateChromosomeSizes task uses Samtools to create and output a FASTA index file that contains the genome chromosome sizes, which can be used in downstream tools like SnapATAC2. "),(0,i.kt)("h4",{id:"3-builds-reference-bundle-for-bwa-mem2"},"3. Builds reference bundle for bwa-mem2"),(0,i.kt)("p",null,"The BuildBWAreference task uses the chromosome sizes file and bwa-mem2 to prepare the genome FASTA file for alignment and builds, compresses, and outputs the reference bundle for the bwa-mem2 aligner."),(0,i.kt)("h2",{id:"outputs"},"Outputs"),(0,i.kt)("p",null,"The following table lists the output variables and files produced by the pipeline."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Output name"),(0,i.kt)("th",{parentName:"tr",align:null},"Filename, if applicable"),(0,i.kt)("th",{parentName:"tr",align:null},"Output format and description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"snSS2_star_index"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"modified_star2.7.10a-<organism>-<genome_source>-build-<genome_build>-<gtf_annotation_version>.tar")),(0,i.kt)("td",{parentName:"tr",align:null},"TAR file containing a species-specific reference genome and GTF file for ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/alexdobin/STAR"},"STAR")," alignment.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"pipeline_version_out"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"BuildIndices_v<pipeline_version>")),(0,i.kt)("td",{parentName:"tr",align:null},"String describing the version of the BuildIndices pipeline used.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"snSS2_annotation_gtf_modified"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"modified_v<gtf_annotation_version>.annotation.gtf")),(0,i.kt)("td",{parentName:"tr",align:null},"GTF file containing gene annotations filtered for selected biotypes.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"reference_bundle"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"bwa-mem2-2.2.1-<organism>-<genome_source>-build-<genome_build>.tar")),(0,i.kt)("td",{parentName:"tr",align:null},"TAR file containing the reference index files for ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/lh3/bwa"},"BWA-mem")," alignment.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"chromosome_sizes"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"chrom.sizes")),(0,i.kt)("td",{parentName:"tr",align:null},"Text file containing chromosome sizes for the genome build.")))),(0,i.kt)("h2",{id:"versioning-and-testing"},"Versioning and testing"),(0,i.kt)("p",null,"All BuildIndices pipeline releases are documented in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/blob/master/pipelines/skylab/build_indices/BuildIndices.changelog.md"},"BuildIndices changelog")," and tested manually using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/tree/master/pipelines/skylab/build_indices"},"reference JSON files"),"."),(0,i.kt)("h2",{id:"citing-the-buildindices-pipeline"},"Citing the BuildIndices Pipeline"),(0,i.kt)("p",null,"If you use the BuildIndices Pipeline in your research, please consider citing our preprint:"),(0,i.kt)("p",null,"Degatano, K.; Awdeh, A.; Dingman, W.; Grant, G.; Khajouei, F.; Kiernan, E.; Konwar, K.; Mathews, K.; Palis, K.; Petrillo, N.; Van der Auwera, G.; Wang, C.; Way, J.; Pipelines, W. WDL Analysis Research Pipelines: Cloud-Optimized Workflows for Biological Data Processing and Reproducible Analysis. Preprints 2024, 2024012131. ",(0,i.kt)("a",{parentName:"p",href:"https://doi.org/10.20944/preprints202401.2131.v1"},"https://doi.org/10.20944/preprints202401.2131.v1")),(0,i.kt)("h2",{id:"consortia-support"},"Consortia support"),(0,i.kt)("p",null,"This pipeline is supported by the ",(0,i.kt)("a",{parentName:"p",href:"https://braininitiative.nih.gov/"},"BRAIN Initiative")," (BICCN and BICAN). "),(0,i.kt)("p",null,"If your organization also uses this pipeline, we would like to list you! Please reach out to us by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/issues"},"filing an issue in WARP"),"."),(0,i.kt)("h2",{id:"feedback"},"Feedback"),(0,i.kt)("p",null,"Please help us make our tools better by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/issues"},"filing an issue in WARP")," for pipeline-related suggestions or questions."))}m.isMDXComponent=!0},4563:function(e,t,n){t.Z=n.p+"assets/images/buildindices_diagram-df706c5e53b274ea9d451efd93ce1c0e.png"}}]);
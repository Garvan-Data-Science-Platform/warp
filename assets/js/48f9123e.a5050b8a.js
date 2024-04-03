"use strict";(self.webpackChunkwebsite_2=self.webpackChunkwebsite_2||[]).push([[7905],{3905:function(e,t,i){i.d(t,{Zo:function(){return d},kt:function(){return g}});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(i),u=a,g=p["".concat(s,".").concat(u)]||p[u]||m[u]||r;return i?n.createElement(g,l(l({ref:t},d),{},{components:i})):n.createElement(g,l({ref:t},d))}));function g(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,l=new Array(r);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<r;c++)l[c]=i[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},2459:function(e,t,i){i.r(t),i.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return r},metadata:function(){return o},toc:function(){return c}});var n=i(3117),a=(i(7294),i(3905));const r={sidebar_position:2},l="Exome Germline Single Sample v3.1.19 Methods",o={unversionedId:"Pipelines/Exome_Germline_Single_Sample_Pipeline/exome.methods",id:"Pipelines/Exome_Germline_Single_Sample_Pipeline/exome.methods",title:"Exome Germline Single Sample v3.1.19 Methods",description:"The following contains a detailed methods description outlining the pipeline\u2019s process, software, and tools that can be modified for a publication methods section.",source:"@site/docs/Pipelines/Exome_Germline_Single_Sample_Pipeline/exome.methods.md",sourceDirName:"Pipelines/Exome_Germline_Single_Sample_Pipeline",slug:"/Pipelines/Exome_Germline_Single_Sample_Pipeline/exome.methods",permalink:"/warp/docs/Pipelines/Exome_Germline_Single_Sample_Pipeline/exome.methods",draft:!1,editUrl:"https://github.com/broadinstitute/warp/edit/develop/website/docs/Pipelines/Exome_Germline_Single_Sample_Pipeline/exome.methods.md",tags:[],version:"current",lastUpdatedBy:"meganshand",lastUpdatedAt:1712170553,formattedLastUpdatedAt:"Apr 3, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Exome Germline Single Sample Overview",permalink:"/warp/docs/Pipelines/Exome_Germline_Single_Sample_Pipeline/README"},next:{title:"Genomic Data Commons (GDC) Whole Genome Somatic Single Sample Overview",permalink:"/warp/docs/Pipelines/Genomic_Data_Commons_Whole_Genome_Somatic/README"}},s={},c=[{value:"Detailed Methods",id:"detailed-methods",level:2},{value:"Pre-processing and QC",id:"pre-processing-and-qc",level:3},{value:"Variant Calling",id:"variant-calling",level:3},{value:"Previous methods documents",id:"previous-methods-documents",level:2}],d={toc:c},p="wrapper";function m(e){let{components:t,...i}=e;return(0,a.kt)(p,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"exome-germline-single-sample-v3119-methods"},"Exome Germline Single Sample v3.1.19 Methods"),(0,a.kt)("p",null,"The following contains a detailed methods description outlining the pipeline\u2019s process, software, and tools that can be modified for a publication methods section."),(0,a.kt)("h2",{id:"detailed-methods"},"Detailed Methods"),(0,a.kt)("p",null,"Preprocessing and variant calling was performed using the ExomeGermlineSingleSample 3.1.19 pipeline using Picard 2.26.10, GATK 4.5.0.0, and Samtools 1.11 with default tool parameters unless otherwise specified. All reference files are available in the public ",(0,a.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/storage/browser/gcp-public-data--broad-references/hg38/v0"},"Broad References Google Bucket"),". The pipeline follows GATK Best Practices as previously described (",(0,a.kt)("a",{parentName:"p",href:"https://www.oreilly.com/library/view/genomics-in-the/9781491975183/"},"Van der Auwera & O'Connor, 2020"),") as well as the Functional Equivalence specification (",(0,a.kt)("a",{parentName:"p",href:"https://www.nature.com/articles/s41467-018-06159-4"},"Regier et al., 2018"),")."),(0,a.kt)("h3",{id:"pre-processing-and-qc"},"Pre-processing and QC"),(0,a.kt)("p",null,'Exome paired-end reads in unmapped BAM (uBAM) format were first scattered to perform QC and alignment in parallel. Quality metrics were calculated using Picard CollectQualityYieldMetrics. uBAMs were converted to FASTQ using Picard SamToFastq and aligned to the Hg38 reference genome using BWA mem 0.7.15 with batch size set using -K 100000000. Metadata from the uBAMs was then merged with the aligned BAMs using Picard MergeBamAlignment with the parameters --SORT_ORDER="unsorted", allowing the data to be grouped by read name for efficient downstream marking of duplicates, and --UNMAP_CONTAMINANT_READS=true, to remove cross-species contamination.'),(0,a.kt)("p",null,"QC metrics (base distribution by cycle, insert size metrics, mean quality by cycle, and quality score distribution) were collected for the aligned, unsorted read-groups using Picard CollectMultipleMetrics. The read-group specific aligned BAMs were then aggregated and duplicate reads were flagged using Picard MarkDuplicates assuming queryname-sorted order and the parameter --OPTICAL_DUPLICATE_PIXEL_DISTANCE=2500, which is appropriate for patterned flowcells."),(0,a.kt)("p",null,"The aggregated BAM file was then sorted using Picard SortSam with coordinate sort order. The fingerprints of separate read groups were verified using Picard CrosscheckFingerprints (",(0,a.kt)("a",{parentName:"p",href:"https://www.nature.com/articles/s41467-020-17453-5"},"Javed et al., 2020"),") with a LOD threshold of -10. Cross-sample contamination was checked using verifyBamID2, using resources which had been subset to the exome target intervals."),(0,a.kt)("p",null,"The aligned BAM was then scattered for parallelization during base recalibration. A Base Quality Score Recalibration (BQSR) table was created with GATK BaseRecalibrator using the original base qualities (under the OQ Sam tag). The model was applied using ApplyBQSR with the static-quantized-quals option used according to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/CCDG/Pipeline-Standardization/blob/master/PipelineStandard.md"},"Functional Equivalence specification")," (",(0,a.kt)("a",{parentName:"p",href:"https://www.nature.com/articles/s41467-018-06159-4"},"Regier et al., 2018"),"). Recalibrated BAM files were then merged using Picard GatherBamFiles."),(0,a.kt)("p",null,"QC metrics were calculated for the base-recalibrated BAM using interval and baits lists with Picard CollectHsMetrics. Fingerprints were verified using Picard CheckFingerprint and high duplication levels and chimerism were checked using the calculated summary metrics."),(0,a.kt)("p",null,"The final base-recalibrated BAM was converted to CRAM using Samtools view and validated using Picard ValidateSamFile."),(0,a.kt)("h3",{id:"variant-calling"},"Variant Calling"),(0,a.kt)("p",null,"Prior to variant calling, the variant calling interval list was split to enable parallelization. Variant calling was performed using GATK HaplotypeCaller with the annotation parameters -G StandardAnnotation -G StandardHCAnnotation and -G AS_StandardAnnotation. Reference block genotype quality (GQ) bands were set using  -GQB 10 -GQB 20 -GQB 30 -GQB 40 -GQB 50 -GQB 60 -GQB 70 -GQB 80 -GQB 90. The resulting GVCFs were merged using Picard MergeVcfs and reblocked using GATK ReblockGVCF with -GQB 20 -GQB 30 -GQB 40. The final reblocked GVCF file was validated using GATK ValidateVariants. Variant metrics were calculated using Picard CollectVariantCallingMetrics."),(0,a.kt)("p",null,"The pipeline\u2019s final outputs included metrics, the ValidateSamFile validation reports, an aligned CRAM with index, and a reblocked GVCF containing variant calls with an accompanying index."),(0,a.kt)("h2",{id:"previous-methods-documents"},"Previous methods documents"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/broadinstitute/warp/blob/ExomeGermlineSingleSample_v3.0.0/website/docs/Pipelines/Exome_Germline_Single_Sample_Pipeline/exome.methods.md"},"ExomeGermlineSingleSample_v3.0.0")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/broadinstitute/warp/blob/ExomeGermlineSingleSample_v2.6.0/website/docs/Pipelines/Exome_Germline_Single_Sample_Pipeline/exome.methods.md"},"ExomeGermlineSingleSample_v2.4.4"))))}m.isMDXComponent=!0}}]);
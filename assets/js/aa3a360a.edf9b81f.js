"use strict";(self.webpackChunkwebsite_2=self.webpackChunkwebsite_2||[]).push([[682],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return g}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=d(a),c=r,g=m["".concat(p,".").concat(c)]||m[c]||u[c]||i;return a?n.createElement(g,l(l({ref:t},s),{},{components:a})):n.createElement(g,l({ref:t},s))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6172:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return d}});var n=a(3117),r=(a(7294),a(3905));const i={sidebar_position:1,slug:"/Pipelines/Multiome_Pipeline/README"},l="Multiome Overview",o={unversionedId:"Pipelines/Multiome_Pipeline/README",id:"Pipelines/Multiome_Pipeline/README",title:"Multiome Overview",description:"| Pipeline Version | Date Updated | Documentation Author | Questions or Feedback |",source:"@site/docs/Pipelines/Multiome_Pipeline/README.md",sourceDirName:"Pipelines/Multiome_Pipeline",slug:"/Pipelines/Multiome_Pipeline/README",permalink:"/warp/docs/Pipelines/Multiome_Pipeline/README",draft:!1,editUrl:"https://github.com/broadinstitute/warp/edit/develop/website/docs/Pipelines/Multiome_Pipeline/README.md",tags:[],version:"current",lastUpdatedBy:"ekiernan",lastUpdatedAt:1696964481,formattedLastUpdatedAt:"Oct 10, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/Pipelines/Multiome_Pipeline/README"},sidebar:"docsSidebar",previous:{title:"Creating the Imputation Pipeline's Modified 1000 Genomes Reference",permalink:"/warp/docs/Pipelines/Imputation_Pipeline/references_overview"},next:{title:"Optimus Overview",permalink:"/warp/docs/Pipelines/Optimus_Pipeline/README"}},p={},d=[{value:"Introduction to the Multiome workflow",id:"introduction-to-the-multiome-workflow",level:2},{value:"Quickstart table",id:"quickstart-table",level:2},{value:"Set-up",id:"set-up",level:2},{value:"Multiome installation",id:"multiome-installation",level:3},{value:"Inputs",id:"inputs",level:2},{value:"Tasks",id:"tasks",level:2},{value:"Outputs",id:"outputs",level:2},{value:"Versioning and testing",id:"versioning-and-testing",level:2},{value:"Citing the Multiome Pipeline",id:"citing-the-multiome-pipeline",level:2},{value:"Consortia support",id:"consortia-support",level:2},{value:"Acknowledgements",id:"acknowledgements",level:2},{value:"Feedback",id:"feedback",level:2}],s={toc:d},m="wrapper";function u(e){let{components:t,...i}=e;return(0,r.kt)(m,(0,n.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"multiome-overview"},"Multiome Overview"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Pipeline Version"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Date Updated"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Documentation Author"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Questions or Feedback"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp/releases"},"Multiome v2.2.0")),(0,r.kt)("td",{parentName:"tr",align:"center"},"October, 2023"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Kaylee Mathews"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Please file GitHub issues in warp or contact the ",(0,r.kt)("a",{parentName:"td",href:"mailto:warp-pipelines-help@broadinstitute.org"},"WARP Pipeline Development team"))))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Multiome_diagram",src:a(7251).Z,width:"1099",height:"1984"})),(0,r.kt)("h2",{id:"introduction-to-the-multiome-workflow"},"Introduction to the Multiome workflow"),(0,r.kt)("p",null,"Multiome is an open-source, cloud-optimized pipeline developed in collaboration with members of the ",(0,r.kt)("a",{parentName:"p",href:"https://braininitiative.nih.gov/"},"BRAIN Initiative")," (BICCN and ",(0,r.kt)("a",{parentName:"p",href:"https://brainblog.nih.gov/brain-blog/brain-issues-suite-funding-opportunities-advance-brain-cell-atlases-through-centers"},"BICAN")," Sequencing Working Group) and ",(0,r.kt)("a",{parentName:"p",href:"https://nida.nih.gov/about-nida/organization/divisions/division-neuroscience-behavior-dnb/basic-research-hiv-substance-use-disorder/scorch-program"},"SCORCH")," (see ",(0,r.kt)("a",{parentName:"p",href:"#acknowledgements"},"Acknowledgements")," below). It supports the processing of 10x 3' single-cell and single-nucleus gene expression (GEX) and chromatin accessibility (ATAC) data generated with the ",(0,r.kt)("a",{parentName:"p",href:"https://www.10xgenomics.com/products/single-cell-multiome-atac-plus-gene-expression"},"10x Genomics Multiome assay"),"."),(0,r.kt)("p",null,"The workflow is a wrapper WDL script that calls two subworkflows: the ",(0,r.kt)("a",{parentName:"p",href:"../Optimus_Pipeline/README"},"Optimus workflow")," for single-cell GEX data and the ",(0,r.kt)("a",{parentName:"p",href:"../ATAC/README"},"ATAC workflow")," for single-cell ATAC data. "),(0,r.kt)("p",null,"The GEX component corrects cell barcodes (CBs) and Unique Molecular Identifiers (UMIs), aligns reads to the genome, calculates per-barcode and per-gene quality metrics, and produces a raw cell-by-gene count matrix. "),(0,r.kt)("p",null,"The ATAC component corrects CBs, aligns reads to the genome, calculates per-barcode quality metrics, and produces a fragment file."),(0,r.kt)("p",null,"The wrapper WDL is available in the WARP repository (see the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/blob/develop/pipelines/skylab/multiome/Multiome.wdl"},"code here"),")."),(0,r.kt)("h2",{id:"quickstart-table"},"Quickstart table"),(0,r.kt)("p",null,"The following table provides a quick glance at the Multiome pipeline features:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Pipeline features"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Source"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Assay type"),(0,r.kt)("td",{parentName:"tr",align:null},"10x single cell or single nucleus gene expression (GEX) and ATAC"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.10xgenomics.com"},"10x Genomics"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Overall workflow"),(0,r.kt)("td",{parentName:"tr",align:null},"Barcode correction, read alignment, gene and fragment quanitification"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Workflow language"),(0,r.kt)("td",{parentName:"tr",align:null},"WDL 1.0"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/openwdl/wdl"},"openWDL"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Genomic Reference Sequence"),(0,r.kt)("td",{parentName:"tr",align:null},"GRCh38 human genome primary sequence"),(0,r.kt)("td",{parentName:"tr",align:null},"GENCODE ",(0,r.kt)("a",{parentName:"td",href:"https://www.gencodegenes.org/human/release_43.html"},"human reference files"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Gene annotation reference (GTF)"),(0,r.kt)("td",{parentName:"tr",align:null},"Reference containing gene annotations"),(0,r.kt)("td",{parentName:"tr",align:null},"GENCODE ",(0,r.kt)("a",{parentName:"td",href:"https://ftp.ebi.ac.uk/pub/databases/gencode/Gencode_human/release_43/gencode.v43.annotation.gtf.gz"},"human GTF"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Aligners"),(0,r.kt)("td",{parentName:"tr",align:null},"STARsolo (GEX), BWA-mem2 (ATAC)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.biorxiv.org/content/10.1101/2021.05.05.442755v1"},"Kaminow et al. 2021"),", ",(0,r.kt)("a",{parentName:"td",href:"https://ieeexplore.ieee.org/document/8820962"},"Vasimuddin et al. 2019"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Transcript and fragment quantification"),(0,r.kt)("td",{parentName:"tr",align:null},"STARsolo (GEX), SnapATAC2 (ATAC)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.biorxiv.org/content/10.1101/2021.05.05.442755v1"},"Kaminow et al. 2021"),", ",(0,r.kt)("a",{parentName:"td",href:"https://kzhang.org/SnapATAC2/"},"SnapATAC2"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Data input file format"),(0,r.kt)("td",{parentName:"tr",align:null},"File format in which sequencing data is provided"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://academic.oup.com/nar/article/38/6/1767/3112533"},"FASTQ"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Data output file format"),(0,r.kt)("td",{parentName:"tr",align:null},"File formats in which Multiome output is provided"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://samtools.github.io/hts-specs/"},"BAM")," and ",(0,r.kt)("a",{parentName:"td",href:"https://anndata.readthedocs.io/en/latest/"},"h5ad"))))),(0,r.kt)("h2",{id:"set-up"},"Set-up"),(0,r.kt)("h3",{id:"multiome-installation"},"Multiome installation"),(0,r.kt)("p",null,'To download the latest Multiome release, see the release tags prefixed with "Multiome" on the WARP ',(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/releases"},"releases page"),". All Multiome pipeline releases are documented in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/blob/develop/pipelines/skylab/multiome/Multiome.changelog.md"},"Multiome changelog"),". "),(0,r.kt)("p",null,"To discover and search releases, use the WARP command-line tool ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/tree/master/wreleaser"},"Wreleaser"),"."),(0,r.kt)("p",null,"If you\u2019re running a Multiome workflow version prior to the latest release, the accompanying documentation for that release may be downloaded with the source code on the WARP ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/releases"},"releases page")," (see the source code folder)."),(0,r.kt)("p",null,"Multiome can be deployed using ",(0,r.kt)("a",{parentName:"p",href:"https://cromwell.readthedocs.io/en/stable/"},"Cromwell"),", a GA4GH compliant, flexible workflow management system that supports multiple computing platforms. The workflow can also be run in ",(0,r.kt)("a",{parentName:"p",href:"https://app.terra.bio"},"Terra"),", a cloud-based analysis platform. "),(0,r.kt)("h2",{id:"inputs"},"Inputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Input name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"input_id"),(0,r.kt)("td",{parentName:"tr",align:null},"Unique identifier describing the biological sample or replicate that corresponds with the FASTQ files; can be a human-readable name or UUID."),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"annotations_gtf"),(0,r.kt)("td",{parentName:"tr",align:null},"GTF file containing gene annotations used for GEX cell metric calculation and ATAC fragment metrics; must match the GTF used to build the STAR aligner."),(0,r.kt)("td",{parentName:"tr",align:null},"File")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gex_r1_fastq"),(0,r.kt)("td",{parentName:"tr",align:null},"Array of read 1 FASTQ files representing a single GEX 10x library."),(0,r.kt)("td",{parentName:"tr",align:null},"Array","[File]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gex_r2_fastq"),(0,r.kt)("td",{parentName:"tr",align:null},"Array of read 2 FASTQ files representing a single GEX 10x library."),(0,r.kt)("td",{parentName:"tr",align:null},"Array","[File]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gex_i1_fastq"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional array of index FASTQ files representing a single GEX 10x library; multiplexed samples are not currently supported, but the file may be passed to the pipeline."),(0,r.kt)("td",{parentName:"tr",align:null},"Array","[File]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tar_star_reference"),(0,r.kt)("td",{parentName:"tr",align:null},"TAR file containing a species-specific reference genome and GTF for Optimus (GEX) pipeline."),(0,r.kt)("td",{parentName:"tr",align:null},"File")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ref_genome_fasta"),(0,r.kt)("td",{parentName:"tr",align:null},"Genome FASTA file used for building the indices."),(0,r.kt)("td",{parentName:"tr",align:null},"File")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mt_genes"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional file for the Optimus (GEX) pipeline containing mitochondrial gene names used for metric calculation; default assumes 'mt' prefix in GTF (case insensitive)."),(0,r.kt)("td",{parentName:"tr",align:null},"File")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"counting_mode"),(0,r.kt)("td",{parentName:"tr",align:null},'Optional string that determines whether the Optimus (GEX) pipeline should be run in single-cell mode (sc_rna) or single-nucleus mode (sn_rna); default is "sn_rna".'),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tenx_chemistry_version"),(0,r.kt)("td",{parentName:"tr",align:null},'Optional integer for the Optimus (GEX) pipeline specifying the 10x version chemistry the data was generated with; validated by examination of the first read 1 FASTQ file read structure; default is "3".'),(0,r.kt)("td",{parentName:"tr",align:null},"Integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"emptydrops_lower"),(0,r.kt)("td",{parentName:"tr",align:null},'Optional threshold for UMIs for the Optimus (GEX) pipeline that empty drops tool should consider for determining cell; data below threshold is not removed; default is "100".'),(0,r.kt)("td",{parentName:"tr",align:null},"Integer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"force_no_check"),(0,r.kt)("td",{parentName:"tr",align:null},'Optional boolean for the Optimus (GEX) pipeline indicating if the pipeline should perform checks; default is "false".'),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ignore_r1_read_length"),(0,r.kt)("td",{parentName:"tr",align:null},'Optional boolean for the Optimus (GEX) pipeline indicating if the pipeline should ignore barcode chemistry check; if "true", the workflow will not ensure the ',(0,r.kt)("inlineCode",{parentName:"td"},"10x_chemistry_version"),' input matches the chemistry in the read 1 FASTQ; default is "false".'),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"star_strand_mode"),(0,r.kt)("td",{parentName:"tr",align:null},'Optional string for the Optimus (GEX) pipeline for performing STARsolo alignment on forward stranded, reverse stranded, or unstranded data; default is "Forward".'),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"count_exons"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional boolean for the Optimus (GEX) pipeline indicating if the workflow should calculate exon counts ",(0,r.kt)("strong",{parentName:"td"},"when in single-nucleus (sn_rna) mode"),'; if "true" in sc_rna mode, the workflow will return an error; default is "false".'),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gex_whitelist"),(0,r.kt)("td",{parentName:"tr",align:null},'Optional file containing the list of valid barcodes for 10x multiome GEX data; default is "gs://broad-gotc-test-storage/Multiome/input/737K-arc-v1_gex.txt".'),(0,r.kt)("td",{parentName:"tr",align:null},"File")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"atac_r1_fastq"),(0,r.kt)("td",{parentName:"tr",align:null},"Array of read 1 paired-end FASTQ files representing a single 10x multiome ATAC library."),(0,r.kt)("td",{parentName:"tr",align:null},"Array","[File]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"atac_r2_fastq"),(0,r.kt)("td",{parentName:"tr",align:null},"Array of barcodes FASTQ files representing a single 10x multiome ATAC library."),(0,r.kt)("td",{parentName:"tr",align:null},"Array","[File]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"atac_r3_fastq"),(0,r.kt)("td",{parentName:"tr",align:null},"Array of read 2 paired-end FASTQ files representing a single 10x multiome ATAC library."),(0,r.kt)("td",{parentName:"tr",align:null},"Array","[File]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tar_bwa_reference"),(0,r.kt)("td",{parentName:"tr",align:null},"TAR file containing the reference index files for BWA-mem alignment for the ATAC pipeline ."),(0,r.kt)("td",{parentName:"tr",align:null},"File")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"chrom_sizes"),(0,r.kt)("td",{parentName:"tr",align:null},"File containing the genome chromosome sizes; used to calculate ATAC fragment file metrics."),(0,r.kt)("td",{parentName:"tr",align:null},"File")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"adapter_seq_read1"),(0,r.kt)("td",{parentName:"tr",align:null},'Optional string describing the adapter sequence for ATAC read 1 paired-end reads to be used during adapter trimming with Cutadapt; default is "GTCTCGTGGGCTCGGAGATGTGTATAAGAGACAG".'),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"adapter_seq_read3"),(0,r.kt)("td",{parentName:"tr",align:null},'Optional string describing the adapter sequence for ATAC read 2 paired-end reads to be used during adapter trimming with Cutadapt; default is "TCGTCGGCAGCGTCAGATGTGTATAAGAGACAG".'),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"atac_whitelist"),(0,r.kt)("td",{parentName:"tr",align:null},'Optional file containing the list of valid barcodes for 10x multiome ATAC adata; default is "gs://broad-gotc-test-storage/Multiome/input/737K-arc-v1_atac.txt".'),(0,r.kt)("td",{parentName:"tr",align:null},"File")))),(0,r.kt)("h2",{id:"tasks"},"Tasks"),(0,r.kt)("p",null,"The Multiome workflow calls two subworkflows, which are described briefly in the table below. For more details on each subworkflow, including the tasks that they call, see the documentation linked in the table."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Subworkflow"),(0,r.kt)("th",{parentName:"tr",align:null},"Software"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ATAC (",(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp/blob/develop/pipelines/skylab/multiome/atac.wdl"},"WDL")," and ",(0,r.kt)("a",{parentName:"td",href:"../ATAC/README"},"documentation"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"fastqprocess, bwa-mem, SnapATAC2"),(0,r.kt)("td",{parentName:"tr",align:null},"Workflow used to analyze 10x single-cell ATAC data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Optimus (",(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp/blob/develop/pipelines/skylab/optimus/Optimus.wdl"},"WDL")," and ",(0,r.kt)("a",{parentName:"td",href:"../Optimus_Pipeline/README"},"documentation"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"fastqprocess, STARsolo, Emptydrops"),(0,r.kt)("td",{parentName:"tr",align:null},"Workflow used to analyze 10x single-cell GEX data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"JoinMultiomeBarcodes as JoinBarcodes (",(0,r.kt)("a",{parentName:"td",href:"https://github.com/broadinstitute/warp/blob/develop/tasks/skylab/H5adUtils.wdl"},"WDL"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"Python3"),(0,r.kt)("td",{parentName:"tr",align:null},"Task that adds an extra column to the Optimus metrics ",(0,r.kt)("inlineCode",{parentName:"td"},"h5ad.obs")," property that lists the respective ATAC barcodes for each gene expression barcode. It also adds an extra column to the ATAC metrics ",(0,r.kt)("inlineCode",{parentName:"td"},"h5ad.obs")," property to link ATAC barcodes to gene expression barcodes.")))),(0,r.kt)("h2",{id:"outputs"},"Outputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Output variable name"),(0,r.kt)("th",{parentName:"tr",align:null},"Filename, if applicable"),(0,r.kt)("th",{parentName:"tr",align:null},"Output format and description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bam_aligned_output_atac"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<input_id>_atac.bam")),(0,r.kt)("td",{parentName:"tr",align:null},"BAM file containing aligned reads from ATAC workflow.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fragment_file_atac"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<input_id>_atac.fragments.tsv")),(0,r.kt)("td",{parentName:"tr",align:null},"TSV file containing fragment start and stop coordinates per barcode.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"snap_metrics_atac"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<input_id>_atac.metrics.h5ad")),(0,r.kt)("td",{parentName:"tr",align:null},"h5ad (Anndata) file containing per-barcode metrics from SnapATAC2. Also contains the equivalent gene expression barcode for each ATAC barcode.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pipeline_version_out"),(0,r.kt)("td",{parentName:"tr",align:null},"N.A."),(0,r.kt)("td",{parentName:"tr",align:null},"String describing the Optimus pipeline version used.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"genomic_reference_version_gex"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<reference_version>.txt")),(0,r.kt)("td",{parentName:"tr",align:null},"File containing the Genome build, source and GTF annotation version.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bam_gex"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<input_id>_gex.bam")),(0,r.kt)("td",{parentName:"tr",align:null},"BAM file containing aligned reads from Optimus workflow.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"matrix_gex"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<input_id>_gex_sparse_counts.npz")),(0,r.kt)("td",{parentName:"tr",align:null},"NPZ file containing raw gene by cell counts.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"matrix_row_index_gex"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<input_id>_gex_sparse_counts_row_index.npy")),(0,r.kt)("td",{parentName:"tr",align:null},"NPY file containing the row indices.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"matrix_col_index_gex"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<input_id>_gex_sparse_counts_col_index.npy")),(0,r.kt)("td",{parentName:"tr",align:null},"NPY file containing the column indices.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cell_metrics_gex"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<input_id>_gex.cell_metrics.csv.gz")),(0,r.kt)("td",{parentName:"tr",align:null},"CSV file containing the per-cell (barcode) metrics.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gene_metrics_gex"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<input_id>_gex.gene_metrics.csv.gz")),(0,r.kt)("td",{parentName:"tr",align:null},"CSV file containing the per-gene metrics.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cell_calls_gex"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<input_id>_gex.emptyDrops")),(0,r.kt)("td",{parentName:"tr",align:null},"TSV file containing the EmptyDrops results when the Optimus workflow is run in sc_rna mode.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"h5ad_output_file_gex"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<input_id>_gex.h5ad")),(0,r.kt)("td",{parentName:"tr",align:null},"h5ad (Anndata) file containing the raw cell-by-gene count matrix, gene metrics, cell metrics, and global attributes. Also contains equivalent ATAC barcode for each gene expression barcode.")))),(0,r.kt)("h2",{id:"versioning-and-testing"},"Versioning and testing"),(0,r.kt)("p",null,"All Multiome pipeline releases are documented in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/blob/develop/pipelines/skylab/multiome/Multiome.changelog.md"},"Multiome changelog")," and tested using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/tree/master/pipelines/skylab/multiome/test_inputs"},"plumbing and scientific test data"),". To learn more about WARP pipeline testing, see ",(0,r.kt)("a",{parentName:"p",href:"https://broadinstitute.github.io/warp/docs/About_WARP/TestingPipelines"},"Testing Pipelines"),"."),(0,r.kt)("h2",{id:"citing-the-multiome-pipeline"},"Citing the Multiome Pipeline"),(0,r.kt)("p",null,"Please identify the pipeline in your methods section using the Multiome Pipeline's ",(0,r.kt)("a",{parentName:"p",href:"https://scicrunch.org/resources/data/record/nlx_144509-1/SCR_024217/resolver?q=SCR_024217&l=SCR_024217&i=rrid:scr_024217"},"SciCrunch resource identifier"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ex: ",(0,r.kt)("em",{parentName:"li"},"Multiome Pipeline (RRID:SCR_024217)"))),(0,r.kt)("h2",{id:"consortia-support"},"Consortia support"),(0,r.kt)("p",null,"This pipeline is supported by the ",(0,r.kt)("a",{parentName:"p",href:"https://braininitiative.nih.gov/"},"BRAIN Initiative")," (BICCN and BICAN). "),(0,r.kt)("p",null,"If your organization also uses this pipeline, we would like to list you! Please reach out to us by contacting the ",(0,r.kt)("a",{parentName:"p",href:"mailto:warp-pipelines-help@broadinstitute.org"},"WARP Pipeline Development team"),"."),(0,r.kt)("h2",{id:"acknowledgements"},"Acknowledgements"),(0,r.kt)("p",null,"We are immensely grateful to the members of the BRAIN Initiative (BICAN Sequencing Working Group) and SCORCH for their invaluable and exceptional contributions to this pipeline. Our heartfelt appreciation goes to Alex Dobin, Aparna Bhaduri, Alec Wysoker, Anish Chakka, Brian Herb, Daofeng Li, Fenna Krienen, Guo-Long Zuo, Jeff Goldy, Kai Zhang, Khalid Shakir, Bo Li, Mariano Gabitto, Michael DeBerardine, Mengyi Song, Melissa Goldman, Nelson Johansen, James Nemesh, and Theresa Hodges for their unwavering dedication and remarkable efforts. "),(0,r.kt)("h2",{id:"feedback"},"Feedback"),(0,r.kt)("p",null,"Please help us make our tools better by contacting the ",(0,r.kt)("a",{parentName:"p",href:"mailto:warp-pipelines-help@broadinstitute.org"},"WARP Pipeline Development team")," for pipeline-related suggestions or questions."))}u.isMDXComponent=!0},7251:function(e,t,a){t.Z=a.p+"assets/images/multiome_diagram-9f63b411312ab30ae8d54dca539a30fa.png"}}]);
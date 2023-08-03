"use strict";(self.webpackChunkwebsite_2=self.webpackChunkwebsite_2||[]).push([[8121],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=s(a),u=r,h=p["".concat(d,".").concat(u)]||p[u]||c[u]||i;return a?n.createElement(h,l(l({ref:t},m),{},{components:a})):n.createElement(h,l({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4193:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return s}});var n=a(3117),r=(a(7294),a(3905));const i={sidebar_position:2},l="Slide-seq Count Matrix Overview",o={unversionedId:"Pipelines/SlideSeq_Pipeline/count-matrix-overview",id:"Pipelines/SlideSeq_Pipeline/count-matrix-overview",title:"Slide-seq Count Matrix Overview",description:"The Slide-seq pipeline's default count matrix output is a Loom file generated using Loompy v.3.0.6.",source:"@site/docs/Pipelines/SlideSeq_Pipeline/count-matrix-overview.md",sourceDirName:"Pipelines/SlideSeq_Pipeline",slug:"/Pipelines/SlideSeq_Pipeline/count-matrix-overview",permalink:"/warp/docs/Pipelines/SlideSeq_Pipeline/count-matrix-overview",draft:!1,editUrl:"https://github.com/broadinstitute/warp/edit/develop/website/docs/Pipelines/SlideSeq_Pipeline/count-matrix-overview.md",tags:[],version:"current",lastUpdatedBy:"ekiernan",lastUpdatedAt:1691071177,formattedLastUpdatedAt:"Aug 3, 2023",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Slide-seq Overview",permalink:"/warp/docs/Pipelines/SlideSeq_Pipeline/README"},next:{title:"Smart-seq2 Single Nucleus Multi-Sample Overview",permalink:"/warp/docs/Pipelines/Smart-seq2_Single_Nucleus_Multi_Sample_Pipeline/README"}},d={},s=[{value:"Table 1. Global attributes",id:"table-1-global-attributes",level:2},{value:"Table 2. Column attributes (bead barcode metrics)",id:"table-2-column-attributes-bead-barcode-metrics",level:2},{value:"Table 3. Row attributes (gene metrics)",id:"table-3-row-attributes-gene-metrics",level:2}],m={toc:s},p="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"slide-seq-count-matrix-overview"},"Slide-seq Count Matrix Overview"),(0,r.kt)("p",null,"The Slide-seq pipeline's default count matrix output is a Loom file generated using ",(0,r.kt)("a",{parentName:"p",href:"http://loompy.org/"},"Loompy v.3.0.6"),". "),(0,r.kt)("p",null,"It contains the raw bead-by-gene counts, which vary depending on the workflow's ",(0,r.kt)("inlineCode",{parentName:"p"},"count_exons")," parameter. By default, ",(0,r.kt)("inlineCode",{parentName:"p"},"count_exons")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," and the output Loom will contain whole-gene counts with exon counts in an additional layer. "),(0,r.kt)("p",null,"If the workflow is run with ",(0,r.kt)("inlineCode",{parentName:"p"},"count_exons")," set to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", the output Loom file will contain whole-gene counts. Running the workflow in this configuration will cause the Loom matrix to have fewer columns (bead barcodes) due to the difference in STARsolo counting mode."),(0,r.kt)("p",null,"You can determine which type of counts are in the Loom by looking at the global attribute ",(0,r.kt)("inlineCode",{parentName:"p"},"expression_data_type")," (see ",(0,r.kt)("a",{parentName:"p",href:"#table-1-global-attributes"},"Table 1")," below)."),(0,r.kt)("p",null,"The matrix also contains multiple metrics for both individual bead barcodes (the columns of the matrix; ",(0,r.kt)("a",{parentName:"p",href:"#table-2-column-attributes-bead-barcode-metrics"},"Table 2"),") and individual genes (the rows of the matrix; ",(0,r.kt)("a",{parentName:"p",href:"#table-3-row-attributes-gene-metrics"},"Table 3"),"). "),(0,r.kt)("h2",{id:"table-1-global-attributes"},"Table 1. Global attributes"),(0,r.kt)("p",null,"The global attributes in the Loom apply to the whole file, not any specific part. "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Details"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"CreationDate")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Date the Loom file was created.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"LOOM_SPEC_VERSION")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Loom file spec version used during creation of the Loom file.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"expression_data_type")),(0,r.kt)("td",{parentName:"tr",align:"left"},"String describing if the pipeline counted whole transcript (exonic and intronic) or only exonic reads determined by the value of the ",(0,r.kt)("inlineCode",{parentName:"td"},"count_exons")," parameter. By default, ",(0,r.kt)("inlineCode",{parentName:"td"},"count_exons")," is ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"expression_data_type")," is ",(0,r.kt)("inlineCode",{parentName:"td"},"whole_transcript"),"; if ",(0,r.kt)("inlineCode",{parentName:"td"},"count_exons")," is ",(0,r.kt)("inlineCode",{parentName:"td"},"false")," then ",(0,r.kt)("inlineCode",{parentName:"td"},"expression_data_type")," is ",(0,r.kt)("inlineCode",{parentName:"td"},"exonic"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"input_id")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"input_id")," provided to the pipeline as input and listed in the pipeline configuration file. This can be any string, but it's recommended for this to be consistent with any sample metadata.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"optimus_output_schema_version")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Loom file spec version used during creation of the Loom file.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"pipeline_version")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Version of the Slide-seq pipeline used to generate the Loom file.")))),(0,r.kt)("h2",{id:"table-2-column-attributes-bead-barcode-metrics"},"Table 2. Column attributes (bead barcode metrics)"),(0,r.kt)("p",null,"The bead barcode metrics below are computed using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp-tools/tree/develop/TagSort"},"TagSort")," from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp-tools/tree/develop"},"warp-tools repository"),", with the exception of ",(0,r.kt)("inlineCode",{parentName:"p"},"input_id")," which is an input to the pipeline."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Bead Barcode Metrics"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Details"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"CellID")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The unique identifier for each bead based on bead barcodes; identical to ",(0,r.kt)("inlineCode",{parentName:"td"},"cell_names"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"antisense_reads")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of reads that are mapped to the antisense strand instead of the transcribed strand.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"cell_barcode_fraction_bases_above_30_mean")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The average fraction of base calls for the bead barcode sequences that are greater than 30, across molecules.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"cell_barcode_fraction_bases_above_30_variance")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The variance of the fraction of  base calls for the bead barcode sequences that are greater than 30, across molecules.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"cell_names")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The unique identifier for each bead based on bead barcodes; identical to ",(0,r.kt)("inlineCode",{parentName:"td"},"CellID"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"fragments_per_molecule")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The average number of fragments associated with each molecule in this entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"fragments_with_single_read_evidence")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of fragments associated with this entity that are observed by only one read.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"genes_detected_multiple_observations")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of genes that are observed by more than one read in this entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"genomic_read_quality_mean")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Average quality of base calls in the genomic reads corresponding to this entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"genomic_read_quality_variance")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Variance in quality of base calls in the genomic reads corresponding to this entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"genomic_reads_fraction_bases_quality_above_30_mean")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The average fraction of bases in the genomic read that receive quality scores greater than 30 across the reads of this entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"genomic_reads_fraction_bases_quality_above_30_variance")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The variance in the fraction of bases in the genomic read that receive quality scores greater than 30 across the reads of this entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"input_id")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"input_id")," provided to the pipeline as input and listed in the pipeline configuration file. This can be any string, but it's recommended for this to be consistent with any sample metadata.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"molecule_barcode_fraction_bases_above_30_mean")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The average fraction of bases in molecule barcodes that receive quality scores greater than 30 across the reads of this entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"molecule_barcode_fraction_bases_above_30_variance")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The variance in the fraction of bases in molecule barcodes that receive quality scores greater than 30 across the reads of this entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"molecules_with_single_read_evidence")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of molecules associated with this entity that are observed by only one read.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"n_fragments")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of fragments corresponding to this entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"n_genes")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of genes detected by this bead.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"n_mitochondrial_genes")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of mitochondrial genes detected by this bead.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"n_mitochondrial_molecules")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of molecules from mitochondrial genes detected for this bead.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"n_molecules")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of molecules corresponding to this entity (only reflects reads with CB and UB tags).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"n_reads")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of reads associated with this entity. n_reads, like all metrics, are calculated from the Optimus output BAM. Prior to alignment with STARsolo, reads are checked against the whitelist (1 hamming distance). These CB-corrected reads are the input to the STAR aligner. Then, the reads also get CB correction during STAR. For this reason, almost all reads in the aligned BAM have a CB tag and UB tag. Therefore, n_reads represents CB corrected reads, not all reads in the input FASTQ files.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"noise_reads")),(0,r.kt)("td",{parentName:"tr",align:"left"},'Number of reads that are categorized by 10x Genomics Cell Ranger as "noise". Refers to long polymers, or reads with high numbers of N (ambiguous) nucleotides.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"pct_mitochondrial_molecules")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The percentage of molecules from mitochondrial genes detected for this bead.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"perfect_cell_barcodes")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of reads whose bead barcodes contain no errors.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"perfect_molecule_barcodes")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of reads whose molecule barcodes contain no errors.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"reads_mapped_multiple")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of reads mapped to multiple genomic positions with equal confidence.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"reads_mapped_too_many_loci")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of reads that were mapped to too many loci across the genome and as a consequence, are reported unmapped by the aligner.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"reads_mapped_uniquely")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of reads mapped to a single unambiguous location in the genome.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"reads_per_fragment")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The average number of reads associated with each fragment in this entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"spliced_reads")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of reads that overlap splicing junctions.")))),(0,r.kt)("h2",{id:"table-3-row-attributes-gene-metrics"},"Table 3. Row attributes (gene metrics)"),(0,r.kt)("p",null,"The gene metrics below are computed using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp-tools/tree/develop/TagSort"},"TagSort")," from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp-tools/tree/develop"},"warp-tools repository")," except where specified."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Gene Metrics"),(0,r.kt)("th",{parentName:"tr",align:null},"Details"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Gene")),(0,r.kt)("td",{parentName:"tr",align:null},"The unique ",(0,r.kt)("inlineCode",{parentName:"td"},"gene_name")," provided in the ",(0,r.kt)("a",{parentName:"td",href:"https://www.gencodegenes.org/"},"GENCODE GTF"),"; identical to the ",(0,r.kt)("inlineCode",{parentName:"td"},"gene_names")," attribute.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"antisense_reads")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of reads that are mapped to the antisense strand instead of the transcribed strand.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ensembl_ids")),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("inlineCode",{parentName:"td"},"gene_id")," provided in the ",(0,r.kt)("a",{parentName:"td",href:"https://www.gencodegenes.org/"},"GENCODE GTF"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fragments_per_molecule")),(0,r.kt)("td",{parentName:"tr",align:null},"The average number of fragments associated with each molecule in this entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fragments_with_single_read_evidence")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of fragments associated with this entity that are observed by only one read.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"gene_names")),(0,r.kt)("td",{parentName:"tr",align:null},"The unique ",(0,r.kt)("inlineCode",{parentName:"td"},"gene_name")," provided in the ",(0,r.kt)("a",{parentName:"td",href:"https://www.gencodegenes.org/"},"GENCODE GTF"),"; identical to the ",(0,r.kt)("inlineCode",{parentName:"td"},"Gene")," attribute.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"genomic_read_quality_mean")),(0,r.kt)("td",{parentName:"tr",align:null},"Average quality of base calls in the genomic reads corresponding to this entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"genomic_read_quality_variance")),(0,r.kt)("td",{parentName:"tr",align:null},"Variance in quality of base calls in the genomic reads corresponding to this entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"genomic_reads_fraction_bases_quality_above_30_mean")),(0,r.kt)("td",{parentName:"tr",align:null},"The average fraction of bases in the genomic read that receive quality scores greater than 30 across the reads of this entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"genomic_reads_fraction_bases_quality_above_30_variance")),(0,r.kt)("td",{parentName:"tr",align:null},"The variance in the fraction of bases in the genomic read that receive quality scores greater than 30 across the reads of this entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"molecule_barcode_fraction_bases_above_30_mean")),(0,r.kt)("td",{parentName:"tr",align:null},"The average fraction of bases in molecule barcodes that receive quality scores greater than 30 across the reads of this entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"molecule_barcode_fraction_bases_above_30_variance")),(0,r.kt)("td",{parentName:"tr",align:null},"The variance in the fraction of bases in molecule barcodes that receive quality scores greater than 30 across the reads of this entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"molecules_with_single_read_evidence")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of molecules associated with this entity that are observed by only one read.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"n_fragments")),(0,r.kt)("td",{parentName:"tr",align:null},"Number of fragments corresponding to this entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"n_molecules")),(0,r.kt)("td",{parentName:"tr",align:null},"Number of molecules corresponding to this entity (only reflects reads with CB and UB tags).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"n_reads")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of reads associated with this entity. n_reads, like all metrics, are calculated from the Optimus output BAM. Prior to alignment with STARsolo, reads are checked against the whitelist (1 hamming distance). These CB-corrected reads are the input to the STAR aligner. Then, the reads also get CB correction during STAR. For this reason, almost all reads in the aligned BAM have a CB tag and UB tag. Therefore, n_reads represents CB corrected reads, not all reads in the input FASTQ files.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"noise_reads")),(0,r.kt)("td",{parentName:"tr",align:null},'The number of reads that are categorized by 10x Genomics Cell Ranger as "noise". Refers to long polymers, or reads with high numbers of N (ambiguous) nucleotides.')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number_cells_detected_multiple")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of bead barcodes which observe more than one read of this gene.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number_cells_expressing")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of bead barcodes that detect this gene.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"perfect_molecule_barcodes")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of reads with molecule barcodes that have no errors.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"reads_mapped_multiple")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of reads mapped to multiple genomic positions with equal confidence.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"reads_mapped_uniquely")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of reads mapped to a single unambiguous location in the genome.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"reads_per_fragment")),(0,r.kt)("td",{parentName:"tr",align:null},"The average number of reads associated with each fragment in this entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"reads_per_molecule")),(0,r.kt)("td",{parentName:"tr",align:null},"The average number of reads associated with each molecule in this entity.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"spliced_reads")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of reads that overlap splicing junctions.")))))}c.isMDXComponent=!0}}]);
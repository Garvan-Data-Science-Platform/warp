# 1.0.6
2022-10-12 (Date of Last Commit)

* Removed task MakeOptionalOutputBam in Utilities.wdl, this update makes this pipeline more robust to large samples
* Updated task IngestOutputsToTDR in InternalTasks.wdl with new docker tag to accommodate changes for BroadInternalArrays pipeline. Change has no effect on this pipeline.
* Updated task IngestOutputsToTDR in InternalTasks.wdl with new optional input variable. This update has no effect on this pipeline.
* Updated task FormatArraysOutputs in InternalArrraysTasks.wdl with new docker tag to accommodate changes for BroadInternalArrays pipeline. Change has no effect on this pipeline.

# 1.0.5
2022-09-30 (Date of Last Commit)

* Updated Picard-Python Docker image in Utilities.wdl to fix vulnerabilities.
* Updated task IngestOutputsToTDR with GCR images instead of Dockerhub.

# 1.0.4
2022-09-20 (Date of Last Commit)

* Removed /cromwell_root/ prefix for output file paths in FilterVCF and TrainModel tasks.

# 1.0.3
2022-09-07 (Date of Last Commit)

* Increased disk space in the MakeOptionalOutputBam task in Utilities.wdl
* Updated task IngestOutputsToTDR in InternalTasks.wdl with new docker tag to accommodate changes for BroadInternalArrays pipeline. Change has no effect on this pipeline.

# 1.0.2
2022-07-07 (Date of Last Commit)

* Bugfix: Changed name of TDR outputs json to remove spaces
* Updated TDR ingest script to version 1.4 to use merge strategy and retry ingest once if it fails

# 1.0.1
2022-06-21 (Date of Last Commit)

* Changed QC.CheckFingerprint to QC.CheckFingerprintTask to avoid a naming conflict in the update scala tests, no effect on this pipeline

# 1.0.0
2022-05-03 (Date of Last Commit)

* Initial Release of UltimaGenomicsWrapper pipeline.
* The UltimaGenomicsWrapper pipeline wraps the UltimaGenomicsWholeGenomeGermline pipeline and performs additional steps that rely on Broad specific infrastructure.
* The UltimaGenomicsWholeGenomeGermline pipeline is an open-source, cloud-optimized workflow created for processing Ultima Genomics Whole Genome Sequenced Germline samples. Overall, the workflow aligns reads to the genome, uses HaplotypeCaller to call variants, and calculates quality metrics to produce a CRAM, CRAI, GVCF, filtered VCF, and a merged quality metrics file.
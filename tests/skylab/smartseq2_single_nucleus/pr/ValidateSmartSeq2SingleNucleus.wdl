version 1.0

task ValidateSnSmartSeq2 {
    input {
      File exon_intron_counts_hash
      String truth_exon_intron_counts_hash
      File h5ad_output
      File truth_h5ad

      Int disk_size = ceil(size(h5ad_output,"GiB") + size(truth_h5ad, "GiB") + 10)
    }

  command <<<

    # catch intermittent failures
    set -eo pipefail

    # calculate hashes; awk is used to extract the hash from the md5sum output that contains both
    # a hash and the filename that was passed. We parse the first 7 columns because a bug in RSEM
    # makes later columns non-deterministic.

    exon_intron_counts_hash=$(awk 'NR>2' "~{exon_intron_counts_hash}" | md5sum | awk '{print $1}')

    if [ "$exon_intron_counts_hash" != "~{truth_exon_intron_counts_hash}" ]; then
        echo "exon_intron_counts_hash "$exon_intron_counts_hash" did not match expected hash "~{truth_exon_intron_counts_hash}""
        exit 1;
    fi

  >>>

  runtime {
    docker: "us.gcr.io/broad-gotc-prod/pytools:1.0.0-1661263730"
    cpu: 1
    memory: "8 GB"
    disks: "local-disk 1${disk_size} HDD"
  }
}

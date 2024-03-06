version 1.0

workflow HelloWorld {
    input {
        File input_file
        Int scatter_num
    }

    scatter (i in range(scatter_num)) {
        call WriteGreeting {
            input:
                input_file = input_file
        }
    }

    output {
        Array[File] output_file = WriteGreeting.output_greeting
    }
}

task WriteGreeting {
    input {
        File input_file
    }
    String ubuntu_docker = "ubuntu:20.04"
    command {
        echo "Hello World"
    }
    runtime {
        docker: ubuntu_docker
        disk: "50 GB"
        memory: "2000 MiB"
        cpu: 1
    }
    output {
        # Write output to standard out
        File output_greeting = stdout()
    }
}
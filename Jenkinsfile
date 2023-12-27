pipeline {
    agent any

    stages {
        stage('Clone Git Repository') {
            steps {
                script {
                    // Define the repository URL and credentials
                    def localDir = 'C:/ProgramData/Jenkins/.jenkins/workspace/pipeline'

                    // Clone the repository to the desired local directory
                    checkout(extensions: [[$class: 'RelativeTargetDirectory', relativeTargetDir: localDir]]])
                }
            }
        }

        stage('Build and Run Docker Compose') {
            steps {
                script {
                    def composeFilePath = "${localDir}/docker-compose.yml"

                    // Build and start the services defined in docker-compose.yml
                    bat "docker-compose -f ${composeFilePath} up -d"
                }
            }
        }
    }
}

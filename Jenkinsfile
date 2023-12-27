pipeline {
    agent any

    stages {
        stage('Build and Run Docker Compose') {
            steps {
                script {
                    // Define the path to your docker-compose.yml file
                    def composeFilePath = 'C:/ProgramData/Jenkins/.jenkins/workspace/pipeline/docker-compose.yml'

                    // Build and start the services defined in docker-compose.yml
                    bat "docker-compose -f ${composeFilePath} up -d"
                }
            }
        }
    }
}
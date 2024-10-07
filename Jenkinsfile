pipeline {
    agent any
    tools {
        nodejs "NodeJS" // Este nombre debe coincidir con el nombre de la instalación de Node.js en la configuración de Jenkins
    }
    stages {
        stage('Install Dependencies') {
            steps {
                // Instalar dependencias
                sh 'npm install'
            }
        }
        stage('Run Cypress Tests') {
            steps {
                // Ejecutar pruebas de Cypress en headless mode
                sh 'npx cypress run --headless --browser chrome'
            }
        }
    }
}

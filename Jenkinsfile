pipeline {
    agent any 

    tools {
        nodejs "NodeJS"  // Mueve la configuración de Node.js aquí.
    }

    parameters {
        //string(name: "SPEC", defaultValue: "cypress/e2e/**/**", description: "Ej: cypress/e2e/*.cy.js")
        //choice(name: "BROWSER", choices: ['chrome', 'firefox'], description: "Escoja un browser en donde ejecutar sus scripts.")
    }

    stages {
        stage('Build') {
            steps {
                echo "Building application"
            }
        }

        stage('Testing') {
            steps {
                // Instalar dependencias de npm
                bat "npm install --legacy-peer-deps" // Usa `sh` si estás en Linux/macOS
                // Instalar Cypress binario
                bat "npx cypress install"
                
                bat "dir cypress\\test"
                bat "npx cypress run --browser chrome --spec \"cypress/test/ApiTesting.cy.js\""
                          }
        }

        stage('Deploy') {
            steps {
                echo "Deploying the application"
                
            }
        }
}

    }

    post {
        always {
            // Publicar reporte HTML de Cypress
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/reports', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
        }
  }


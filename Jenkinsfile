pipeline{
    agent any 

    parameters {
        string(name: "SPEC", defaultValue: "cypress/e2e/**/**", description: "Ej: cypress/e2e/*.cy.js")
        choice(name: "BROWSER", choices: ['chrome', 'firefox'], description: "Escoja un browser en donde ejecutar sus scripts.")
        nodejs "NodeJS" // Este nombre debe coincidir con el nombre de la instalación de Node.js en la configuración de Jenkins
    }

    stages{
        stage('Build'){
            steps{
                echo "Buiding application"
            }
        }
        stage('Testing'){
            steps{
                 bat "npm i"
                 bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
            }
        }
        stage('Deploy'){
            steps{
                echo "Deploying the application"
            }
        }
    }

    post{
        always{
          publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/report', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
        }
    }
}


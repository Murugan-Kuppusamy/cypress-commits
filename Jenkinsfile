pipeline {
  agent any
  
  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }
    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }
    stage('Run Cypress Tests') {
      steps {
        sh 'npx cypress run'
      }
    }
  }
  post {
    always {
      archiveArtifacts artifacts: 'cypress/videos/**, cypress/screenshots/**'
    }
    success {
      echo 'Cypress tests passed!'
    }
    failure {
      echo 'Cypress tests failed!'
    }
  }
}
      

pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out source code...'
                git 'https://github.com/example/repo.git'
            }
        }
        stage('Build') {
            steps {
                echo 'Compiling and packaging...'
                sh 'make build'
                sh 'make package'
            }
        }
        stage('Static Analysis') {
            steps {
                echo 'Running static code analysis...'
                sh 'sonar-scanner'
            }
        }
        stage('Unit Test') {
            steps {
                echo 'Running unit tests...'
                sh 'make test'
            }
        }
        stage('Integration Test') {
            steps {
                echo 'Running integration tests...'
                sh 'make integration-test'
            }
        }
        stage('System Test') {
            steps {
                echo 'Running system tests...'
                sh 'make system-test'
            }
        }
        stage('UAT') {
            steps {
                echo 'Running user acceptance tests...'
                sh 'make uat'
            }
        }
        stage('Security Test') {
            steps {
                echo 'Running security tests...'
                sh 'owasp-zap'
            }
        }
        stage('Performance Test') {
            steps {
                echo 'Running performance tests...'
                sh 'make performance-test'
            }
        }
        stage('Deploy to Staging') {
            steps {
                echo 'Deploying to staging...'
                sh 'make deploy-staging'
            }
        }
        stage('Smoke Test on Staging') {
            steps {
                echo 'Running smoke tests on staging...'
                sh 'make smoke-test-staging'
            }
        }
        stage('Deploy to Production') {
            steps {
                echo 'Deploying to production...'
                sh 'make deploy-production'
            }
        }
        stage('Smoke Test on Production') {
            steps {
                echo 'Running smoke tests on production...'
                sh 'make smoke-test-production'
            }
        }
        stage('Monitoring') {
            steps {
                echo 'Monitoring production environment...'
                sh 'make monitor-production'
            }
        }
        stage('Feedback Loop') {
            steps {
                echo 'Collecting feedback...'
                sh 'make collect-feedback'
            }
        }
    }
    post {
        always {
            echo 'Always run this post step...'
            mail to: 'team@example.com', subject: 'Pipeline Complete', body: "The pipeline has completed."
        }
        success {
            echo 'Run this if the pipeline is successful...'
        }
        failure {
            echo 'Run this if the pipeline fails...'
            sh 'make rollback'
        }
    }
}

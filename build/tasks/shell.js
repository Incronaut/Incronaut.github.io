module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-shell');

    grunt.config('shell', {
        options: {
            stderr: false,
            execOptions: {
              maxBuffer: Infinity
            }
        },
        push_prod_s3: {
            command: 'aws --profile incronaut s3 cp _site/ s3://incronaut.com --recursive --include \'*\' --acl \'public-read\''
        },
        push_episodes: {
            command: 'aws --profile incronaut s3 sync _audio/ s3://episodes.incronaut.com --include \'*\' --acl \'public-read\''
        },
        download_report: {
            command: 'aws --profile incronaut s3 sync s3://logs-incronaut ./_s3_logs && ' +
              'bundle exec request-log-analyzer -f amazon_s3 --output html --file report.html _s3_logs'
        }
    });
};

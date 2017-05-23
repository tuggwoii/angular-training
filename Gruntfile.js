module.exports = function (grunt) {

    grunt.initConfig({

        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
            options: {
                globals: {
                    jQuery: true
                }
            }
        },
        watch: {
            files:
            [
                'src/main.ts',
                'src/css/styles.css',
                'src/views/index.html',
                'src/app/**/**/**.ts',
                'src/app/**/**/**.html'
            ],
            tasks: ['shell']
        },
        shell: {
            build: {
                command: 'ng build'
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-shell');
    grunt.registerTask('default', ['watch']);
};
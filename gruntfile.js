module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        devserver: {
            server: {},
            options: {
                port: 8080,
                base: '.',
                async: true
            }
        },
        karma: {
            unit: {
                configFile: "karma.conf.js"
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: ['*.js', 'src/**/*.js', 'test/**/*.js']
        }
    });

    grunt.loadNpmTasks('grunt-devserver');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['jshint', 'karma']);
    grunt.registerTask('dev', ['jshint', 'karma', 'devserver']);
};

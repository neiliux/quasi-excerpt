/*global module */
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
    });

    grunt.loadNpmTasks('grunt-devserver');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('default', ['karma']);
    grunt.registerTask('dev', ['karma', 'devserver']);
};

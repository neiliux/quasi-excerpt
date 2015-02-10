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
        }
    });

    grunt.loadNpmTasks('grunt-devserver');
    
    grunt.registerTask('default', ['devserver']);
};


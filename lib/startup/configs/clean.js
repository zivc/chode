module.exports = function(grunt) {

    grunt.config.set('clean', {
        dev:['www'],
        build:['www']
    });

    grunt.loadNpmTasks('grunt-contrib-clean');

};

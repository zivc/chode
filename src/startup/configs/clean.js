module.exports = function(grunt) {

    grunt.config.set('clean', {
        dev:{
            content:['www']
        },
        build:{
            content:['www']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');

};

module.exports = function(grunt) {

    const priorities = require('../priorities');

    grunt.config.set('concat', {
        libs:{
            src: priorities.libs,
            dest: 'www/tmp/libs.js'
        },
        js:{
            src: priorities.js,
            dest: 'www/tmp/js.js'
        },
        all:{
            src: ['www/tmp/libs.js','www/tmp/js.js','www/tmp/templates.js'],
            dest: 'www/tmp/all.js'
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');

};

module.exports = function(grunt) {

    grunt.config.set('ngtemplates', {
        build:{
            cwd:'./assets/templates/',
            src:['**/*.html'],
            dest:'./www/tmp/templates.js',
            options:{
                module:'chode',
                prefix:'/templates/',
                htmlmin:{
                    collapseWhitespace:true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-angular-templates');

};

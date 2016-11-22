module.exports = function(grunt) {

    grunt.config.set('copy', {
        dev:{
            files:[
                {
                    expand:true,
                    cwd:'./node_modules/angular',
                    src:['angular.js'],
                    dest:'./assets/js/libs'
                },
                {
                    expand:true,
                    cwd:'./node_modules/angular-ui-router/release',
                    src:['angular-ui-router.js'],
                    dest:'./assets/js/libs'
                },
                {
                    expand:true,
                    cwd:'./assets',
                    src:['**/*'],
                    dest:'./www'
                }
            ]
        },
        build:{

        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');

};

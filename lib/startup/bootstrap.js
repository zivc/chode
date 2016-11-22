let argv = process.argv.slice(2);

const grunt = require('grunt'),
    path = require('path'),
    fs = require('fs-extra');

console.log(argv);

module.exports = function(cb) {

    let gruntIncludePaths = [
        path.resolve(__dirname, './configs'),
        path.resolve(__dirname, './tasks')
    ];

    gruntIncludePaths.forEach(function(includePath) {
        includes = fs.readdirSync(includePath);
        includes.forEach(function(include) {
            console.log(includePath+'/'+include);
            require(includePath+'/'+include)(grunt);
        });
    });

    if (argv.indexOf('build') >= 0) {
        // build
        console.log('build m8');
        grunt.tasks(['build'], {}, cb);

    } else if (argv.indexOf('prod') >= 0 || argv.indexOf('production') >= 0) {
        // run without building
        return cb();

    } else {
        // development

    }

};

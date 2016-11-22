const path = require('path'),
    grunt = require('grunt'),
    argv = process.argv.slice(2);

module.exports = function(dir) {

    const chode = require('chode');
    bootstrap = require(path.resolve(dir, './startup/bootstrap'));

    global.chode = chode;
    chode.config = {
        routes:{},
        policies:{},
        port:8080,
        prefix:'/api'
    };

    const steps = [
        'api',
        'config',
        'express'
    ];

    steps.forEach(function(step) {
        require('./steps/'+step)(dir);
    });

    bootstrap.loadGrunt();

    let cb = function() {
        chode.log('Bootstrapped');
        chode.express.listen(chode.config.port);
    }

    if (argv.indexOf('build') >= 0) {
        // build
        grunt.tasks(['build'], {}, cb);

    } else if (argv.indexOf('prod') >= 0 || argv.indexOf('production') >= 0) {
        // run without building
        return cb();

    } else {
        // development
        grunt.tasks(['default'], {}, cb);
    }

}

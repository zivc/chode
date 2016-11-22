module.exports = function(dir, options) {

    const chode = require('chode');
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
        require('./steps/'+step)();
    });

    require('./startup/bootstrap')(function() {
        chode.log('Bootstrapped');
        chode.express.listen(chode.config.port);
    });

}

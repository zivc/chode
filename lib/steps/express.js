const path = require('path');

module.exports = function(dir) {

    let express = require('express');

    chode.express = express();

    chode.express.use('/', express.static('www'));

    chode.express.use(function(req,res,next) {
        chode.log(req.headers['x-forwarded-for'] || req.connection.remoteAddress, req.method, req.url);
        next();
    });

    Object.keys(chode.config.routes).forEach(function(route) {

        if (Object.prototype.toString.call(route) === '[object String]') routes = [route];

        routes.forEach(function(route) {

            let match = /^(get|put|post|delete|options|connect|head)\ (.*)$/g.exec(route),
                parsedMethod,
                parsedRoute;

            if (route.substr(0,1) === '/') {

                parsedMethod = 'all';
                parsedRoute = route;

            } else if (match.length > 0) {

                parsedMethod = match[1];
                parsedRoute = match[2];

            }

            if (chode.config.policies[chode.config.routes[route].controller] && chode.config.policies[chode.config.routes[route].controller][chode.config.routes[route].method]) {

                chode.config.policies[chode.config.routes[route].controller][chode.config.routes[route].method].forEach(function(policy) {
                    var policyMethod = path.resolve(dir, './api/policies/'+policy);

                    chode.express.use(chode.config.prefix+parsedRoute, function(req,res,next) {
                        if (req.method.toLowerCase() == parsedMethod.toLowerCase() || parsedMethod === 'all') return require(policyMethod)(req,res,next);
                        next();
                    });
                });

            }

            chode.express[parsedMethod](chode.config.prefix+parsedRoute, global[chode.config.routes[route].controller][chode.config.routes[route].method]);

        });

    });

};

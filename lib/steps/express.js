module.exports = function() {

    let express = require('express');

    chode.express = express();

    chode.express.use('/', express.static('www'));

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

            chode.express[parsedMethod](chode.config.prefix+'/'+parsedRoute, global[chode.config.routes[route].controller][chode.config.routes[route].method]);

        });

    });

};

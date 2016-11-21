const fs = require('fs-extra'),
    path = require('path');

module.exports = function() {

    let rootPath = __dirname.split('node_modules')[0];

    ['controllers','policies','services'].forEach(function(type) {
        try {
            files = fs.readdirSync(path.resolve(rootPath, './api/'+type));
            files.forEach(function(file) {
                var p = path.resolve(rootPath, './api/'+type+'/'+file);
                global[file.substr(0,file.lastIndexOf('.'))] = require(p);
            });
        } catch(e) {
            // error
        }
    });

};

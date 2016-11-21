const fs = require('fs-extra'),
    path = require('path');

module.exports = function() {

    let rootPath = __dirname.split('node_modules')[0],
        files = fs.readdirSync(path.resolve(rootPath, './config'));

    files.forEach(function(file) {
        Object.assign(chode.config, require(path.resolve(rootPath, './config/'+file)));
    });

};

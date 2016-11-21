const chalk = require('chalk'),
    CircularJSON = require('circular-json');

module.exports = function() {
    let args = Array.from(arguments).map(function(obj,key) {
        return key === 0 ? chalk.blue(obj+':') : typeof obj === "object" ? JSON.stringify(JSON.parse(CircularJSON.stringify(obj)),null,4) : obj;
    });
    console.log(chalk.gray(new Date().toISOString()), Array.from(args).join('\t').trim());
};

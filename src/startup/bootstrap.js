const grunt = require('grunt'),
    path = require('path'),
    fs = require('fs-extra');


module.exports = {

    loadGrunt:function() {

        process.chdir(path.resolve(__dirname, '../'));

        fs.ensureDirSync('./www');

        let gruntIncludePaths = [
            path.resolve(__dirname, './configs'),
            path.resolve(__dirname, './tasks')
        ];

        gruntIncludePaths.forEach(function(includePath) {
            includes = fs.readdirSync(includePath);
            includes.forEach(function(include) {
                require(includePath+'/'+include)(grunt);
            });
        });

    }

};

const path = require('path'),
    fs = require('fs-extra');

module.exports = function(dir, options) {

    const dest = path.resolve(process.cwd(), dir),
        packageJsonPath = path.resolve(dest, 'package.json');

    let dependencies = {
            "chode": require('../package.json').version
        },
        packageJson,
        jsonDependencies;


    /*
     * Copy tree structure over
     */
    fs.copy(path.resolve(__dirname, '../src/'), dest, function(err) {
        if (err) return console.log(err);
    });

    /*
     * Ensure these paths exist
     */
    [
        '/www',
        '/assets/images',
        '/assets/js/libs',
        '/assets/styles',
        '/assets/templates'
    ].forEach(function(dir) {
        fs.ensureDirSync(path.resolve(dest+dir));
    });

    /*
     * Copy dependencies into existing package.json or create if not exists
     */
    try {

        packageJson = fs.readFileSync(packageJsonPath, fs.F_OK);

    } catch (e) {

        packageJson = {
            name:dir === '.' ? 'chode-project' : dir,
            private:true,
            version:'0.0.0',
            description:'A chode project',
            keywords:[],
            dependencies:{},
            main:'app.js'
        };

    }

    jsonDependencies = Object.keys(packageJson.dependencies);

    Object.keys(dependencies).forEach(function(dependency) {
        if (jsonDependencies.indexOf(dependency) === -1) packageJson.dependencies[dependency] = dependencies[dependency];
    });

    fs.writeJsonSync(packageJsonPath, packageJson);

}

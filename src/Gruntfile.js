module.exports = function(grunt) {

    process.chdir(__dirname);
    require('./node_modules/chode/lib/startup/bootstrap')(function() {
        console.log('ya dun kno');
    });

}

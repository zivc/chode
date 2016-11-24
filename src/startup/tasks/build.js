module.exports = function (grunt) {
    grunt.registerTask('build', [
        'clean',
        'copy',
        'ngtemplates:build',
        'concat:libs',
        'concat:js',
        'concat:all'
    ]);
};

module.exports = function(grunt) {
    grunt.initConfig({

        less: {
            development: {
                options: {
                    paths: ["assets/css"]
                },
                files: {"content.css": "content.less"}
            },
            production: {
                options: {
                    paths: ["assets/css"],
                    cleancss: true
                },
                files: {"content.css": "content.less"}
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.registerTask('default', ['less']);
};
module.exports = function ( grunt ) {
    grunt.initConfig( {
        less: {
            development: {
                options: {
                    compress: true
                },
                files: {
                    "web/assets/css/main.css": "app/assets/css/main.less",
                    "web/assets/css/fonts.css": "app/assets/css/fonts.less"
                }
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            js: {
                src: [
                    'bower_components/jquery/jquery.js',
                    'bower_components/bootstrap/dist/js/bootstrap.js',
                    'app/assets/js/hammade.js'
                ],
                dest: 'web/assets/js/hammade.js'
            }
        },
        uglify: {
            options: {
                mangle: false  // Use if you want the names of your functions and variables unchanged
            },
            js: {
                files: {
                    'web/assets/js/hammade.js': 'web/assets/js/hammade.js'
                }
            }
        },
        requirejs: {
            options: {
                baseUrl: "bower_components/require",
                optimizeCss: false,
                paths: {
                    "jquery": "bower_components/jquery/jquery.js",
                    "boostrap": "bower_components/bootstrap/dist/js/bootstrap.js",
                    modules: [{
                        name: "hammade"
                    }],
                    generateSourceMaps: true,
                    preserveLicenseComments: false
                }
            }
        },
        shell: {
            server: {
                command: "php -S 0.0.0.0:8000 -t web"
            }
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd: 'app/assets/',
                        src: ['**'],
                        dest: 'web/assets/'
                    },
                    {
                        expand: true,
                        cwd: 'bower_components/roboto-fontface',
                        src: ['**'],
                        dest: 'web/assets/fonts/roboto-fontface'
                    },
                    {
                        expand: true,
                        cwd: 'bower_components/roboto-slab-fontface',
                        src: ['**'],
                        dest: 'web/assets/fonts/roboto-slab-fontface'
                    }
                ]
            }
        }
    } );

    // Load NPM Tasks
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks( "grunt-contrib-copy" );
    grunt.loadNpmTasks( "grunt-contrib-requirejs" );
    grunt.loadNpmTasks( "grunt-shell" );

    // Register Tasks
    grunt.registerTask( "server", [ "shell:server" ] );
    grunt.registerTask( "default", [ "less", "requirejs", "copy:main:files", "concat", "uglify" ] );
};
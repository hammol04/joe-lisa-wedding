module.exports = function ( grunt ) {
    grunt.initConfig( {
        less: {
            development: {
                options: {
                    compress: true
                },
                files: {
                    "web/assets/css/main.css": "app/assets/css/main.less"
                }
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            js: {
                src: [
                    'app/assets/js/slider.js',
                    'app/assets/js/wedding.js'
                ],
                dest: 'web/assets/js/wedding.js'
            }
        },
        uglify: {
            options: {
                mangle: false  // Use if you want the names of your functions and variables unchanged
            },
            js: {
                files: {
                    'web/assets/js/wedding.js': 'web/assets/js/wedding.js'
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
                        cwd: 'bower_components/jquery/dist/',
                        src: ['**'],
                        dest: 'web/assets/js/dep'
                    },
                    {
                        expand: true,
                        cwd: 'bower_components/jssor-slider/js',
                        src: ['**'],
                        dest: 'web/assets/js/dep'
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
    grunt.loadNpmTasks( "grunt-shell" );

    // Register Tasks
    grunt.registerTask( "server", [ "shell:server" ] );
    grunt.registerTask( "default", [ "less", "copy:main:files", "concat", "uglify" ] );
};
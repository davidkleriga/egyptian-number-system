
function initialize(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        exec: {
            build: {
                command: 'make build'
            },

            // 'build-types': { command: 'make build-types' },
            'build-style': { command: 'make build-style' },
            'build-server': { command: 'make build-server' },
            'build-client': { command: 'make build-client' },

            // 'database-shell': {
            //     command: "echo 'mongo --username client --password testing christian.mongohq.com:10062/Beta-CitizenDish'"
            // }
        },

        watch: {
            types: {
                files: [ 'types/egyptian-number-system.d.ts'],
                tasks: [ 'exec:build-types'],
                spawn: false
            },

            style: {
                files: [ 'style/less/*.less', 'style/less/**/*.less','public/less/**/*.less'  ],
                tasks: [ 'exec:build-style'],
                spawn: false
            },

            server: {
                files: [ 'server/**/*.ts', 'server/*.ts',  ],
                tasks: [ 'exec:build-server' ],
                spawn: false
            },

            client: {
                files: [ 'client/**/*.ts', 'client/*.ts'],
                tasks: [ 'exec:build-client' ],
                spawn: false
            }
        },
   
        nodemon: {
            application: {
                script: 'server/api.js',
                options: {
                    ext: 'js',
                    watch: ['server'],
                    ignore: ['server/**'],
                    delay: 2000,
                    legacyWatch: false
                }
            },
            developer: {
                script: 'server/developer-api.js',
                options: {
                    ext: 'js',
                    watch: ['server'],
                    // ignore: ['server/**'],
                    delay: 3000,
                    legacyWatch: false
                }
            }
        }  ,

        concurrent: {
            options: {
                logConcurrentOutput: true
            },
            developer: {
                tasks: [ 'exec:build', 'nodemon:developer', 'watch:style', 'watch:server', 'watch:client' ]
                // tasks: [ 'exec:build', 'nodemon:server', 'watch:types', 'watch:style', 'watch:server', 'watch:client' ]
            },
            application: {
                tasks: [ 'exec:build', 'nodemon:application', 'watch:style', 'watch:server', 'watch:client' ]
                // tasks: [ 'exec:build', 'nodemon:server', 'watch:types', 'watch:style', 'watch:server', 'watch:client' ]
            }
        }

    }) ;


    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concurrent');

    grunt.registerTask('default', ['concurrent:application']) ;
    grunt.registerTask('developer', ['concurrent:developer']) ;

    grunt.option('debug', true);
    // grunt.option('force', true);
}

module.exports = initialize;
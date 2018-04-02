module.exports = function(grunt) {

	var scripts = [
		"src/script/script1.js",
		"src/script/script2.js",
		"src/script/lastscript.js"
	],
	styles = [
		"src/style/style1.less",
		"src/style/style2.less"
	];

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
    version: {
      patch: {
        options: {
          release: 'patch'
        },
        src: ['package.json']
      },
      minor: {
        options: {
          release: 'minor'
        },
        src: ['package.json']
      },
      major: {
        options: {
          release: 'major'
        },
        src: ['package.json']
      }
    },
		jshint: {
			options: {
				strict : true,
				laxbreak : true
			},
			script: {
				src: ['src/script/**/*.js']
			}
		},
	  concat: {
	    options: {
	      separator: '\n',
	    },
	    script: {
	      src: scripts,
	      dest: 'build/script/wizard-script.js'
	    },
	    style: {
	      src: styles,
	      dest: 'build/style/wizard-style.less'
	    }
	  },
    less: {
      common: {
        options: {
          paths: ['build/style'],
          modifyVars: {}
        },
        files: {
          'build/style/wizard-style.css': 'build/style/wizard-style.less'
        }
      },
      wwwgoktmcom: {
        options: {
          paths: ['build/style'],
          modifyVars: {
            backgroundImage: '"https://ce801278c.cloudimg.io/width/1024/s/https://jmsktm.github.io/wizard/src/image/home/search/nepal-mountain.jpeg"'
          }
        },
        files: {
          'build/style/wizard-style-wwwgoktmcom.css': 'build/style/wizard-style.less'
        }
      },
      wwwvacationsscannercom: {
        options: {
          paths: ['build/style'],
          modifyVars: {
            backgroundImage: '"https://ce801278c.cloudimg.io/width/1024/s/https://jmsktm.github.io/wizard/src/image/home/search/vacation-at-beach.jpeg"'
          }
        },
        files: {
          'build/style/wizard-style-wwwvacationsscannercom.css': 'build/style/wizard-style.less'
        }
      },
      wwwnewyorktravelus: {
        options: {
          paths: ['build/style'],
          modifyVars: {
            backgroundImage: '"https://ce801278c.cloudimg.io/width/1024/s/https://jmsktm.github.io/wizard/src/image/home/search/new-york.jpeg"'
          }
        },
        files: {
          'build/style/wizard-style-wwwnewyorktravelus.css': 'build/style/wizard-style.less'
        }
      },
      wwwvegashotelsus: {
        options: {
          paths: ['build/style'],
          modifyVars: {
            backgroundImage: '"https://ce801278c.cloudimg.io/width/1024/s/https://jmsktm.github.io/wizard/src/image/home/search/las-vegas.jpeg"'
          }
        },
        files: {
          'build/style/wizard-style-wwwvegashotelsus.css': 'build/style/wizard-style.less'
        }
      }
    },
	  uglify: {
	  	script: {
	  		options: {
	  			footer: '\n\n//# source=wizard-script.js'
	  		},
	  		src: '<%= concat.script.dest %>',
	  		dest: 'build/script/wizard-script-min.js'
	  	}
	  },
	  cssmin: {
		  common: {
		    files: [{
		      src: 'build/style/wizard-style.css',
		      dest: 'build/style/wizard-style-min.css'
		    }]
		  },
      wwwgoktmcom: {
        files: [{
          src: 'build/style/wizard-style-wwwgoktmcom.css',
          dest: 'build/style/wizard-style-wwwgoktmcom-min.css'
        }]
      },
      wwwvacationsscannercom: {
        files: [{
          src: 'build/style/wizard-style-wwwvacationsscannercom.css',
          dest: 'build/style/wizard-style-wwwvacationsscannercom-min.css'
        }]
      },
      wwwnewyorktravelus: {
        files: [{
          src: 'build/style/wizard-style-wwwnewyorktravelus.css',
          dest: 'build/style/wizard-style-wwwnewyorktravelus-min.css'
        }]
      },
      wwwvegashotelsus: {
        files: [{
          src: 'build/style/wizard-style-wwwvegashotelsus.css',
          dest: 'build/style/wizard-style-wwwvegashotelsus-min.css'
        }]
      }
		},
	  watch: {
		  script: {
		    files: ['src/script/**/*.js'],
		    tasks: ['concat:script']
		  },
		  style: {
		    files: ['src/style/**/*.css'],
		    tasks: ['concat:style']
		  }
		},
    connect: {
      site1: {
        options: {
          port: grunt.option("port") || 3000,
          base: 'build/'
        }
      },
      site2: {
        options: {
          port: grunt.option("httpsPort") || 3001,
          base: 'build/',
          protocol: 'https',
          key: grunt.file.read('certificates/server.key').toString(),
          cert: grunt.file.read('certificates/server.crt').toString()
        }
      }
    }
	});

  grunt.loadNpmTasks('grunt-version');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-less');

  // Tasks for builds
	grunt.registerTask('default', ['jshint', 'concat', 'less', 'uglify', 'cssmin']);
	grunt.registerTask('dev', ['default', 'connect', 'watch']);

  // Tasks for version bump
  grunt.registerTask('bump_patch', ['version:patch']);
  grunt.registerTask('bump_minor', ['version:minor']);
  grunt.registerTask('bump_major', ['version:major']);
}
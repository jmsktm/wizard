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
            backgroundImage: '"https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=38348a3f06ad1aac3c30d26af26040e1&auto=format&fit=crop&w=1955&q=80"'
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
            backgroundImage: '"https://images.unsplash.com/photo-1464221094918-aa79b0ad5a6e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6df97474ee9b84eb155a9d074f023d71&auto=format&fit=crop&w=1350&q=80"'
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
            backgroundImage: '"https://images.unsplash.com/photo-1484249170766-998fa6efe3c0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4e87fd5abedcb81f9318f91e9efe90d1&auto=format&fit=crop&w=1958&q=80"'
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
            backgroundImage: '"https://images.unsplash.com/photo-1470076892663-af684e5e15af?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=060facbee716072c04e2877eb2b550e0&auto=format&fit=crop&w=1217&q=80"'
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
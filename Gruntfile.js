module.exports = function(grunt) {

	var scripts = [
		"src/script/script1.js",
		"src/script/script2.js",
		"src/script/lastscript.js"
	],
	styles = [
		"src/style/style1.css",
		"src/style/style2.css"
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
	      dest: 'build/style/wizard-style.css'
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
		  target: {
		    files: [{
		      src: '<%= concat.style.dest %>',
		      dest: 'build/style/wizard-style-min.css'
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
		}
	});

  grunt.loadNpmTasks('grunt-version');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Tasks for builds
	grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'cssmin']);
	grunt.registerTask('dev', ['default', 'watch']);

  // Tasks for version bump
  grunt.registerTask('bump_patch', ['version:patch']);
  grunt.registerTask('bump_minor', ['version:minor']);
  grunt.registerTask('bump_major', ['version:major']);
}
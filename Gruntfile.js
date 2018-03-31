module.exports = function(grunt) {

	var scripts = [
		"src/script/script1.js",
		"src/script/script2.js"
	],
	styles = [
		"src/style/style1.css",
		"src/style/style2.css"
	];

	grunt.initConfig({
	  concat: {
	    options: {
	      separator: '\n',
	    },
	    script: {
	      src: scripts,
	      dest: 'build/script/wizard-script.js',
	    },
	    style: {
	      src: styles,
	      dest: 'build/style/wizard-style.css',
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
		jshint: {
			options: {
				strict : true,
				laxbreak : true
			},
			script: {
				src: ['src/script/**/*.js']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask('default', ['jshint', 'concat']);
	grunt.registerTask('dev', ['default', 'watch']);
}
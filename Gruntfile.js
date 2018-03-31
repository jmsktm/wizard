module.exports = function(grunt) {

	var scripts = [
		"src/js/file1.js",
		"src/js/file2.js"
	];

	grunt.initConfig({
	  concat: {
	    options: {
	      separator: ';\n',
	    },
	    build: {
	      src: scripts,
	      dest: 'build/js/wizard.js',
	    },
	  },
	  watch: {
		  js: {
		    files: ['src/js/**/*.js'],
		    tasks: ['concat']
		  }
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('dev', function() {
		console.log('dev task');
	})
}
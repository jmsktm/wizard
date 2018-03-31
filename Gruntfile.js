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
	});

	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('dev', function() {
		console.log('dev task');
	})
}
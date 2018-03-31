module.exports = function(grunt) {

	grunt.registerTask('speak', function() {
		console.log("I'm speaking");
	});

	grunt.registerTask('yell', function() {
		console.log("I'm yelling");
	});

	grunt.registerTask('default', ['speak', 'yell']);
}
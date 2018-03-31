(function(global) {
	console.log('Inside file2!');
})(typeof window !== 'undefined' ? window : this, undefined);
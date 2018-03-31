(function(global) {
	console.log('Inside file1');
})(typeof window !== 'undefined' ? window : this, undefined);
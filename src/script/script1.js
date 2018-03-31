(function(global) {
  
  'use strict';

	console.log('Inside file1!');

  if (true) console.log("single line command");
})(typeof window !== 'undefined' ? window : this, undefined);
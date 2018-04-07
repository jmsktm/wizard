(function(global) {

  'use strict';

  requirejs.config({
    paths: {
    }
  });
})(typeof window !== 'undefined' ? window : this);

(function(global, undefined) {

  'use strict';

  var wizard = wizard || {};
  
  wizard.meta = wizard || {};
  wizard.configuration = wizard.configuration || {};
  wizard.data = wizard.data || {};
  wizard.trick = wizard.trick || {};
  
  wizard.trick.hello = function(name) {
    alert('hello' + name);
  };
  
  global.wizard = wizard;
})(typeof window !== 'undefined' ? window : this);

(function(global, undefined) {

  'use strict';
  
	console.log('Inside file2!');
})(typeof window !== 'undefined' ? window : this);
(function(global, undefined) {

  'use strict';

  define('wizard', function() {
    return global.wizard;
  });
})(typeof window !== 'undefined' ? window : this);
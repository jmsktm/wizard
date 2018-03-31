(function(window, undefined) {

  'use strict';

  var wizard = wizard || {};
  
  wizard.meta = wizard || {};
  wizard.configuration = wizard.configuration || {};
  wizard.data = wizard.data || {};
  wizard.trick = wizard.trick || {};
  
  wizard.trick.hello = function(name) {
    alert('hello' + name);
  };
  
  window.wizard = wizard;
})(window);
(function(global) {

  'use strict';
  
	console.log('Inside file2!');
})(typeof window !== 'undefined' ? window : this, undefined);
(function (global, undefined) {

  'use strict';

  if(typeof(window.define) === "function" && window.define.amd !== undefined) {
      define("wizard", [], function() {
          return global.wizard;
      });
  }
})(typeof window !== 'undefined' ? window : this);
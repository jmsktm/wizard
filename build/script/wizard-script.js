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
(function (wizard, define, undefined) {

  'use strict';
  
  if(typeof(define) === "function" && define.amd !== undefined) {
      define("wizard", [], function() {
          return wizard;
      });
  }
})(window.wizard = window.wizard || {}, window.define);
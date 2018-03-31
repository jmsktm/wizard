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
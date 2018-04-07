(function(global, undefined) {

  'use strict';

  var wizard = global.wizard || {};
  
  wizard.meta = wizard.meta || {};
  wizard.configuration = wizard.configuration || {};
  wizard.data = wizard.data || {};
  wizard.trick = wizard.trick || {};
  
  wizard.trick.hello = function(name) {
    alert('hello' + name);
  };
  
  global.wizard = wizard;
})(typeof window !== 'undefined' ? window : this);

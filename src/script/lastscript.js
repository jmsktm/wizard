(function (wizard, define, undefined) {

  'use strict';
  
  if(typeof(define) === "function" && define.amd !== undefined) {
      define("wizard", [], function() {
          return wizard;
      });
  }
})(window.wizard = window.wizard || {}, window.define);
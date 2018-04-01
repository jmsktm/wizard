(function (global, undefined) {

  'use strict';

  if(typeof(window.define) === "function" && window.define.amd !== undefined) {
      define("wizard", function() {
          return global.wizard;
      });
  }
})(typeof window !== 'undefined' ? window : this);
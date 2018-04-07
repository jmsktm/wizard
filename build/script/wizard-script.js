(function(global) {

  'use strict';
  
  requirejs.config({
    paths: {
      jquery: 'https://code.jquery.com/jquery-3.3.1.min.js'
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

  /* Google Analytics setup using site config obtained from page */

  var module;

  // Setup temporary Google Analytics objects.
  global.GoogleAnalyticsObject = "ga";
  global.ga = function () { (global.ga.q = global.ga.q || []).push(arguments); };
  global.ga.l = 1 * new Date();

  if (typeof window.define === "function" && window.define.amd && typeof window.require === "function") {
    require(['siteConfig'], function(siteConfig) {
      global.ga("create", siteConfig.googleAnalytics, siteConfig.domain);
      global.ga("send", "pageview");
    });
  }

  /*
  require(["ga", "siteConfig"], function(ga, siteConfig) {
    if (siteConfig && siteConfig.googleAnalytics) {
      global.GoogleAnalyticsObject = "__ga__";
      global.__ga__ = {
          q: [["create", siteConfig.googleAnalytics, "auto"]],
          l: Date.now()
      };
      ga("send", "pageview");
    }
  });*/

})(typeof window !== 'undefined' ? window : this);
(function(global, undefined) {

  'use strict';

  define('wizard', function() {
    return global.wizard;
  });
})(typeof window !== 'undefined' ? window : this);
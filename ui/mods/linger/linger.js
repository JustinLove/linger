define([
  'text!linger/linger.html'
], function(html) {
  "use strict";

  return {
    ready: function() {
      var container = $(html)
      container.appendTo('body')
      ko.applyBindings(model, container)
    }
  }
})

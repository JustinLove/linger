define([
  'text!linger/exit_button.html'
], function(html) {
  "use strict";

  var liveGameServerState = handlers.server_state
  var gameOverUrl = '../game_over/game_over.html'

  handlers.server_state = function(msg) {
    if (msg.state == 'game_over') {
      gameOverUrl = msg.url
      msg.url = null
    }
    liveGameServerState(msg)
  }

  var viewModel = {
    navToGameOver: function() {
      model.gameOverReviewMode(false);
      window.location.href = gameOverUrl
    }
  }

  return {
    ready: function() {
      createFloatingFrame('linger_exit_button_frame', 200, 40, {'offset': 'leftCenter', 'left': 0});
      var $container = $('#linger_exit_button_frame_content')
      $(html).appendTo($container)
      ko.applyBindings(viewModel, $container[0])
    }
  }
})

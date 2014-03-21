define([
  'text!linger/exit_button.html'
], function(html) {
  "use strict";

  var linger = {
    liveGameServerState: handlers.server_state,
    gameOverUrl: '../game_over/game_over.html',
    visible: false,
    lingerServerState: function(msg) {
      if (msg.state == 'game_over') {
        linger.gameOverUrl = msg.url
        linger.showButton()
        msg.url = null
      }
      linger.liveGameServerState(msg)
    },
    viewModel: {
      navToGameOver: function() {
        model.gameOverReviewMode(false);
        window.location.href = linger.gameOverUrl
      }
    },
    showButton: function() {
      if (linger.visible) return

      linger.visible = true
      createFloatingFrame('linger_exit_button_frame', 200, 40, {'offset': 'leftCenter', 'left': 0});
      var $container = $('#linger_exit_button_frame_content')
      $(html).appendTo($container)
      ko.applyBindings(linger.viewModel, $container[0])
    },
  }

  handlers.server_state = linger.lingerServerState

  return linger
})

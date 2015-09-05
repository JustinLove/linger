(function() {
  "use strict";

  // ** Allow time to run with chronocam closed **

  // An anonymous computed on showTimeControls calls this if false
  model.resumeIfNotReview = function () { console.log('Linger: not resuming') }

  // ** Block the game over screen **

  // Defer the game over screen for might-as-well-be-forever
  model.gameOverDelay(24 * 60 * 60 * 1000)

  // Subscription that shows game over screen when closing chronocam
  var timeShowGameOver = function (value) {
            if (!value && (self.defeated() || self.gameOver()))
                api.panels.game_over_panel.query('ready').then(function (ready) {
                    if (ready)
                        self.showGameOver(true);
                });
        }

  model.showTimeControls.G.change.forEach(function(subscription) {
    if (timeShowGameOver.toString() == subscription.La.toString()) {
      subscription.dispose()
    }
  })

  // And having done all that we need a way to turn it back on
  model.gameOver.subscribe(function(value) {
    api.panels.options_bar && api.panels.options_bar.message('linger_game_over', value)
  })

  model.lingerShowGameOver = function() {
    api.time.resume()
    model.gameOverState().show = true
    model.gameOverState.notifySubscribers();
    api.panels.game_over_panel.query('ready').then(function (ready) {
      if (ready) {
        model.showGameOver(true);
      }
    });
  }
})()

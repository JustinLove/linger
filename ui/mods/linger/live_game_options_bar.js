(function() {
  "use strict";

  model.toggleGameOver = function() {
    api.Panel.message(api.Panel.parentId, 'panel.invoke', ['lingerShowGameOver', true]);
  };
  model.lingerImage = ko.computed(function() {
    //return 'coui://ui/mods/linger/options_bar_icon.png'
    return 'img/ingame_options_bar/game_menu.png'
  })
  model.lingerGameOver = ko.observable(false)

  handlers.linger_game_over = function(over) {
    model.lingerGameOver(over)
  }

  $('.div_ingame_options_bar_cont').prepend(
  '<div class="btn_ingame_options btn_std_ix div_toggle_linger" data-bind="visible: lingerGameOver">' + 
      '<a href="#" data-bind="click: toggleGameOver">' + 
          '<img height="16" data-bind="attr: { src: lingerImage }" />' + 
      '</a>' +
  '</div>')
})()

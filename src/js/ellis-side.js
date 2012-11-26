Crafty.c('EllisSide', {
  init: function() {
    var _self = this;

    this.requires('Renderable')
        ._setup()
        .spriteName('ellisSide')
        .animate('PlayerRunning', 0, 0, 7) //setup animation
        .animate('PlayerRunning', 25, -1);
  },

  _setup: function() {
    Crafty.sprite(70, 124, 'assets/images/man.png', {
      ellisSide: [0, 0]
    });

    return this;
  }
});
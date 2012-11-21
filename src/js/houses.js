Crafty.c('Houses', {
  _nextHousesFrame: Math.round(Math.random() * 200) + Crafty.frame() + 10,

  init: function() {
    this.requires('Foreground')
        .spriteName('houses')
        .attr({x: Crafty.viewport.width, y: 584 - this.h, z: 5});
  },

  random: function() {
    this.bind('EnterFrame', function(frame) {
      if (frame.frame == this._nextHousesFrame) {
        Crafty.e('Houses')
            .attr({x: 1100})
            .speed(2);
        this._nextHousesFrame += Math.round(Math.random() * 200) + 195;
      }
    });
  }
});
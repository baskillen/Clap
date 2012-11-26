Crafty.scene('EllisStart', 
  function() {

    console.log('starting decapitation spree');

    var _player;
    var _background = Crafty.e('Background')
        .image('assets/images/ellis-start-bg.png');

    Crafty.sprite('assets/images/house.png', {
      houses: [0, 0, 391, 389]
    });

    _player = Crafty.e('EllisFront')
      .attr({x: 200, y: 300, w: 97, h: 200, z: 200})
      .scale(0.5, 1, 500)
      .bind('playerDied', function() {
        Crafty.scene('gameOver');
        _background.unload().destroy();
      });
  },
  function() {

  }
);
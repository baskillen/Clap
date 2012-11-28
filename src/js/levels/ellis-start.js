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
      .attr({x: 0, y: 0, w: 72, h: 150, z: 200})
      .scale(0.4, 1, 370, 370, 500)
      .bind('playerDied', function() {
        Crafty.scene('gameOver');
        _background.unload().destroy();
      });
  },
  function() {

  }
);
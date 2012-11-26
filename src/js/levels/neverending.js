Crafty.scene('NeverEnding', 
  function() {

    console.log('starting level 1');

    var _foregroundSpeed = 4;
    var _platformInterval = 200 / _foregroundSpeed;

    var _platformPositions = [
      [0, 584],
      [200, 584],
      [400, 584],
      [600, 584],
      [800, 584],
      [1000, 584],
      [1200, 584]
    ];

    var _background = Crafty.e('Background')
        .image('assets/images/game-background.png')
        .scroll();

    Crafty.sprite('assets/images/box.png', {
      platform: [0, 0, 200, 16]
    });

    Crafty.sprite('assets/images/house.png', {
      houses: [0, 0, 391, 389]
    });

    for (var i in _platformPositions) {
      var pos = _platformPositions[i];
      Crafty.e('Platform').attr({x: pos[0], y: pos[1]}).speed(_foregroundSpeed);
    }

    Crafty.bind('EnterFrame', function(frame) {
      if (frame.frame % _platformInterval == 0) {
        Crafty.e('Platform').attr({x: 1200}).speed(_foregroundSpeed);;
      }
    });

    Crafty.e('Houses').speed(2);

    var _player = Crafty.e('SpriteAnimation', 'EllisFront')
      .attr({x: 100, y: 376, w: 97, h: 200, z: 200})
      .bind('playerDied', function() {
        Crafty.scene('gameOver');
        _background.unload().destroy();
      });
  },
  function() {

  }
);
Crafty.scene('Level1', 
  function() {

    console.log('starting level 1');

    var _platformPositions = [
      [0, 584],
      [200, 584],
      [400, 584],
      [750, 584],
      [950, 584],
      [1150, 584],
      [1500, 584],
      [1700, 584],
      [1900, 584],
      [2150, 550],
      [2350, 550],
      [2650, 400],
      [2950, 250],
      [3400, 584],
      [3600, 584],
      [3800, 584],
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
      Crafty.e('Platform')
          .attr({x: pos[0], y: pos[1]})
          .speed(3);
    }

    Crafty.e('Houses').speed(2);

    var _player = Crafty.e('SpriteAnimation', 'Player')
      .animate('PlayerRunning', 0, 0, 7) //setup animation
      .animate('PlayerRunning', 25, -1) // start animation;
      .attr({x: 100, y: 576, w: 70, h: 124, z: 200})
      .bind('playerDied', function() {
        Crafty.scene('gameOver');
        _background.unload().destroy();
      });
  },
  function() {

  }
);

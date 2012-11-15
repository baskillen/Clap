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

    for (var i in _platformPositions) {
      var pos = _platformPositions[i];
      Crafty.e('Platform').attr({x: pos[0], y: pos[1]}).speed(_foregroundSpeed);
    }

    Crafty.bind('EnterFrame', function(frame) {
      if (frame.frame % _platformInterval == 0) {
        Crafty.e('Platform').attr({x: 1200}).speed(_foregroundSpeed);;
      }
    });

    var _player = Crafty.e('SpriteAnimation', 'Player')
      .animate('PlayerRunning', 0, 0, 7) //setup animation
      .animate('PlayerRunning', 25, -1) // start animation;
      .attr({x: 100, y: 576, w: 70, h: 124})
      .bind('playerDied', function() {
        Crafty.scene('gameOver');
        _background.unload().destroy();
      });
  },
  function() {

  }
);
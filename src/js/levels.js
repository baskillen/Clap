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

    var _moveBackground = function(frame) {
      Crafty.stage.elem.style.backgroundPosition = -frame.frame + 'px 0px';
    }

    Crafty.background('url(assets/images/game-background.png)');

    Crafty.sprite('assets/images/box.png', {
      platform: [0, 0, 200, 16]
    });

    for (var i in _platformPositions) {
      var pos = _platformPositions[i];
      console.log(pos);
      Crafty.e('Platform').attr({x: pos[0], y: pos[1]});
    }

    var _player = Crafty.e('SpriteAnimation', 'Player')
      .animate('PlayerRunning', 0, 0, 7) //setup animation
      .animate('PlayerRunning', 25, -1) // start animation;
      .attr({x: 100, y: 576, w: 70, h: 124})
      .bind('playerDied', function() {
        Crafty.scene('gameOver');
        Crafty.unbind('EnterFrame', _moveBackground);
      });

    Crafty.bind('EnterFrame', _moveBackground);
    Crafty.bind('Clap', function() {
      Crafty.audio.play('jump');
      _player.jump();
    });
  },
  function() {

  }
);

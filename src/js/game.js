var Game = function() {

  EventTarget.call(this);

  var _self = this;
  var _loading = null;
  var _audioInput = new AudioInput();
  var player;

  this.initCrafty = function() {
    console.log('Page ready, starting CraftyJS');
    Crafty.init(1024, 700);
    Crafty.canvas.init();
    Crafty.scene('loader');
  };

  var _jump = function(event) {
    if (!player) {
      Crafty.scene('main');
    } else {
      player.jump();
    }
  };

  this.mainScene = function() {
    console.log('Showing the main scene...');

    Crafty.background('url(assets/images/game-background.png)');

    player = Crafty.e('SpriteAnimation', 'Player')
      .animate('PlayerRunning', 0, 0, 7) //setup animation
      .animate('PlayerRunning', 25, -1) // start animation;
      .attr({x: 100, y: 576, w: 70, h: 124})
      .bind('playerDied', function() {
        Crafty.scene('gameOver');
        Crafty.unbind('EnterFrame', _self.moveBackground);
      });

    Crafty.bind('EnterFrame', _self.moveBackground);

    var level1 = new Level1();
    level1.start();
  };

  this.moveBackground = function(frame) {
    Crafty.stage.elem.style.backgroundPosition = -frame.frame + "px 0px";
  };

  this.init = function() {
    Crafty.scene('main', this.mainScene);
    _audioInput.bind('READY', this.initCrafty);
    _audioInput.bind('JUMP', _jump);
    _audioInput.initialize();
  };
};

// kick off the game when the web page is ready
$(document).ready(function() {

  var game = new Game();
  game.init();

});

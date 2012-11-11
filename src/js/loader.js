Crafty.scene('loader', function() {

  console.log('Creating Loading Scene...');
  var _loading = Crafty.e('2D, Canvas, Text, Delay');
  _loading.attr({
    x: 462,
    y: 374,
    w: 100,
    h: 20
  });

  Crafty.load([
    'assets/images/box.png',
    'assets/images/man.png'
  ], 
  function() {
    console.log('Assets Loaded');
    _loading.text('Clap your hands to start the game!');
    Crafty.background('url(assets/images/game-over.png)');
  },

  function(progress) {
    console.log('On progress...');
    _loading.text('Loading ' + progress.precent + '% complete');
  },

  function() {
    console.log('On error...');
    _loading.text('Dude!! Error!');
  });
});
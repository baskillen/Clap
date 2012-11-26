Crafty.c('EllisFront', {
  init: function() {
    var _self = this;

    this.requires('Renderable, SpriteAnimation, Tween')
        ._setup()
        .spriteName('ellisFront')
        .animate('PlayerRunning', 0, 0, 7) //setup animation
        .animate('PlayerRunning', 40, -1);
  },

  scale: function(from, to, frames) {
    this.bind('EnterFrame', function(frame) {
      if (!this._startFrame) {
        this._startFrame = frame.frame;
        this._interval = (to - from) / frames;
      }
      if (frame.frame <= this._startFrame + frames) {
        var _scale = this._interval * (frame.frame - this._startFrame) + from;
        this.css('transform', 'scale(' + _scale + ', ' + _scale + ') translate(200px, 300px)')
            .css('-webkit-transform', 'scale(' + _scale + ', ' + _scale + ') translate(200px, 300px)')
        console.log(this.x);
      }
    });

    return this;
  },

  _setup: function() {
    Crafty.sprite(97, 200, 'assets/images/ellis-front.png', {
      ellisFront: [0, 0]
    });

    return this;
  }
});
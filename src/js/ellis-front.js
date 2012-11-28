Crafty.c('EllisFront', {
  init: function() {
    var _self = this;

    this.requires('Renderable, SpriteAnimation, Tween')
        ._setup()
        .spriteName('ellisFront')
        .animate('PlayerRunning', 0, 0, 7) //setup animation
        .animate('PlayerRunning', 40, -1);
  },

  scale: function(scaleFrom, scaleTo, targetX, targetY, frames) {
    this.bind('EnterFrame', function(frame) {
      if (!this._startFrame) {
        this._startFrame = frame.frame;
        this._interval = (scaleTo - scaleFrom) / frames;
      }
      if (frame.frame <= this._startFrame + frames) {
        var _scale = this._interval * (frame.frame - this._startFrame) + scaleFrom;
        this.css('transform', 'scale(' + _scale + ', ' + _scale + ') translate(' + targetX + 'px, ' + targetY + 'px)')
            .css('-webkit-transform', 'scale(' + _scale + ', ' + _scale + ') translate(200px, 300px)')
        console.log(this.x);
      }
    });

    return this;
  },

  _setup: function() {
    Crafty.sprite(72, 150, 'assets/images/ellis-front.png', {
      ellisFront: [0, 0]
    });

    return this;
  }
});
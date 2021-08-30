function  MediaPlayer(config) {
    this.media = config.el;
    this.plugins =config.plugins || [];

    this._initPlugins(); //inicializa el plugin
  }

  MediaPlayer.prototype._initPlugins = function() {
      this.plugins.forEach(plugin => {  //por cada plugin que recibamos, recibimos otro que va a correr con un método (run)
          plugin.run(this); //this se refiere a la instancia de MediaPlayer
      });
  };
  
  MediaPlayer.prototype.play = function() {
      this.media.play();
  };
  
  MediaPlayer.prototype.pause = function() {
      this.media.pause();
  };
  
  MediaPlayer.prototype.togglePlay = function() {
      if (this.media.paused) {
           this.media.play();
      } else {
          this.pause();
      }
  };

  MediaPlayer.prototype.mute = function () {
    this.media.muted = true;
  };
  
  MediaPlayer.prototype.unmute = function () {
    this.media.muted = false;
 };

export default MediaPlayer;
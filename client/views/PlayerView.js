// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<div class=currentSong>Currently Playing:<span></span></div><audio controls autoplay class=audioplayer/>',


  initialize: function() {
  },

  events: {
    'ended': function(e) {
      this.model.playQueue();
    }
  },

  setSong: function(song) {
    this.model = song;
    $('.currentSong span').text(song.attributes.artist+' - '+song.attributes.title);
    $('span').removeClass('glyphicon-pause').addClass('glyphicon-play-circle').removeClass('playing').removeClass('paused');
    this.render();
  },

  render: function() {
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});

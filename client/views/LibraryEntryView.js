// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td class=artist><span class="glyphicon glyphicon-play-circle"></span><%= artist %></td><td><%= title %><button class="queue btn btn-primary btn-sm">Queue</button><button class="playlist btn btn-warning btn-sm">Playlist</button></td>'),

  events: {
    'click button.queue': function() {
      this.model.enqueue();
    },
    'click span': function() {
      if($(this.el).find('span').hasClass('playing')){
        document.getElementsByClassName('audioplayer')[0].pause();
        $(this.el).find('span').removeClass('playing').toggleClass('glyphicon-pause').toggleClass('glyphicon-play-circle').addClass('paused');
      }else if($(this.el).find('span').hasClass('paused')){
        document.getElementsByClassName('audioplayer')[0].play();
        $(this.el).find('span').removeClass('paused').toggleClass('glyphicon-pause').toggleClass('glyphicon-play-circle').addClass('playing');
      }else{
        this.model.play();
        $('span').removeClass('glyphicon-pause').addClass('glyphicon-play-circle').removeClass('playing').removeClass('paused');
        $(this.el).find('span').toggleClass('glyphicon-play-circle').toggleClass('glyphicon-pause').addClass('playing');
      }
    },
    'click button.playlist' : function() {
      this.model.addToPlaylist();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});

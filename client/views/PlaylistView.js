// SongQueueView.js - Defines a backbone view class for the song queue.
var PlaylistView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.render();
    this.collection.on('add', this.render, this);
    this.collection.on('remove', this.render, this);
  },

  events : {
    'click button.add' : function(){
      this.collection.enqueuePlaylist(this.collection);
    }
  },

  render: function() {

    this.$el.children().detach();

    this.$el.html('<th>Playlist</th>').append('<button class=add>Add to Queue</button>').append(
      this.collection.map(function(song) {
        return new PlaylistEntryView({model: song}).render();
      })
    );
  }
});

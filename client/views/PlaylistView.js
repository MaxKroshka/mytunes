// SongQueueView.js - Defines a backbone view class for the song queue.
var PlaylistView = Backbone.View.extend({

  tagName: "div",

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

    this.$el.html('<div class=listHeader>Playlist<input placeholder="Name your playlist" /><button class="add btn btn-info btn-sm">Save</button></div>').append(
      this.collection.map(function(song) {
        return new PlaylistEntryView({model: song}).render();
      })
    );
  }
});

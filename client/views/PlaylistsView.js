// SongQueueView.js - Defines a backbone view class for the song queue.
var PlaylistsView = Backbone.View.extend({

  tagName: "div",

  initialize: function() {
    this.render();
    this.collection.on('add', this.render, this);
    this.collection.on('remove', this.render, this);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html('<div class=listHeader>Playlists</div>').append(
      this.collection.map(function(playlist) {
        return new PlaylistView({model: playlist}).el;
      })
    );
    return this.$el;
  }
});

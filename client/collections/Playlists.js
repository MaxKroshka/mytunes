var Playlists = Backbone.Collection.extend({

  model: PlaylistModel,

  playlistCreated: function(){
    this.trigger('playlistCreated',this);
  },

  playlistRemoved: function(){
    this.trigger('playlistRemoved', this);
  },

  enqueuePlaylist: function() {
    this.trigger('enqueuePlaylist',this);
  }

});


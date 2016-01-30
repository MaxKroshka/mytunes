var Playlist = Songs.extend({

  initialize: function() {
  },

  enqueuePlaylist: function() {
    this.trigger('enqueuePlaylist',this);
  }

});


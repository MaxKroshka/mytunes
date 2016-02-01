// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params) {
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.songQueueView = new SongQueueView({collection: this.model.get('songQueue')});
    this.createPlaylistView = new CreatePlaylistView({collection: this.model.get('playlist')});
    this.playlistView = new PlaylistView({collection: this.model.get('newCollection')});

    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    this.model.on('change:currentSong', function(model) {
      this.playerView.setSong(model.get('currentSong'));
    }, this);

    this.model.on('change:newCollection', function(model) {
      console.log(this.playlistView); 
      this.render();
    },this);

  },

  render: function() {
    return this.$el.html([
      this.playerView.$el,
      this.libraryView.$el,
      this.songQueueView.$el,
      this.createPlaylistView.$el,
      this.playlistView.$el
    ]);
  }

});

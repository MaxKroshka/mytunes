// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function() {
    this.trigger('enqueue',this);
  },

  dequeue: function() {
    this.trigger('dequeue',this);
  },

  playQueue: function() {
    this.trigger('playQueue', this);
  },

  addToPlaylist: function() {
    this.trigger('addToPlaylist', this);
  },

  removeFromPlaylist: function() {
    this.trigger('removeFromPlaylist', this);
  },
});

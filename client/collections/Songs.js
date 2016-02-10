// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  playlistCreated: function(){
    this.trigger('playlistCreated',this);
  }

});
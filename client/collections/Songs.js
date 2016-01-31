// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  collectionCreated: function(){
    this.trigger('collectionCreated',this);
  }

});
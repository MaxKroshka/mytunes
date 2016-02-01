// SongQueueView.js - Defines a backbone view class for the song queue.
var CreatePlaylistView = Backbone.View.extend({

  tagName: "div",

  initialize: function() {
    this.render();
    this.collection.on('add', this.render, this);
    this.collection.on('remove', this.render, this);
  },

  events : {
    'click button.save' : function(){
      var savedPlaylistCollection = this.collection.slice();
      this.collection.collectionCreated(savedPlaylistCollection);
      this.collection.reset(null);
      this.render();
    }
  },

  render: function() {

    this.$el.children().detach();

    this.$el.html('<div class=listHeader>Create Playlist<input placeholder="Name your playlist" /><button class="save btn btn-info btn-sm">Save</button></div>').append(
      this.collection.map(function(song) {
        return new CreatePlaylistEntryView({model: song}).render();
      })
    );
  }
});

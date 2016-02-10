var PlaylistView = Backbone.View.extend({

  tagName: "div",

  template: _.template('<div class=listHeader><% listName %></div><button class="x btn btn-danger btn-xs">X</button>'),

  initialize: function(){
    this.render();
  },

  events: {
    'click button.x': function() {
      this.collection.playlistRemoved();
    },
    'click button.play': function() {
      this.collection.enqueuePlaylist();
    }
  },

  render: function() {
    var songs = this.model.get('library');
    this.$el.children().detach();
    var listName = $('input').val() || 'Forgot to name';
    this.$el.html('<div class=listHeader>'+listName+'<button class="play btn btn-success btn-sm">Play</button><button class="x btn btn-danger btn-sm">Remove</button></div>')
      .append(
        songs.map(function(song) {
          return new PlaylistEntryView({ model: song }).el;
        })
      );
  }
});

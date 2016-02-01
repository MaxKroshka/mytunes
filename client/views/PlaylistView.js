var PlaylistView = Backbone.View.extend({

  tagName: "div",

  template: _.template('<div class=listHeader><% playlist %></div><button class="x btn btn-danger btn-xs">X</button>'),


  initialize: function() {
    this.collection.on('add', this.render, this);
  },

  events: {
    'click button.x': function() {
      var forRemoval = this.collection.slice();
      // forRemoval.forEach(function(song){
      //   this.collection.remove(song);
      // });
      this.collection.reset(null);
      this.render();
    },
    'click button.play': function() {
      this.collection.enqueuePlaylist();
    }
  },

  render: function() {
    this.$el.children().detach();
    var listName = $('input').val();
    this.$el.html('<div class=listHeader>'+listName+'<button class="play btn btn-success btn-sm">Play</button><button class="x btn btn-danger btn-sm">Remove</button></div>').append(
      this.collection.map(function(song) {
        return new PlaylistEntryView({model: song}).render();
      })
    );
  }

});

var PlaylistView = Backbone.View.extend({

  tagName: "div",

  template: _.template('<div class=listHeader><% playlist %></div><button class="x btn btn-danger btn-xs">X</button>'),


  initialize: function() {
    this.render();
  },

  events: {
    'click button.x': function() {
      this.remove();
      this.render();
    }
  },

  render: function() {
    this.$el.children().detach();

    this.$el.html('<div class=listHeader>Aaliyah<button class="x btn btn-danger btn-sm">Remove</button></div>').append(
      this.collection.map(function(song) {
        return new PlaylistEntryView({model: song}).render();
      })
    );
  }

});

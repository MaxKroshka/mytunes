// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %><button class=queue>Queue</button><button class=playlist>Playlist</button></td>'),

  events: {
    'click button.queue': function() {
      this.model.enqueue();
    },
    'click': function() {
      this.model.play();
    },
    'click button.playlist' : function() {
      this.model.addToPlaylist();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});

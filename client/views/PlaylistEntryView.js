// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var PlaylistEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %><button class=x>X</button></td>'),

  events: {
    'click button.x': function() {
      this.model.removeFromPlaylist();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var PlaylistEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td class=artist><%= artist %></td><td><%= title %></td>'),

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
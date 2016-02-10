var PlaylistModel = Backbone.Model.extend({

  initialize: function() {
  },

  enqueuePlaylist: function() {
    this.trigger('enqueuePlaylist',this);
  }

});
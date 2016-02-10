// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params) {
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());
    this.set('createPlaylist', new Songs()); 
    this.set('playlistCollection', new Playlists());

    this.get('createPlaylist').on('playlistCreated', function() {
      var newCollection = new Songs();
      this.get('createPlaylist').each(function(song){
        newCollection.add(song);
      });
      var newModel = new PlaylistModel({library: newCollection});
      this.get('playlistCollection').add(newModel);
    }, this);

    this.get('playlistCollection').on('playlistRemoved', function(playlist) {
     this.get('playlistCollection').remove(playlist);
    }, this);


    this.get('playlistCollection').on('enqueuePlaylist', function(playlist) {
      var songQueue = this.get('songQueue');
      playlist.collection.forEach(function(song){
        songQueue.add(song);
      });
      params.library.playQueue();
    }, this);
    
    params.library.on('play', function(song) {
      this.set('currentSong', song);
    }, this);

    params.library.on('playQueue', function() {
      this.set('currentSong', this.get('songQueue').shift());
    }, this);

    params.library.on('enqueue', function(song) {
      this.get('songQueue').add(song);
    }, this);

    params.library.on('dequeue', function(song) {
      this.get('songQueue').remove(song);
    }, this);

    params.library.on('addToPlaylist', function(song) {
      this.get('createPlaylist').add(song);
    }, this);

    params.library.on('removeFromPlaylist', function(song) {
      this.get('createPlaylist').remove(song);
    }, this);
  }

});

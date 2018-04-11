var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
  },

  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
  },

  printPlaylists: function(){
    var playlists = this.playlists;
    for (var id in playlists){
      console.log(id + ": " + playlists[id].name + " - " + playlists[id].tracks.length + " tracks");
    }
  },

  printTracks: function () {
  var tracklists = this.tracks;
    for(var id in tracklists){
      console.log(id + ": " + tracklists[id].name + " by " + tracklists[id].artist + " (" + tracklists[id].album + ")");
    }
  },

  printPlaylist: function (playlistId) {
    var playlist = this.playlists[playlistId];
    var tracks = this.tracks;

    console.log(playlist.id + ": " + playlist.name + " - " +  playlist.tracks.length + " tracks");

    for(var i = 0; i < playlist.tracks.length; i++){
     for(var id in tracks){
        if(playlist.tracks[i] === tracks[id].id){
          console.log(id + ": " + tracks[id].name + " by " + tracks[id].artist + " (" + tracks[id].album + ")");
        }
      }
    }
  },

 addTrackToPlaylist: function (trackId, playlistId) {
    this.playlists[playlistId].tracks.push(trackId);
  },

  uid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },

  addTrack: function (name, artist, album) {
    var id = this.uid();
    this.tracks[id] = {id: id, name: name, artist: artist, album: album};
  },

  addPlaylist: function (name) {
    var id = this.uid();
    this.playlists[id] = {id: id, name: name, tracks: []};
  },

  printSearchResults: function(query) {
    var tracklists = this.tracks;
    var re = new RegExp(query, 'i');
    for(var id in tracklists){
      if(tracklists[id].name.search(re) > -1 || tracklists[id].artist.search(re) > -1 || tracklists[id].album.search(re) > -1){
        console.log(id + ": " + tracklists[id].name + " by " + tracklists[id].artist + " (" + tracklists[id].album + ")");
      }
    }
  }
}

//addTrack("All along the watch tower","Jimmy Hendrix","Jimmy Hendrix Experience");
//addPlaylist("Slow Jams");
//printSearchResults("jo");
//printPlaylists();
//printTracks();
//addTrackToPlaylist("t03", "p01");
//printPlaylist("p01");


//library.printPlaylists();
//library.printTracks();
//library.printPlaylist("p01");
//library.addTrackToPlaylist("t03", "p01");
//library.printPlaylists();
//library.addTrack("All along the watch tower","Jimmy Hendrix","Jimmy Hendrix Experience");
//library.printTracks();
//library.addPlaylist("Slow Jams");
//library.printPlaylists();
//library.printSearchResults("jo");
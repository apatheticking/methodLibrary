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
             }
}

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printPlaylists = function () {
  var playlists = library.playlists;
  for (var id in playlists){
    console.log(id + ": " + playlists[id].name + " - " + playlists[id].tracks.length + " tracks");
  }
}


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function () {
  var tracklists = library.tracks;
  for(var id in tracklists){
    console.log(id + ": " + tracklists[id].name + " by " + tracklists[id].artist + " (" + tracklists[id].album + ")");
  }
}


// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylist = function (playlistId) {
  var playlists = library.playlists[playlistId];
  var tracks = library.tracks;

  console.log(playlists.id + ": " + playlists.name + " - " +  playlists.tracks.length + " tracks");

  for(var i = 0; i < playlists.tracks.length; i++){
    for(var id in tracks){
      if(playlists.tracks[i] === tracks[id].id){
        console.log(id + ": " + tracks[id].name + " by " + tracks[id].artist + " (" + tracks[id].album + ")");
      }
    }
  }
}

// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
  //console.log(library.playlists[playlistId].tracks);
  library.playlists[playlistId].tracks.push(trackId);
}


// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library

var addTrack = function (name, artist, album) {
  var id = uid();
  library.tracks[id] = {id: id, name: name, artist: artist, album: album};
}


// adds a playlist to the library

var addPlaylist = function (name) {
  var id = uid();
  library.playlists[id] = {id: id, name: name, tracks: []};
}


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {
  var tracklists = library.tracks;
  var re = new RegExp(query, 'i');
  for(var id in tracklists){
    if(tracklists[id].name.search(re) > -1 || tracklists[id].artist.search(re) > -1 || tracklists[id].album.search(re) > -1){
      console.log(id + ": " + tracklists[id].name + " by " + tracklists[id].artist + " (" + tracklists[id].album + ")");
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

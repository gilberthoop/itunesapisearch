//SERVICES
iTunesApp.service('iTunesService', function() {
    this.artist = '';
    this.songs = 'song';
    this.albums = 'album';
    this.podcast = 'podcast';
    this.movies = 'movie';
})


iTunesApp.service('songService', ['$resource', function($resource) {

    this.GetSongs = function (artist, songs) {
        var iTunesAPI = $resource("https://itunes.apple.com/search", {
            callback: "JSON_CALLBACK"
        }, {
            get: {
                method: "JSONP"
            }
        });

        return iTunesAPI.get({
            term: artist,
            entity: songs
        }); 
    }
    
}])


iTunesApp.service('albumService', ['$resource', function($resource) {

    this.GetAlbums = function (artist, albums) {
        var iTunesAPI = $resource("https://itunes.apple.com/search", {
            callback: "JSON_CALLBACK"
        }, {
            get: {
                method: "JSONP"
            }
        });

        return iTunesAPI.get({
            term: artist,
            entity: albums
        });
    }
}])


iTunesApp.service('podcastService', ['$resource', function($resource) {

    this.GetPodcast = function (artist, podcast) {
        var iTunesAPI = $resource("https://itunes.apple.com/search", {
            callback: "JSON_CALLBACK"
        }, {
            get: {
                method: "JSONP"
            }
        });

        return iTunesAPI.get({
            term: artist,
            entity: podcast
        });
    }
}])


iTunesApp.service('movieService', ['$resource', function ($resource) {

    this.GetMovies = function (artist, movies) {
        var iTunesAPI = $resource("https://itunes.apple.com/search", {
            callback: "JSON_CALLBACK"
        }, {
            get: {
                method: "JSONP"
            }
        });

        return iTunesAPI.get({
            term: artist,
            entity: movies
        });
    }

}])
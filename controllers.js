// CONTROLLERS
iTunesApp.controller('mainController', ['$scope', '$location', 'iTunesService', function($scope, $location, iTunesService) {
    
    $scope.artist = iTunesService.artist;
    $scope.songs = iTunesService.songs;
    $scope.albums = iTunesService.albums;
    
    
    $scope.$watch('artist', function() {
        iTunesService.artist = $scope.artist;
    })
    $scope.$watch('songs', function() {
        iTunesService.songs = $scope.songs;
    })
    $scope.$watch('albums', function() {
        iTunesService.albums = $scope.albums;
    })
    
    
    $scope.submit1 = function() {
        $location.path("/songresult");
    }
    $scope.submit2 = function() {
        $location.path("/albumresult");
    }
    $scope.submit3 = function() {
        $location.path("/podcastresult");
    }
    $scope.submit4 = function() {
        $location.path("/movieresult");
    }
    
}]);


iTunesApp.controller('searchController1', ['$scope', 'iTunesService', 'songService', function($scope, iTunesService, songService) {
    
    $scope.artist = iTunesService.artist;
    $scope.songs = iTunesService.songs;
      
    $scope.iTunesResult = songService.GetSongs($scope.artist, $scope.songs);
      
}]);


iTunesApp.controller('searchController2', ['$scope', '$resource', 'iTunesService', 'albumService', function($scope, $resource, iTunesService, albumService) {
    
    $scope.artist = iTunesService.artist;
    $scope.albums = iTunesService.albums; 
    
    $scope.iTunesResult = albumService.GetAlbums($scope.artist, $scope.albums);
     
}]);


iTunesApp.controller('searchController3', ['$scope', '$resource', 'iTunesService', 'podcastService', function($scope, $resource, iTunesService, podcastService) {
    
    $scope.artist = iTunesService.artist;
    $scope.podcast = iTunesService.podcast;
      
    $scope.iTunesResult = podcastService.GetPodcast($scope.artist, $scope.podcast);
     
}]);


iTunesApp.controller('searchController4', ['$scope', '$resource', 'iTunesService', 'movieService', function($scope, $resource, iTunesService, movieService) {
    
    $scope.artist = iTunesService.artist;
    $scope.movies = iTunesService.movies; 
    
    $scope.iTunesResult = movieService.GetMovies($scope.artist, $scope.movies);
     
}]);
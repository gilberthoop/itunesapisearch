// DIRECTIVES
iTunesApp.directive('songResult', function() {
    return {
        restrict: 'E',
        templateUrl: 'directives/songResult.html',
        replace: true,
        scope: {
            theSong: "="
        }
    }
})

iTunesApp.directive('albumResult', function() {
    return {
        restrict: 'E',
        templateUrl: 'directives/albumResult.html',
        replace: true,
        scope: {
            theAlbum: "="
        }
    }
})

iTunesApp.directive('podcastResult', function() {
    return {
        restrict: 'E',
        templateUrl: 'directives/podcastResult.html',
        replace: 'true',
        scope: {
            thePodcast: "="
        }
    }
})

iTunesApp.directive('movieResult', function() {
    return {
        restrict: 'E',
        templateUrl: 'directives/movieResult.html',
        replace: 'true',
        scope: {
            theMovie: "="
        }
    }
})
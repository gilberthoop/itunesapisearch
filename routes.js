//ROUTES
iTunesApp.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
        
    })
    .when('/songs', {
        templateUrl: 'pages/songs.html',
        controller: 'mainController'
        
    })
    .when('/songresult', {
        templateUrl: 'pages/results/songresult.html',
        controller: 'searchController1'
        
    })
    .when('/albums', {
        templateUrl: 'pages/albums.html',
        controller: 'mainController'
        
    })
    .when('/albumresult', {
        templateUrl: 'pages/results/albumresult.html',
        controller: 'searchController2'
    })
    .when('/podcast', {
        templateUrl: 'pages/podcast.html',
        controller: 'mainController'
    })
    .when('/podcastresult', {
        templateUrl: 'pages/results/podcastresult.html',
        controller: 'searchController3'
    })
    .when('/movies', {
        templateUrl: 'pages/movies.html',
        controller: 'mainController'
    })
    .when('/movieresult', {
        templateUrl: 'pages/results/movieresult.html',
        controller: 'searchController4'
    })
});

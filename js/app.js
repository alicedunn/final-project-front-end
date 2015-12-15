angular
  .module('worldApp', ['angular-jwt', 'ngResource', 'ui.router'])
  .constant('API', 'http://localhost:3000/api') 
  .config(MainRouter)
  .config(function($httpProvider){
    $httpProvider.interceptors.push('AuthInterceptor')
  });



function MainRouter($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('register', {
      url: '/register',
      templateUrl: '/views/register.html',
      controller: 'UserController as users'
    })
    .state('login', {
      url:'/login',
      templateUrl:'/views/login.html',
      controller: 'UserController as users'
    })
    .state('game', {
      url: '/game',
      templateUrl: '/views/game.html',
      controller: 'GameController as game'
    })
    .state('leaderboard', {
      url: '/leaderboard',
      templateUrl: '/views/leaderboard.html',
      controller: 'UserController as users'
    });

  $urlRouterProvider.otherwise('/');
}
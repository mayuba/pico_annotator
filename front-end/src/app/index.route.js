(function() {
  'use strict';

  angular
  .module('picoAnnotator')
  .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    }).state('auth', {
      url: '/auth',
      templateUrl: 'app/components/login/login.html',
      controller: 'LoginController',
      controllerAs: 'log'
    }).state('register', {
      url: '/register',
      templateUrl: 'app/components/register/register.html',
      controller: 'RegisterController',
      controllerAs: 'regis'
    })
    .state('article', {
      url: '/article/:item',
      templateUrl: 'app/components/articles/article.html',
      controller: 'ArticleController',
      controllerAs: 'art'
    });



    $urlRouterProvider.otherwise('/');
  }

})();

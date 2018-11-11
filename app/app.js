angular.module('myApp', ['ui.router'])
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('main', {
        url: '/',
        component: 'mainApp',
      })
      .state('form', {
        url: '/form',
        component: 'formApp'
      });

    $urlRouterProvider.otherwise('/');
  });


angular
  .module('TodoApp', ['ui.router', 'ngResource'])
  .config(config)
  .factory('TodoFactory', TodoFactory)
  .controller('TodoIndexController', TodoIndexController);


/*
* CONFIG
*/
config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function config($stateProvider, $urlRouterProvider, $locationProvider) {
  console.log('config');
  //this allows us to use routes without hash params!
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

      // for any unmatched URL redirect to /
  $urlRouterProvider.otherwise("/");

   $stateProvider
    .state('home', {
      url: "/",
      templateUrl: 'templates/todos/index.html',
      controller: 'TodoIndexController',
      controllerAs: 'index'
    });
  }


/*
* FACTORY
*/
TodoFactory.$inject = ['$resource'];
function TodoFactory($resource) {
  var service = {};
  return service;
}


/*
* CONTROLLER
*/
TodoIndexController.$inject = ['TodoFactory'];
function TodoIndexController (TodoFactory) {
  var vm = this;
  console.log('Your controller!');
}

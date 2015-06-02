(function(){

  angular
    .module('myApp', ['ngNewRouter', 'app.home'])
    .controller('AppController', AppController);

  AppController.$routeConfig = [
    { path: '/',            component: 'home'   },
    { path: '/detail/:id',  component: 'detail' }
  ];

  function AppController ($router) {

  }

  AppController.$inject = ['$router'];


})();

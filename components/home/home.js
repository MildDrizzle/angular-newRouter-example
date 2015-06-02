(function() {

  angular
    .module('app.home', [])
    .controller('HomeController', HomeController);

  function HomeController () {
    this.name = "Carlos Azaustre";
  }

})();

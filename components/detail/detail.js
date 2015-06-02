(function (){

  angular
    .module('app.detail', ['ngNewRouter'])
    .controller('DetailController', DetailController);

  function DetailController ($routeParams) {
    this.id = $routeParams.id;
  }

})();

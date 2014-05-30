(function() {
  "use strict";

  angular.module('Fundbase.controllers', [])
    .controller('PizzasController', ['$scope', function($scope) {
      $scope.pizza = {name: 'Pepperoni'}

    }]);


})();

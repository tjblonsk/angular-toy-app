"use strict";

  angular.module('Fundbase.controllers', [])
    .controller('PizzasController', ['$scope', 'pizzasRepo', function($scope, pizzasRepo) {
      $scope.pizzasRepo = pizzasRepo;
      $scope.pizzas = $scope.pizzasRepo.getPizzas().success(function(resp) {
        $scope.pizzas = resp;
      });;

    }])
    .controller('OrderController', ['$scope', 'orderRepo', function($scope, orderRepo) {
      $scope.orderRepo = orderRepo;
      $scope.items = $scope.orderRepo.getItems();

    }]);

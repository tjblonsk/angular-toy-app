'use strict';

angular.module('Fundbase.directives', []).
  directive('fbPizza', function() {
    return {
      restrict: 'E',

      replace: false,

      controller: function($scope, orderRepo) {

        $scope.addToOrder = function(pizza) {
          orderRepo.addItem(pizza);

        }
      }
    };
  })
  .directive('fbOrder', function() {
    return {
      restrict: 'E',

      controller: function($scope, orderRepo) {
        $scope.submitOrder = function() {

          $scope.orderTime = $scope.orderRepo.sendOrder().success(function(resp) {
            // Assuming deliveryTime is in milliseconds
            $scope.orderTime = (resp.deliveryTime / 1000) / 60;
          });;

          $scope.items = [];

          $scope.confirm = true;

        }
      }
    }
  })

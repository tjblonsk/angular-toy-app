'use strict';

describe('controllers', function()
  describe('PizzasController', function() {
    var pizzasController, scope, $httpBackend, pizzas;

    beforeEach(module('Fundbase'));

    beforeEach(inject(function($rootScope, _$httpBackend_, $controller) {

      pizzas = [
        {
          "name": "Margherita",
          "price": 5,
          "ingredients": [
            "tomato",
            "mozzarella"
          ]
        },
        {
          "name": "Bufala",
          "price": 6,
          "ingredients": [
            "tomato",
            "mozarella di bufala"
          ]
        }
      ]

      $httpBackend = _$httpBackend_;
      $httpBackend.whenGET('/server/pizzas.json').respond(pizzas);

      var scope = $rootScope.new();

      var pizzasController = $controller('PizzasController', { scope: $scope });

    }));

    it('should populate scope.pizzas', function() {
      $scope.digest();
      $httpBackend.flush();

      expect(scope.pizzas.length).toBe(2);
    });

  });
);

'use strict';

describe('Controllers', function() {

  beforeEach(module('Fundbase.controllers', 'Fundbase.services'));

  describe('PizzasController', function() {

    var pizzasController, scope, $httpBackend, $rootScope, pizzas, pizzasRepo;

    beforeEach(inject(function(_$rootScope_, _$httpBackend_, $controller, _pizzasRepo_) {

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
      $httpBackend.whenGET('server/pizzas.json').respond(pizzas);

      $rootScope = _$rootScope_;

      scope = $rootScope.$new();

      pizzasRepo = _pizzasRepo_;
      pizzasController = $controller('PizzasController', { $scope: scope });

      spyOn(scope.pizzasRepo, 'getPizzas');
      scope.$digest();
      $httpBackend.flush();

    }));


    it('sets scope.pizzasRepo', function() {
      expect(scope.pizzasRepo).toBe(pizzasRepo);
    });

    it('should populate scope.pizzas', function() {
      expect(scope.pizzas.length).toBe(2);
    });

    // TODO: Make this pass
    xit('should call #getPizzas', function() {
      expect(scope.pizzasRepo.getPizzas).toHaveBeenCalled();
    });

  });

  describe('OrderController', function() {

    var orderController, scope, $httpBackend, $rootScope, items, orderRepo, pizzas;

    beforeEach(inject(function(_$rootScope_, _$httpBackend_, $controller, _orderRepo_) {

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
      $httpBackend.whenGET('server/pizzas.json').respond(pizzas);

      $rootScope = _$rootScope_;

      scope = $rootScope.$new();

      orderRepo = _orderRepo_;
      orderController = $controller('OrderController', { $scope: scope });

      spyOn(scope.orderRepo, 'getItems');
      scope.orderRepo.addItem(pizzas[0]);
      scope.$digest();
    }));


    it('sets scope.orderRepo', function() {
      expect(scope.orderRepo).toBe(orderRepo);
    });

    it('should populate scope.items', function() {
      expect(scope.items.length).toBe(1);
    });

    // TODO: Make this pass
    xit('should call #getItems', function() {
      expect(scope.orderRepo.getItems).toHaveBeenCalled();
    });

  });


});

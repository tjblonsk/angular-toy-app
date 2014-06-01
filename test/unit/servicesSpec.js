'use strict';

describe('Services', function() {

  beforeEach(module('Fundbase.services'));

  describe('pizzasRepo', function() {
    var pizzasRepo, $httpBackend,
    pizzas =
      [
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
      ],
    response;


    beforeEach(inject(function(_$httpBackend_, _pizzasRepo_) {
      $httpBackend = _$httpBackend_;
      pizzasRepo = _pizzasRepo_;

      $httpBackend.whenGET('server/pizzas.json')
        .respond(pizzas);
    }));


    describe('#getPizzas', function() {

      beforeEach(function() {
        pizzasRepo.getPizzas();
      });

      it('should make a get request to pizzas.json', function() {
        $httpBackend.expectGET('/server/pizzas.json');
      });

    });

  });


  describe('orderRepo', function() {

    var orderRepo, $httpBackend,
      pizzas =
        [
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
        ],
      items;

    beforeEach(inject(function(_$httpBackend_, _orderRepo_) {
      $httpBackend = _$httpBackend_;
      orderRepo = _orderRepo_;
      orderRepo.addItem(pizzas[0]);
    }));

    it('should add an item to items array', function() {
      expect(orderRepo.items.length).toBe(1);
    });

    it('should return an array of items', function() {
      items = orderRepo.getItems();
      expect(items).toEqual([pizzas[0]])
    });

  });

});

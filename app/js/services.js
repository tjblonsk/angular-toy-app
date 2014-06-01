'use strict';

angular.module('Fundbase.services', []).
  service('pizzasRepo', function($http) {

    this.getPizzas = function() {
      return $http.get('server/pizzas.json');
    }

  })
  .service('orderRepo', function($http) {
    this.items = [];

    this.addItem = function(item) {
      this.items.push(item);
    }

    this.getItems = function() {
      return this.items;
    }

    this.sendOrder = function() {
      return $http.get('server/order.json');
    }

  });

Challenge for Frontend Developer
================================

To better assess a candidates development skills, we would like to provide the following challenge. This is intendend to be developed in a pair programming session within an hour of time.

Prerequisites
-------------

* [Git](http://git-scm.com/)
* [npm](https://www.npmjs.org/)
* [Bower](http://bower.io/)

Project description
-------------------

We want to develop a small web app that allows users to order pizza.

First of all we'll display the list of pizzas with ingredients and prices. Data will be loaded from `server/pizzas.json`.

When the user chooses something from the list the order summary will update dynamically.

There will be a button to confirm the order. An ajax call will be performed to `server/order.json` and the result will be displayed as a message like this: "Your order will be delivered in x minutes".

You can use any library/framework/plugin you want.

Please use some template library (http://handlebarsjs.com/, http://mustache.github.io/, ...).

The app must be a single page JS-based application. That means that I load just one html file, if you want to add some navigation you have to implement it via JS.

If you can display discounts for pizzas it's a plus.

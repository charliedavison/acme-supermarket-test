# ACME Supermarket

## Test Solution

### Setup

1. npm install
2. npm run build
3. npm test
4. Open public/index.html in your browser

### Enhancements

Were I to continue working on this problem I'd consider the following - 

1. No server element to the solution currently, however this could easily be acheived with the addition of express or a similar framework.

2. The size of the solution doesn't really warrant a separate state library at the moment but should it grow beyond it's current state, something like Redux or Flux could be brought in to handle this.



## Description of the problem
 Create a solution for the ACME Supermarket problem.

ACME's quest for global domination has prompted us to open a supermarket – we sell only three products:

    Product code        Name            Price

    FR1                 Fruit tea       £ 3.11
    SR1                 Strawberries    £ 5.00
    CF1                 Coffee          £11.23

Our CEO is a big fan of buy-one-get-one-free offers and of fruit tea. He wants us to add a rule to do this.

The COO, though, likes low prices and wants people buying strawberries to get a price discount for bulk purchases. If you buy 3 or more strawberries, the price should drop to £4.50.
Our check-out can scan items in any order, and because the CEO and COO change their minds often, it needs to be flexible regarding our pricing rules.

The interface to our basket looks like this (shown in JavaScript):

    var basket = new Basket(pricingRules)
    basket.add(item)
    basket.add(item)
    var price = basket.total()

Implement a basket system that fulfills these requirements in JavaScript.

Test Data:

    Basket: FR1, SR1, FR1, CF1
    Total price expected: £19.34

    Basket: FR1, FR1
    Total price expected: £3.11

    Basket: SR1, SR1, FR1, SR1
    Total price expected: £16.61

import Basket from './../src/lib/basket.js';
import rules from './../src/lib/rules.js'

describe('Basket', () => {

    let basket;

    beforeEach(() => {
        basket = new Basket(rules);
    });

    afterEach(() => {
        basket = null;
    });

    test('Should be empty when initialised', () => {
        expect(basket.totalItems).toEqual(0);
    });

    test('Adding an item increases the number of items in the basket', () => {
        basket.add('FR1');
        expect(basket.totalItems).toEqual(1);
    });

    test('Should return correct total for bulk offer', () => {
        basket.add('SR1');
        basket.add('FR1');
        basket.add('SR1');
        basket.add('SR1');
        expect(basket.total()).toEqual(16.61);
    });

    test('Should return correct total for BOGOF offer', () => {
        basket.add('FR1');
        basket.add('FR1');
        expect(basket.total()).toEqual(3.11);
    });

    test('Should return correct total for no offer', () => {
        basket.add('FR1');
        basket.add('SR1');
        basket.add('FR1');
        basket.add('CF1');
        expect(basket.total()).toEqual(19.34);
    });

});
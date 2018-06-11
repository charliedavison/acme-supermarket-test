import products from './products.js';
import constants from './constants.js';

class Basket {
    constructor(productRules) {
        this.items = {};
        this.productRules = productRules;
    };

    get totalItems() {
        return Object.keys(this.items).reduce((acc, item) => {
            acc += this.items[item].quantity;
            return acc;
        }, 0);
    }
    
    add(item) {
        if (this.items[item]) {
            this.items[item].quantity++;
            return;
        };

        this.items[item] = Object.assign({ quantity: 1 }, products[item] );
    };

    calculateDiscounts(productRules, item) {
        const rule = productRules[item.productCode];

        if (!rule) {
            return item.price;
        }

        switch (rule.discountType) {
            case constants.DISCOUNT_TYPES.BULK:
                if (item.quantity >= rule.bulkMinimum) {
                    return (item.price - (item.price * (rule.discountPercent / 100))) * item.quantity;
                }
                return item.price;

            case constants.DISCOUNT_TYPES.BOGOF:
                return item.quantity % 2 === 0 ? (item.quantity / 2) * item.price : (((item.quantity - 1) / 2) * item.price) + item.price;

            default:
                return item.price;
        }
    };

    total() {
        let total = 0.0;

        Object.keys(this.items).forEach(item => {
            total += this.calculateDiscounts(this.productRules, this.items[item]);
        });
        return parseFloat(total.toFixed(2));
    };
};
module.exports = Basket;

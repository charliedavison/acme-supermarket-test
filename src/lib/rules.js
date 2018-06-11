import constants from './constants.js';

module.exports = {
    'FR1': {
        discountType: constants.DISCOUNT_TYPES.BOGOF
    },
    'SR1': {
        discountType: constants.DISCOUNT_TYPES.BULK,
        bulkMinimum: 3,
        discountPercent: 10
    }
}
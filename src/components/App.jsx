import React from 'react';
import Header from './Header.jsx';
import BasketView from './BasketView.jsx';
import ProductsView from './ProductsView.jsx';
import Total from './Total.jsx';

import Basket from './../lib/basket.js';
import products from './../lib/products.js';
import rules from './../lib/rules.js';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: undefined
        };

        this.basket = new Basket(rules);

        this.addItem = this.addItem.bind(this);
    };

    addItem(item) {
        this.basket.add(item);
        this.setState({ items: this.basket.items })
    }

    render() {
        return (
            <div className="app-container">
                <Header />
                <ProductsView products={products} onClickProduct={this.addItem} />
                <BasketView items={this.state.items} />
                <Total subtotal={this.basket.subtotal} total={this.basket.total()} />
            </div>
        );
    };
};
module.exports = App;

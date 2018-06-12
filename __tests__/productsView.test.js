import React from 'react';
import { shallow } from 'enzyme';
import ProductsView from './../src/components/ProductsView.jsx';
import products from './../src/lib/products.js';

describe('<ProductsView />', () => {
    let component;
    
    let props = {
        products,
        onClickProduct: jest.fn()
    };

    beforeEach(() => {
        component = shallow(<ProductsView {...props} />);
    });

    afterEach(() => {
        component = null;
    });

    test('Should match snapshot', () => {
        expect(component).toMatchSnapshot();
    });

    test('Should contain correct number of products', () => {
        const numberOfProducts = Object.keys(products).length;
        expect(component.find('.products-container').children()).toHaveLength(numberOfProducts);
    });

});
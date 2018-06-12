import React from 'react';
import { shallow } from 'enzyme';
import Product from './../src/components/Product.jsx';
import products from './../src/lib/products.js';

describe('<Product />', () => {
    let component;

    let props = {
        product: products.FR1,
        onClick: jest.fn()
    };

    beforeEach(() => {
        component = shallow(<Product {...props} />);
    });

    test('Should match snapshot', () => {
        expect(component).toMatchSnapshot();
    });

    test('Clicking component should call the passed in callback', () => {
        expect(props.onClick).toHaveBeenCalledTimes(0);
        component.find('.product').simulate('click');
        expect(props.onClick).toHaveBeenCalledTimes(1);
    });
});
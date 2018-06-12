import React from 'react';
import { shallow } from 'enzyme';
import BasketView from './../src/components/BasketView.jsx';

describe('<BasketView />', () => {
    let component;
    
    afterEach(() => {
        component = null;
    });

    describe('No Items', () => {

        beforeEach(() => {
            component = shallow(<BasketView />);
        });

        test('Should match snapshot', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('Has Items', () => {

        const props = {
            items: {
                "CF1": { "quantity": 1, "productCode": "CF1", "name": "Coffee", "price": 11.23, "image": "coffee.jpg" }
            }
        };

        beforeEach(() => {
            component = shallow(<BasketView {...props} />);
        });

        test('Should match snapshot', () => {
            expect(component).toMatchSnapshot()
        });

    });
});
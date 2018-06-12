import React from 'react';
import { shallow } from 'enzyme';
import Total from './../src/components/Total.jsx';

describe('<Total />', () => {

    test('Should match snapshot', () => {
        const component = shallow(<Total />);
        expect(component).toMatchSnapshot();
    });

    test('Should show correct totals where discount has been applied', () => {
        const props = {
            subtotal: 20,
            total: 13
        };
        const component = shallow(<Total {...props} />);

        expect(component.find('.total').childAt(0).text()).toContain(`£20`);
        expect(component.find('.total').childAt(1).text()).toContain(`-£7`);
        expect(component.find('.total').childAt(2).text()).toContain(`£13`);
    });

    test('Should show correct totals where no discount has been applied', () => {
        const props = {
            subtotal: 20,
            total: 20
        };
        const component = shallow(<Total {...props} />);

        expect(component.find('.total').childAt(0).text()).toContain(`£20`);
        expect(component.find('.total').childAt(1).text()).toContain(`-£0`);
        expect(component.find('.total').childAt(2).text()).toContain(`£20`);
    });
});
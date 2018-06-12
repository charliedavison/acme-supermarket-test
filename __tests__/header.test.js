import React from 'react';
import { shallow } from 'enzyme';
import Header from './../src/components/Header.jsx';

describe('<Header />', () => {
    test('Should match snapshot', () => {
        const component = shallow(<Header />);
        expect(component).toMatchSnapshot();
    });
});
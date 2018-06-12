import React from 'react';
import PropTypes from 'prop-types';

class BasketView extends React.Component {
    constructor(props) {
        super(props);

        this.renderItems.bind(this);
    };

    renderItems() {
        return Object.keys(this.props.items).map(item => {
            return (
                <tr key={`basketItem_${item}`}>
                    <td>{this.props.items[item].name}</td>
                    <td>{this.props.items[item].quantity}</td>
                    <td>{`£${this.props.items[item].price}`}</td>
                </tr>
            )
        });
    };

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>{'Item Description'}</th>
                        <th>{'Quantity'}</th>
                        <th>{'Price'}</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderItems()}
                </tbody>
            </table>
        );
    }
};
BasketView.defaultProps = {
    items: {}
};
BasketView.propTypes = {
    items: PropTypes.object.isRequired
};
module.exports = BasketView;

import React from 'react';
import PropTypes from 'prop-types';

class Total extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className="total">
                <div>{`Subtotal: £${this.props.subtotal}`}</div>
                <div>{`Discounts: -£${parseFloat((this.props.subtotal - this.props.total).toFixed(2))}`}</div>
                <div className="text-bold">{`Total: £${this.props.total}`}</div>
            </div>
        );
    }
};
Total.defaultProps = {
    subtotal: 0.0,
    total: 0.0
};
Total.propTypes = {
    subtotal: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
};
module.exports = Total;
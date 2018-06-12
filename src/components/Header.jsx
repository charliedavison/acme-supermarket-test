import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className="header">
                <h1>ACME Supermarket</h1>
            </div>
        )
    }
};
Header.defaultProps = {
    basketItemCount: 0
};
Header.propTypes = {
    basketItemCount: PropTypes.number.isRequired
};
module.exports = Header;

import React from 'react';
import PropTypes from 'prop-types';

import Product from './Product.jsx';

class ProductsView extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className="products-container">
                {Object.keys(this.props.products).map(product => {
                    return (
                        <Product
                            key={product}
                            product={this.props.products[product]}
                            onClick={this.props.onClickProduct} />
                    );
                })}
            </div>
        );
    };
};
ProductsView.defaultProps = {
    products: {}
};
ProductsView.propTypes = {
    products: PropTypes.object.isRequired,
    onClickProduct: PropTypes.func.isRequired
};
module.exports = ProductsView;


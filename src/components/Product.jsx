import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    };

    onClick() {
        this.props.onClick(this.props.product.productCode);
    }

    render() {
        return (
            <div onClick={this.onClick} className="product">
                <img src={`img/${this.props.product.image}`} className="product-image" />
                <div className="product-name">{this.props.product.name}</div>
            </div>
        )
    }
};
Product.propTypes = {
    product: PropTypes.shape({
        productCode: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired
    }).isRequired,
    onClick: PropTypes.func.isRequired
}
module.exports = Product;
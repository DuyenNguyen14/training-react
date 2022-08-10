import React, { Component } from 'react'
import ItemProduct from './ItemProduct';

export default class ProductList extends Component {

    renderProductItem = () => {
        let { product, viewDetail } = this.props;
        return product.map((car, index) => {
            return (
                <div className="col-3" key={car.id}>
                    <ItemProduct item={car} viewDetail={viewDetail} />
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <h3>Product List</h3>
                <div className="row">
                    {this.renderProductItem()}
                </div>
            </div>
        )
    }
}
import React, { Component } from "react";

export default class SanPham extends Component {
  render() {
    const { product, seeDetail, addToCart } = this.props;
    return (
      <div className="col-4">
        <div className="card">
          <img height={300} src={product.hinhAnh} alt="..." />
          <div className="card-body">
            <h4>{product.tenSP}</h4>
            <button
              className="btn btn-success"
              onClick={() => seeDetail(product)}
            >
              See details
            </button>
            <button
              className="btn btn-danger ms-2"
              onClick={() => addToCart(product)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}

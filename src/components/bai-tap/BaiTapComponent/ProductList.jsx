import React, { Component } from "react";
import Product from "./Product";

export default class ProductList extends Component {
  renderProductCard = () => {
    // let mangSanPham = this.props.prodList_props;
    let { prodList, xemChiTiet } = this.props;

    return prodList.map((prod, index) => {
      return (
        <div className="col-4" key={index}>
          <Product prod={prod} xemChiTiet={xemChiTiet} />
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <h3 className="text-center">Best Smartphones</h3>
        <div className="row">{this.renderProductCard()}</div>
      </div>
    );
  }
}

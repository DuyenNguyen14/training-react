import React, { Component } from "react";
import CartRedux from "./CartRedux";
import ProductListRedux from "./ProductListRedux";
// import thư viện connect kết nối react component và redux store
import { connect } from "react-redux";

class BTGioHangRedux extends Component {

  renderSL = () => {
    return this.props.gioHang.reduce((tongSL, spGH, index) => {
      return (tongSL += spGH.soLuong);
    }, 0);
  };
  
  render() {
    return (
      <div className="container py-5">
        <h3>Danh sách sản phẩm:</h3>
        <button
          data-toggle="modal"
          data-target="#modalId"
          className="btn text-danger float-right"
        >
          <b>Cart({this.renderSL()})</b>
        </button>
        <ProductListRedux />
        <CartRedux />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    gioHang: state.stateGioHang.gioHang,
  };
};

export default connect(mapStateToProps)(BTGioHangRedux);

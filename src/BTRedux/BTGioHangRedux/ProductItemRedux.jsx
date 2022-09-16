import React, { Component } from "react";
// Sử dụng thư viện kết nối với redux
import { connect } from "react-redux";

class ProductItemRedux extends Component {
  render() {
    const { product } = this.props;
    return (
      <div className="card text-dark bg-light">
        <img
          className="card-img-top"
          height={350}
          src={product.hinhAnh}
          alt={product.tenSP}
        />
        <div className="card-body">
          <h4 className="card-title">{product.tenSP}</h4>
          <p className="card-text">{product.giaBan.toLocaleString()}</p>
          <button
            className="btn btn-warning"
            onClick={() => this.props.addToCart(product)}
          >
            Add to cart
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (sanPham) => {
      let sanPhamGioHang = {
        maSP: sanPham.maSP,
        tenSP: sanPham.tenSP,
        hinhAnh: sanPham.hinhAnh,
        soLuong: 1,
        giaBan: sanPham.giaBan,
      };
      // console.log(sanPhamGioHang);

      // Tạo ra action
      let action = {
        type: "ADD_TO_CART",
        sanPhamGioHang, // dữ liệu gửi đi
      };

      // Dùng hàm dispatch từ redux gửi dữ liệu lên reducer
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(ProductItemRedux);

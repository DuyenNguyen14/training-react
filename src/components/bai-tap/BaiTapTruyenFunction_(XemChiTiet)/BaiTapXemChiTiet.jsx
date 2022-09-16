import React, { Component } from "react";
import CartModal from "./CartModal";
import DanhSachSanPham from "./DanhSachSanPham";

const PHONE_DATA = [
  {
    maSP: 1,
    tenSP: "VinSmart Live",
    manHinh: "AMOLED, 6.2, Full HD+",
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 5700000,
    hinhAnh: "./img/vsphone.jpg",
  },
  {
    maSP: 2,
    tenSP: "Meizu 16Xs",
    manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
    heDieuHanh: "Android 9.0 (Pie); Flyme",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 7600000,
    hinhAnh: "./img/meizuphone.jpg",
  },
  {
    maSP: 3,
    tenSP: "Iphone XS Max",
    manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
    heDieuHanh: "iOS 12",
    cameraSau: "Chính 12 MP & Phụ 12 MP",
    cameraTruoc: "7 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 27000000,
    hinhAnh: "./img/applephone.jpg",
  },
];

/*
  1. Xác định dữ liệu thành phần thay đổi
  2. Xác định nút xử lý làm thay đổi dữ liệu đó
  3. Đặt dữ liệu đó ở đâu
*/

export default class BaiTapXemChiTiet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [
        // {
        //   maSP: 1,
        //   tenSP: "VinSmart Live",
        //   giaBan: 5700000,
        //   hinhAnh: "./img/vsphone.jpg",
        //   soLuong: 1,
        // },
      ],
    };
  }

  addToCart = (productClicked) => {
    // console.log(productClicked);
    // b1: từ sp được chọn tạo ra sp giỏ hàng
    let prodCart = {
      maSP: productClicked.maSP,
      tenSP: productClicked.tenSP,
      giaBan: productClicked.giaBan,
      hinhAnh: productClicked.hinhAnh,
      soLuong: 1,
    };
    // console.log(prodCart);
    // kiểm tra sp được chọn đã có trong giỏ hàng chưa
    let cartUpdated = [...this.state.cart]; // clone cart từ state ra để thay đổi số lượng
    console.log(cartUpdated);
    let index = cartUpdated.findIndex((prod) => prod.maSP === prodCart.maSP);
    // Trường hợp sp được click đã có trong giỏ hàng
    if (index !== -1) {
      cartUpdated[index].soLuong += 1;
    } else {
      // Trường hợp sp được click chưa có trong giỏ hàng
      cartUpdated.push(prodCart);
    }

    this.setState({
      cart: cartUpdated,
    });
  };

  delFromCart = (prodIdClicked) => {
    // let cartUpdate = [...this.state.cart];
    // let prodDelIndex = cartUpdate.findIndex(
    //   (prod) => prod.maSP === prodIdClicked
    // );
    // cartUpdate.splice(prodDelIndex, 1);

    let cartUpdate = this.state.cart.filter(
      (prod) => prod.maSP !== prodIdClicked
    );

    this.setState({
      cart: cartUpdate,
    });
  };

  changeQuant = (
    prodId,
    inOrDecrease // inOrDecrease == true: tăng số lượng, false giảm số lượng
  ) => {
    let cartUpdate = [...this.state.cart];
    let index = cartUpdate.findIndex((prod) => prod.maSP === prodId);
    // xử lý tăng giảm
    if (inOrDecrease) {
      cartUpdate[index].soLuong += 1;
    } else {
      if (cartUpdate[index].soLuong > 1) {
        cartUpdate[index].soLuong -= 1;
      } else {
        cartUpdate.splice(index, 1);
      }
    }

    this.setState({
      cart: cartUpdate,
    });
  };

  render() {
    let tongSPTrongGH = this.state.cart.reduce((tongSL, spGH, index) => {
      return (tongSL += spGH.soLuong);
    }, 0);

    return (
      <div className="container py-3">
        <h3 className="text-center text-secondary">
          BÀI TẬP TRUYỀN FUNCTION - GIỎ HÀNG
        </h3>
        <button
          className="btn text-danger float-right"
          data-toggle="modal"
          data-target="#modalId"
        >
          <b>Cart ({tongSPTrongGH})</b>
        </button>
        <DanhSachSanPham mangSP={PHONE_DATA} addToCart={this.addToCart} />
        <CartModal
          cart={this.state.cart}
          delFromCart={this.delFromCart}
          changeQuant={this.changeQuant}
        />
      </div>
    );
  }
}

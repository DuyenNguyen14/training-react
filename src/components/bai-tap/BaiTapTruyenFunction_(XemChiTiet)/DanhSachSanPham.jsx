import React, { Component } from "react";
import SanPham from "./SanPham";

export default class DanhSachSanPham extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productDetail: props.mangSP[0],
    };
  }

  // seeDetail button
  seeDetail = (prod) => {
    // change value of productDetail
    this.setState({
      productDetail: prod,
    });
  };

  render() {
    const { mangSP, addToCart } = this.props;
    const { productDetail } = this.state;
    return (
      <div className="row mt-5">
        {mangSP.map((phone, index) => {
          return (
            <SanPham
              key={index}
              seeDetail={this.seeDetail}
              product={phone}
              addToCart={addToCart}
            />
          );
        })}
        <div className="row mt-3">
          <div className="col-6">
            <h3 className="text-center">{productDetail.tenSP}</h3>
            <img
              height={500}
              src={productDetail.hinhAnh}
              alt={productDetail.tenSP}
            />
          </div>
          <div className="col-6">
            <h3>Phone details</h3>
            <table className="table">
              <tbody>
                <tr>
                  <td>Man hinh</td>
                  <td>{productDetail.manHinh}</td>
                </tr>
                <tr>
                  <td>He dieu hanh</td>
                  <td>{productDetail.heDieuHanh}</td>
                </tr>
                <tr>
                  <td>Camera truoc</td>
                  <td>{productDetail.cameraTruoc}</td>
                </tr>
                <tr>
                  <td>Camera sau</td>
                  <td>{productDetail.cameraSau}</td>
                </tr>
                <tr>
                  <td>RAM</td>
                  <td>{productDetail.ram}</td>
                </tr>
                <tr>
                  <td>ROM</td>
                  <td>{productDetail.rom}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

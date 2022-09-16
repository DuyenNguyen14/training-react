import React, { Component, Fragment } from "react";
import "./BaiTapBookingTicket.css";
import ThongTinDatGhe from "./ThongTinDatGhe";
import danhSachGheData from "../../data/danhSachGhe.json";
import HangGhe from "./HangGhe";

export default class BTChonGheXemPhim extends Component {
  renderHangGhe = () => {
    return danhSachGheData.map((hangGhe, index) => {
      return (
        <div key={index}>
          <HangGhe hangGhe={hangGhe}/>
        </div>
      );
    });
  };

  render() {
    return (
      <div
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundImage: "url('./img/bookingTicket/bgmovie.jpg')",
          backgroundSize: "100%",
        }}
      >
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,.8",
          }}
        >
          <div className="container-fluid">
            <div className="row py-5">
              <div className="col-8 text-center">
                <h1 className="text-warning">ĐẶT VÉ XEM PHIM CYBERSOFT.VN</h1>
                <div className="mt-3 text-light" style={{ fontSize: "15px" }}>
                  <h5>Màn hình</h5>
                </div>
                <div className="d-flex justify-content-center mt-2">
                  <div className="screen"></div>
                </div>
                {this.renderHangGhe()}
              </div>
              <div className="col-4 py-5">
                <h2 className="text-warning text-center">
                  DANH SÁCH GHẾ BẠN CHỌN
                </h2>
                <ThongTinDatGhe />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

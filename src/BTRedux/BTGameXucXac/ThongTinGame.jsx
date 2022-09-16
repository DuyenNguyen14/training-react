import React, { Component } from "react";
import { connect } from "react-redux";

class ThongTinGame extends Component {
  render() {
    return (
      <div>
        <div className="display-4">
          BẠN CHỌN:
          <span className="text-danger">
            {this.props.taiXiu ? " Tài" : " Xỉu"}
          </span>
        </div>
        <div className="display-4">
          BÀN THẮNG:{" "}
          <span className="text-success">{this.props.soBanThang}</span>
        </div>
        <div className="display-4">
          TỔNG SỐ BÀN CHƠI:{" "}
          <span className="text-warning">{this.props.tongSoBanChoi}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    taiXiu: state.BTXucXacReducer.taiXiu,
    soBanThang: state.BTXucXacReducer.soBanThang,
    tongSoBanChoi: state.BTXucXacReducer.tongSoBanChoi,
  };
};

export default connect(mapStateToProps)(ThongTinGame);

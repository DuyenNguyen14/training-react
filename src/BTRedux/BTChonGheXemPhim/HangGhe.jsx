import React, { Component } from "react";
import { connect } from "react-redux";
import { datGheAction } from "../../redux/actions/BTDatVeActions";

class HangGhe extends Component {
  renderGhe = () => {
    const { hangGhe } = this.props;

    if (hangGhe.hang == "") {
      return hangGhe.danhSachGhe.map((hang, index) => {
        return (
          <button
            key={index}
            className="rowNumber"
            style={{ cursor: "default" }}
          >
            {hang.soGhe}
          </button>
        );
      });
    }

    return hangGhe.danhSachGhe.map((ghe, index) => {
      let disabled;
      if (!ghe.daDat) {
        disabled = false;
      }

      // xét trạng thái ghế đã được chọn
      let cssGheDaChon = "";
      if (ghe.daDat) {
        cssGheDaChon = "gheDuocChon";
      }
      // Xét trạng thái ghế đang đặt
      let cssGheDangChon = "";
      let indexGheDangChon = this.props.dsGheDangDat.findIndex(
        (gheDangChon) => gheDangChon.soGhe === ghe.soGhe
      );
      if (indexGheDangChon !== -1 && !ghe.daDat) {
        cssGheDangChon = "gheDangChon";
      }

      return (
        <button
          type="button"
          key={index}
          className={`ghe ${cssGheDaChon} ${cssGheDangChon}`}
          disabled={disabled}
          onClick={() => this.props.datGhe(ghe)}
        >
          {index + 1}
        </button>
      );
    });
  };

  render() {
    return (
      <div
        className="text-light text-left mt-3"
        style={{ marginLeft: "70px", fontSize: "20px", fontWeight: "500" }}
      >
        {this.props.hangGhe.hang}
        {this.renderGhe()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dsGheDangDat: state.BTDatVeReducer.dsGheDangDat,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    datGhe: (gheClicked) => {
      dispatch(datGheAction(gheClicked));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HangGhe);

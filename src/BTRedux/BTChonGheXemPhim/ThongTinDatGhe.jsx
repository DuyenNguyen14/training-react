import React, { Component } from "react";
import { connect } from "react-redux";
import { huyGheAction } from "../../redux/actions/BTDatVeActions";
import { HUY_GHE } from "../../redux/types/BTDatVeTypes";

class ThongTinDatGhe extends Component {
  render() {
    return (
      <div className="mt-3">
        <div className="btn-ghe">
          <div>
            <button className="gheDuocChon mr-2"></button>
            <span className="text-light" style={{ fontSize: "20px" }}>
              Ghế đã đặt
            </span>
          </div>

          <div className="mt-2">
            <button className="gheDangChon mr-2"></button>
            <span className="text-light" style={{ fontSize: "20px" }}>
              Ghế đang đặt
            </span>
          </div>

          <div className="mt-2">
            <button className="ghe mr-2" style={{ marginLeft: "0px" }}></button>
            <span className="text-light" style={{ fontSize: "20px" }}>
              Ghế chưa đặt
            </span>
          </div>
        </div>

        <div className="table-responsive mt-5">
          <table className="table text-light bg-dark" border={2}>
            <thead>
              <tr>
                <th scope="col">Số ghế</th>
                <th scope="col">Giá</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {this.props.dsGheDangDat.map((gheDangDat, index) => {
                return (
                  <tr key={index}>
                    <td>{gheDangDat.soGhe}</td>
                    <td>{gheDangDat.gia.toLocaleString()}VND</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() =>
                          this.props.dispatch(huyGheAction(gheDangDat.soGhe))
                        }
                      >
                        Huỷ
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <td className="text-right" colSpan={2}>
                  Tổng tiền
                </td>
                <td>
                  {this.props.dsGheDangDat
                    .reduce((tongTien, gheDangDat) => {
                      return (tongTien += gheDangDat.gia);
                    }, 0)
                    .toLocaleString()}
                  VND
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dsGheDangDat: state.BTDatVeReducer.dsGheDangDat,
  };
};

export default connect(mapStateToProps)(ThongTinDatGhe);

import React, { Component } from "react";
// Sử dụng thư viện connect để lấy dữ liệu từ store về
import { connect } from "react-redux";

class CartRedux extends Component {
  render() {
    console.log(this.props.gioHang);
    return (
      <div
        className="modal fade"
        id="modalId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modalTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalTitleId">
                Modal title
              </h5>
              <button
                type="button"
                className="btn btn-close"
                data-dismiss="modal"
                aria-label="Close"
              >
                X
              </button>
            </div>
            <div className="modal-body">
              <div className="container-fluid">
                <div className="table-responsive">
                  <table className="table table-light">
                    <thead>
                      <tr>
                        <th scope="col">Mã sản phẩm</th>
                        <th scope="col">Hình ảnh</th>
                        <th scope="col">Tên sản phẩm</th>
                        <th scope="col">Giá bán</th>
                        <th scope="col">Số lượng</th>
                        <th scope="col">Thành tiền</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.props.gioHang.map((sp) => {
                        return (
                          <tr key={sp.maSP}>
                            <td>{sp.maSP}</td>
                            <td>
                              <img
                                className="w-50"
                                src={sp.hinhAnh}
                                alt="..."
                              />
                            </td>
                            <td>{sp.tenSP}</td>
                            <td>{sp.giaBan.toLocaleString()}VND</td>
                            <td>
                              <button
                                className="btn btn-warning"
                                onClick={() =>
                                  this.props.thayDoiSL(sp.maSP, false)
                                }
                              >
                                -
                              </button>
                              <span className="mx-2">{sp.soLuong}</span>
                              <button
                                className="btn btn-success"
                                onClick={() =>
                                  this.props.thayDoiSL(sp.maSP, true)
                                }
                              >
                                +
                              </button>
                            </td>
                            <td>
                              {(sp.giaBan * sp.soLuong).toLocaleString()}VND
                            </td>
                            <td>
                              <button
                                className="btn btn-danger"
                                onClick={() => this.props.xoaGioHang(sp.maSP)}
                              >
                                Xoá
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (
  state // state là state tổng của ứng dụng chứa các state con (rootReducer)
) => {
  return {
    gioHang: state.stateGioHang.gioHang,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    xoaGioHang: (maSPClicked) => {
      let action = {
        type: "XOA_GIO_HANG",
        maSPClicked, // dữ liệu gửi đi
      };

      // dùng phương thức dispatch redux cung cấp để đưa dữ liệu lên reducer
      dispatch(action);
    },

    thayDoiSL: (maSPClicked, tangGiam) => {
      let action = {
        type: "THAY_DOI_SL",
        maSPClicked,
        tangGiam,
      };

      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartRedux);

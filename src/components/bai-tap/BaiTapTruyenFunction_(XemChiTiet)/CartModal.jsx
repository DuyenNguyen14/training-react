import React, { Component } from "react";

export default class CartModal extends Component {
  render() {
    const { cart, delFromCart, changeQuant } = this.props;
    return (
      <div>
        {/* Modal */}
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
                  Cart
                </h5>
                <button
                  type="button"
                  className="btn btn-close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  x
                </button>
              </div>
              <div className="modal-body">
                <div className="container-fluid">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Mã sản phẩm</th>
                        <th>Hình ảnh</th>
                        <th>Tên sản phẩm</th>
                        <th>Số lượng</th>
                        <th>Đơn giá</th>
                        <th>Thành tiền</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map((prod) => {
                        return (
                          <tr key={prod.maSP}>
                            <td>{prod.maSP}</td>
                            <td>
                              <img
                                src={prod.hinhAnh}
                                alt="..."
                                className="w-50"
                              />
                            </td>
                            <td>{prod.tenSP}</td>
                            <td>
                              <button
                                className="btn btn-danger ms-2"
                                onClick={() => changeQuant(prod.maSP, false)}
                              >
                                -
                              </button>
                              {prod.soLuong}
                              <button
                                className="btn btn-warning ms-2"
                                onClick={() => changeQuant(prod.maSP, true)}
                              >
                                +
                              </button>
                            </td>
                            <td>{prod.giaBan.toLocaleString()}VND</td>
                            <td>
                              {(prod.soLuong * prod.giaBan).toLocaleString()}VND
                            </td>
                            <td>
                              <button
                                className="btn btn-danger"
                                onClick={() => delFromCart(prod.maSP)}
                              >
                                Del
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan={4}></td>
                        <td>Tổng tiền:</td>
                        <td>
                          {cart
                            .reduce((total, prodCart, index) => {
                              return (total +=
                                prodCart.soLuong * prodCart.giaBan);
                            }, 0)
                            .toLocaleString()}
                          VND
                        </td>
                      </tr>
                    </tfoot>
                  </table>
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
      </div>
    );
  }
}

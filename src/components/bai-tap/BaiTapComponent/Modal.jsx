import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    const { sanPhamModal } = this.props;
    return (
      <div
        className="modal fade"
        id="modalId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modalTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalTitleId">
                {sanPhamModal.tenSP}
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
              <img className="w-100" src={sanPhamModal.hinhAnh} alt="..." />
              <p>{sanPhamModal.giaBan}</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

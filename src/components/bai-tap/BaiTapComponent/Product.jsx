import React, { Component } from "react";

export default class Product extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { prod, xemChiTiet } = this.props;
    return (
      <div className="card text-white bg-dark">
        <img
          className="card-img-top"
          src={prod.hinhAnh}
          alt="..."
          height={350}
        />
        <div className="card-body">
          <h4 className="card-title">{prod.tenSP}</h4>
          <p className="card-text">{prod.giaBan}</p>
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modalId"
            onClick={() => xemChiTiet(prod)}
          >
            Detail
          </button>
          <button className="btn btn-danger">Add to cart</button>
        </div>
      </div>
    );
  }
}

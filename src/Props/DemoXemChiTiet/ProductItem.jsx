import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {

        let { product, xemChiTiet } = this.props;
        let { hinhAnh, tenSP, giaBan } = product;

        return (
            <div className="card">
                <img src={hinhAnh} alt={tenSP} height={400} />
                <div className="card-body">
                    <h3>{tenSP}</h3>
                    <p>{giaBan}</p>
                    <button className="btn btn-success" onClick={() => {
                        { xemChiTiet(product) }
                    }}>Xem chi tiết</button>
                </div>
            </div>
        )
    }
}

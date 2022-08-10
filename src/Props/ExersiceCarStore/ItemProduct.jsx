import React, { Component } from 'react'

export default class ItemProduct extends Component {
    render() {
        let { item, viewDetail } = this.props;
        let { img, name, price } = item;
        return (
            <div className="card">
                <img src={img} alt={name} />
                <div className="card-body">
                    <h3>{name}</h3>
                    <p>{price}</p>
                    <button className="btn btn-success" onClick={() => {
                        viewDetail(item);
                    }} data-bs-toggle="modal" data-bs-target="#modelId">View detail</button>
                </div>
            </div>
        )
    }
}

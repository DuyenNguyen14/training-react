import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        const { item } = this.props; // bóc tách phần từ
        return (
            <div className='card'>
                <img src={item?.image} alt="..." />
                <div className="card-body">
                    <h3>{item?.name}</h3>
                    <p>{item?.price}$</p>
                    <button className="btn bg-dark text-white">Add to cart</button>
                </div>
            </div>
        )
    }
}

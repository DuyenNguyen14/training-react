import React, { Component } from 'react'

export default class Film_RCC extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        const { film_input } = this.props;
        const { hinhAnh, tenPhim, moTa } = this.props.film_input;

        return (
            <div className="card text-white bg-dark">
                <img className="card-img-top" src={film_input.hinhAnh} alt="Title" />
                <div className="card-body">
                    <h4 className="card-title">{film_input.tenPhim}</h4>
                    <p className="card-text">{moTa}</p>
                    <button className='btn btn-light'>Detail</button>
                </div>
            </div>
        )
    }
}

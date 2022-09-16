import React from 'react'

export default function Film_RFC(props) {

    let { film_input } = props;

    return (
        <div>
            <div className="card text-white bg-dark">
                <img className="card-img-top" src={film_input.hinhAnh} alt="Title" />
                <div className="card-body">
                    <h4 className="card-title">{film_input.tenPhim}</h4>
                    <p className="card-text">{film_input.moTa}</p>
                </div>
            </div>
        </div>
    )
}

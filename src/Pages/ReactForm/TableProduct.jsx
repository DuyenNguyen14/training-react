import React, { Component } from 'react'

export default class TableProduct extends Component {
    render() {
        let { arrProduct } = this.props;
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>image</th>
                        <th>name</th>
                        <th>price</th>
                        <th>type</th>
                        <th>description</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {arrProduct.map((prod, index) => {
                        return <tr key={index}>
                            <td>{prod.id}</td>
                            <td>
                                <img src={prod.img} alt="..." />
                            </td>
                            <td>{prod.name}</td>
                            <td>{prod.price}</td>
                            <td>{prod.type}</td>
                            <td>{prod.description}</td>
                            <td>
                                <button className="btn btn-danger" onClick={() => {
                                    this.props.delProduct(prod.id);
                                }}>Delete</button>
                                <button className="btn btn-warning ms-2">Edit</button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        )
    }
}

import React, { Component } from 'react'
import FormProd from './FormProd'
import TableProduct from './TableProduct'

export default class ReactForm extends Component {
    render() {
        return (
            <div className='container'>
                <h3>Product managenent</h3>
                <FormProd />
                <TableProduct />
            </div>
        )
    }
}

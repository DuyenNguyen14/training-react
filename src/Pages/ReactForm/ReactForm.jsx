import React, { Component } from 'react'
import FormProd from './FormProd'
import TableProduct from './TableProduct'

export default class ReactForm extends Component {

    state = {
        arrProduct: [
            { id: '1', name: 'product 1', price: 1000, img: 'https://picsum.photos/id/77/150/150', description: 'product 1 description', type: 'mobile' },
            { id: '2', name: 'product 2', price: 2000, img: 'https://picsum.photos/id/88/150/150', description: 'product 2 description', type: 'tablet' },
        ]
    }

    // hàm xử lý state phải nằm ở component chứa state
    addProduct = (newProd) => {
        console.log(newProd);
        let arrProductUpdate = [...this.state.arrProduct, { ...newProd }]; // rest operator: clone arrProduct cũ và thêm newProd vào

        // setState
        this.setState({
            arrProduct: arrProductUpdate
        }, () => {
            this.saveToLocalStorage();
        });
    };

    delProduct = (idDel) => {
        console.log(idDel);

        let arrProductUpdate = this.state.arrProduct.filter(prod => prod.id !== idDel);

        // setState
        this.setState({
            arrProduct: arrProductUpdate
        }, () => {
            this.saveToLocalStorage();
        });
    };

    saveToLocalStorage() {
        let value = JSON.stringify(this.state.arrProduct); // chuyển đổi object thành string
        localStorage.setItem('arrProduct', value);
    };

    getLocalStorage() {
        if (localStorage.getItem('arrProduct')) {
            let arrProduct = JSON.parse(localStorage.getItem('arrProduct')); // chuyển đổi string từ local storage thành object
            return arrProduct;
        };
        return [];
    }


    render() {
        return (
            <div className='container'>
                <h3>Product managenent</h3>
                <FormProd addProduct={this.addProduct} />
                <TableProduct arrProduct={this.state.arrProduct} delProduct={this.delProduct} />
            </div>
        )
    }
}

import React, { Component } from 'react'

export default class DataBinding extends Component {
    product = { // là một thuộc tính của lớp đối tượng DataBinding (có thể được gọi trong nhiều phương thức khác trong component này)
        id: 1,
        name: 'product 1',
        price: 1000,
        img: 'https://picsum.photos/id/3/200/200'
    };

    renderCardProduct = () => {

        // Nội dung render phải là string, boolean, number hoặc jsx (có thẻ bao phủ)
        return (
            <div className='card'>
                <img src={this.product.img} alt="..." />
                <div className="card-body bg-dark text-white">
                    <p>{this.product.name}</p>
                    <p>{this.product.price}</p>
                </div>
            </div>
        )
    }


    render() {
        // Khai báo biến (biến cục bộ, chỉ xài được trong phạm vi hàm render())
        const TITLE = "Cybersoft";
        const PERSON = {
            name: "Duyen",
            age: 25
        };

        const renderText = (tenLop) => {
            return `Hello ${tenLop}`;
        };

        return (
            <div className='container'>
                {/* Binding biến */}
                <p id='pText'>{TITLE}</p>
                <hr />
                <div className="card w-25 mt-2">
                    <img src="https://picsum.photos/200" alt="..." />
                    <div className="card-body">
                        <p>Name: {PERSON.name}</p>
                        <p>Age: {PERSON.age}</p>
                    </div>
                </div>
                <hr />

                {/* Binding hàm */}
                <h3>Binding gọi hàm: Chỗ gọi hàm sẽ hiển thị những gì mà hàm đó return. Cú pháp: {`{tenHam()}`}</h3>
                {renderText('Bootcamp28')}
                <hr />

                {/* Binding thuộc tính */}
                <h3>Binding thuộc tính tương tự binding biến và có thêm this.tenThuocTinh</h3>
                <div className='alert alert-primary'>
                    Product Info:
                    <p>id: {this.product.id}</p>
                    <p>name: {this.product.name}</p>
                    <img src={this.product.img} alt="..." width={200} />
                    <p>price: {this.product.price}</p>
                </div>
                <hr />

                {/* Binding phương thức */}
                <h3>Card Product</h3>
                <div className="w-25">
                    {this.renderCardProduct()}
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'

const DATA = [
    { id: 1, name: "Red car", price: 1000, img: './img/products/red-car.jpg' },
    { id: 2, name: "Back car", price: 1000, img: './img/products/black-car.jpg' },
    { id: 3, name: "Silver car", price: 1000, img: './img/products/silver-car.jpg' },
    { id: 4, name: "Steel car", price: 1000, img: './img/products/steel-car.jpg' }
]

export default class RenderWithMap extends Component {

    renderProduct = () => {
        // Cách 1: viết hàm tạo ra một mảng các đối tượng jsx <tr></tr>, chạy vòng lặp lấy dữ liệu từ mảng DATA --> gọi hàm databinding ra giao diện
        // output: [<tr></tr>,<tr></tr>]
        // const arrTrJsx = [];
        // for (let index = 0; index < DATA.length; index++) {
        //     let prod = DATA[index];
        //     let tr = <tr key={index}>
        //         <td>{prod.id}</td>
        //         <td>{prod.name}</td>
        //         <td>{prod.price}</td>
        //         <td>
        //             <img src={prod.img} alt="..." width={150} />
        //         </td>
        //     </tr>;
        //     // Đưa vào mảng arrTrJsx
        //     arrTrJsx.push(tr);
        // }
        // return arrTrJsx;

        // Cách 2: Dùng .map(): biến đổi mảng DATA cho sẵn chứa các đối tượng dữ liệu của product thành một mảng arrJSX chứa các đối tượng jsx <tr></tr>
        return DATA.map((prod, index) => { // return của hàm renderProduct()
            // return của hàm map
            return <tr key={index}>
                <td>{prod.id}</td>
                <td>{prod.name}</td>
                <td>{prod.price}</td>
                <td>
                    <img src={prod.img} alt="..." width={150} />
                </td>
            </tr>;
        })
    }

    render() {
        console.log(<div></div>)
        return (
            // [< div className='container' key={1}>1</div >, <div className='container' key={2}>2</div>]

            <div className="container">
                <h3>Render table product</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>price</th>
                            <th>image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderProduct()}
                    </tbody>
                </table>
            </div>
        )
    }
}

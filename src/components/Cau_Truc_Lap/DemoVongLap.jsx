import React, { Component } from 'react'

export default class DemoVongLap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mangSanPham: [
                { maSP: 1, tenSP: "iPhoneX", gia: 1000 },
                { maSP: 2, tenSP: "Samsung Galaxy Note 10", gia: 2000 },
                { maSP: 1, tenSP: "Huawei", gia: 3000 }
            ]
        }
    }

    // Viết phương thức render các sản phẩm thành các tag tr của table
    renderSP = () => {
        // let contentTbl = [];

        // Cách 2: Dùng hàm .map() để tạo động các tag jsx từ mảng
        return this.state.mangSanPham.map((sanPham, index) => {
            return (
                <tr key={index}>
                    <td>{sanPham.maSP}</td>
                    <td>{sanPham.tenSP}</td>
                    <td>{sanPham.gia}</td>
                </tr>
            )
        });

        // Cách 1: dùng vòng lặp for
        // for (let i = 0; i < this.state.mangSanPham.length; i++) {
        //     let sanPham = this.state.mangSanPham[i];
        //     contentTbl.push(
        //         <tr key={i}>
        //             <td>{sanPham.maSP}</td>
        //             <td>{sanPham.tenSP}</td>
        //             <td>{sanPham.gia}</td>
        //         </tr>
        //     );
        // }
    }

    render() {
        // khai báo biến ở đây
        return (
            <div className='container'>
                <h3 className='bg-dark p-5 text-center text-white'>Demo Vòng lặp React</h3>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Mã sản phẩm</th>
                            <th>Tên sản phẩm</th>
                            <th>Giá sản phẩm</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderSP()}
                        {
                            // Có thể viết cách 1 trực tiếp ở đây
                            // this.state.mangSanPham.map((sanPham, index) => {
                            //     return (
                            //         <tr key={index}>
                            //             <td>{sanPham.maSP}</td>
                            //             <td>{sanPham.tenSP}</td>
                            //             <td>{sanPham.gia}</td>
                            //         </tr>
                            //     )
                            // })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

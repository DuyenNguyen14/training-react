import React, { Component } from 'react'

export default class SinhVien extends Component {
    // Thuộc tính
    hoTen = "Nguyen Van A";
    lop = "FrontEnd xxx";
    tenTrungTam = "Cybersoft";

    renderThongTinSinhVien = () => {
        return (
            <ul>
                <li>Họ tên: {this.hoTen}</li>
                <li>Lớp: {this.lop}</li>
                <li>Trung tâm: {this.tenTrungTam}</li>
            </ul>
        )
    }

    // Phương thức: render()
    render() {
        return (
            <div className='container'>
                {this.renderThongTinSinhVien()}
            </div>
        )
    }
}

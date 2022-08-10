import React, { Component } from 'react'
import ProductItem from './ProductItem';

const data = [
    { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
    { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
    { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 2700000, "hinhAnh": "./img/applephone.jpg" }
]

export default class DemoXemChiTiet extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // set giá trị mặc định cho state
            chiTietSanPham: { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
        }
    }

    // Sử dụng vòng lặp để tạo ra các card sản phẩm
    renderCardSanPham = () => {
        return data.map((dienThoai, index) => {
            let { hinhAnh, tenSP, giaBan, maSP } = dienThoai;
            return (
                <div className="col-4" key={maSP}>
                    <ProductItem product={dienThoai} xemChiTiet={this.xemChiTiet} />
                </div>
            )
        })
    }

    // xây dựng chức năng xem chi tiết cho sự kiện onclick
    xemChiTiet = (dienThoaiClick) => {
        this.setState({
            chiTietSanPham: dienThoaiClick
        })
    }

    render() {
        let { hinhAnh, tenSP, manHinh, heDieuHanh, cameraTruoc, cameraSau, ram, rom } = this.state.chiTietSanPham;
        return (
            <div className='container py-5'>
                <div className="row">
                    {this.renderCardSanPham()}
                </div>
                <div className="row mt-5">
                    <div className="col-4 text-center">
                        <h3>{tenSP}</h3>
                        <img src={hinhAnh} alt={tenSP} className='w-100' />
                    </div>
                    <div className="col-8">
                        <h3>Thông số kỹ thuật</h3>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>Màn hình</td>
                                    <td>{manHinh}</td>
                                </tr>
                                <tr>
                                    <td>Hệ điều hành</td>
                                    <td>{heDieuHanh}</td>
                                </tr>
                                <tr>
                                    <td>Camera trước</td>
                                    <td>{cameraTruoc}</td>
                                </tr>
                                <tr>
                                    <td>Camera sau</td>
                                    <td>{cameraSau}</td>
                                </tr>
                                <tr>
                                    <td>RAM</td>
                                    <td>{ram}</td>
                                </tr>
                                <tr>
                                    <td>ROM</td>
                                    <td>{rom}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

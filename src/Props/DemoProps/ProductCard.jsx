import React, { Component } from 'react'

export default class ProductCard extends Component {
    render() {
        // this.props: là thuộc tính có sẵn của rcc dùng để nhận giá trị từ component cha truyền vào
        /*
            So sánh state và props:
            Giống:
                + Đều là thuộc tính có sẵn của rcc dùng để binding dữ liệu ra giao diện
            Khác:
                + State: có thể gán lại giá trị thông qua phương thức setState
                + Props: không thể gán lại giá trị (read only) mà chỉ dùng để nhận giá trị từ component cha truyền vào
        */

        // optional chaining: ? --> nếu có thì làm không có giá trị thì bỏ qua
        const { item } = this.props;

        return (
            <div className='card'>
                <img src={`https://picsum.photos/id/${item?.id}/200/200`} alt="..." />
                <div className="card-body">
                    <p>Name: {item?.name}</p>
                    <p>Age: {item?.age}</p>
                    <p>id: {this.props.item.id}</p>
                </div>
            </div>
        )
    }
}

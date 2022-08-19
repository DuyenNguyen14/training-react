import React, { Component } from 'react'
import { PureComponent } from 'react';

export default class ChildComponent extends PureComponent { // PureComponent là component không có lifecycle shouldCompnentUpdate, tuy nhiên ở PureComponent đã hỗ trợ việc xử lý render khi props thay đổi và không render khi props không thay đổi 
    //  LƯU Ý: 
    //      + so sánh props ở đây chỉ là dạng shallow compare - nhận biết được primitive value: number, tring, boolean, undefined,...);
    //      + Đối với reference value thì khi cập nhật state ở component cha phải sử dụng {...spread operator} (vì các reference value khi lưu trữ trong RAM là lưu địa chỉ chứ không phải là thuộc tính --> PureComponent không so sánh được sự thay đổi)
    constructor(props) {
        super(props);
        this.state = {

        };
        console.log('constructor child');
    }

    static getDerivedStateFromProps(newProps, currentState) {
        console.log('getDerivedStateFromProps child');
        return null;
    }

    // shouldComponentUpdate(newProps, newState) {
    //     // newProps; là props mới trước khi render, ví dụ nếu click button + ở cha thì newProps là number của child là 2
    //     // this.props: là props hiện tại, ví dụ props là number = 1
    //     // |
    //     // V
    //     // Nên xét điều kiện khi newProps và this.props khác nhau

    //     if (this.props.number !== newProps.number) {
    //         console.log('shouldComponentUpdate child');
    //         return true;
    //     }
    //     return false; // mặc định không khai báo thì return về true, nếu return false thì ngừng ở đây, không render nữa
    //     // nếu child được truyền vào 1 prop từ cha mà ở đây return true thì child không render lại trong khi giá trị state của cha thay đổi => nên xét điều kiện
    // }

    render() {
        console.log('render child');

        return (
            <div className='container'>
                <div className="p-5 display-4 bg-dark text-white">
                    {/* Xét 2 trường hợp: 1) truyền props là primitive value, và 2) truyền props là reference value để xét chức năng của PureComponent ở Child */}
                    {/* <h4>Child Component: {this.props.number}</h4> */}
                    <h4>Child Component: {this.props.obNumber.number}</h4>
                </div>
            </div>
        )
    }

    componentDidMount() {
        // hàm này chỉ chạy 1 lần sau khi load lên
        console.log('componentdidmount child');
    };

    componentDidUpdate(prevProps, prevState) {
        // hàm này chạy sau mỗi lần setState lại

        console.log('componentDidUpdate child');
    }
}

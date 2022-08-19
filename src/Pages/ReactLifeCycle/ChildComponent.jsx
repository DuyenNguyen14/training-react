import React, { Component } from 'react'
import { PureComponent } from 'react';

export default class ChildComponent extends PureComponent { // PureComponent là component không có lifecycle shouldCompnentUpdate, tuy nhiên ở PureComponent đã hỗ trợ việc xử lý render khi props thay đổi và không render khi props không thay đổi 
    //  LƯU Ý: 
    //      + so sánh props ở đây chỉ là dạng shallow compare - nhận biết được primitive value: number, tring, boolean, undefined,...);
    //      + Đối với reference value thì khi cập nhật state ở component cha phải sử dụng {...spread operator}
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
                    <h4>Child Component: {this.props.number}</h4>
                </div>
            </div>
        )
    }

    componentDidMount() {
        console.log('componentdidmount child');
    }
}

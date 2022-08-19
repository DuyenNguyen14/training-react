import { prettyDOM } from '@testing-library/react';
import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

/* LIFECYCLE 
    - Mounting: 
        + các hàm sẽ tự kích hoạt khi sử dụng 1 component. Dùng để can thiệp vào quá trình trước khi render hoặc sau khi render nhằm mục đích xử lý các state và props;
        + can thiệp thay đổi state trước render (sử dụng getDerivedStateFromProps);
        + can thiệp thay đổi state sau render sử dụng componentDidMount();
        + componentDidMount chỉ chạy 1 lần duy nhất khi component load lần đầu tiên (thường dùng để call api)
    + 
*/

export default class ReactLifeCycle extends Component {

    // Hàm thực thi trước render (thứ tự khai báo không quan trọng, các hàm vẫn thực thi theo map của lifecycle)
    constructor(props) {
        super(props);
        this.state = {
            number: 1,
            like: 1,
            objectNumber: {
                number: 1
            }
        }
        console.log('constructor');
    }

    // hàm có gắn static thì không sử dụng được con trỏ this
    static getDerivedStateFromProps(newProps, currentState) {  // currentState là state được định nghĩa trong constructor
        // VÌ SAO KHÔNG GỌI API Ở getDerived?

        // thay đổi state ở đây thì có an toàn hay không? 
        console.log('getDerivedStateFromProps');
        // currentState.number = 20;
        // // return về state mới, nếu giữ state cũ thì return null
        // return currentState;
        return null;
    }

    shouldComponentUpdate(newProps, newState) {
        console.log('shouldComponentUpdate');
        return true; // mặc định không khai báo thì return về true
    }
    // Hàm thực thi trước render

    render() {
        console.log('render');

        return (
            <div className='container'>
                <h3>Number: {this.state.number} </h3>
                <button className="btn btn-success mb-3" onClick={() => {
                    let objectNumber = { ...this.state.objectNumber }; // dùng spread operator để clone object ra
                    objectNumber.number += 1;

                    this.setState({
                        // number: this.state.number + 1

                        objectNumber: objectNumber
                    })
                }}>+</button>

                <h3>Like: {this.state.like}</h3>
                <button className='btn btn-warning mb-3' onClick={() => {
                    this.setState({
                        like: this.state.like + 1
                    })
                }}>Like</button>

                {/* Xét 2 trường hợp: 1) truyền props là primitive value, và 2) truyền props là reference value để xét chức năng của PureComponent ở Child */}
                {/* <ChildComponent number={this.state.number} /> */}
                <ChildComponent obNumber={this.state.objectNumber} />
            </div>
        )
    }

    // Hàm thực thi sau render
    componentDidMount() { // chỉ chạy 1 lần khi component load lần đầu tiên
        console.log('componentdidmount');
        //  tương tự window.onload (gọi api, lấy dữ liệu từ localStorage)
    };

    componentDidUpdate(prevProps, prevState) {
        // Handle sau khi component gọi render
        // hàm này chạy sau mỗi lần setState lại
        // Tuy nhiên hạn chế setState tại đây --> setState phải có lệnh if
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
    }
}

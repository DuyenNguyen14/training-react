import React, { Component } from 'react'

export default class Demo_if extends Component {
    constructor(props) {
        super(props);
        // this.state là thuộc tính có sẵn của component, chứa các thuộc tính có khả năng thay đổi bởi một sự kiện nào đó của component
        this.state = {
            isLogin: false,
            userName: ""
        }
    }
    // Thuộc tính
    isLogin = false;
    userName = "";

    login = () => {
        // this.state.isLogin = true;
        // this.state.userName = "CyberSoft";

        // this.setState(): là phương thức kế thừa từ class component, giúp thay đổi giá trị state và gọi hàm render lại giao diện
        // setState là phương thức bất đồng bộ
        this.setState({
            isLogin: true,
            userName: "CyberSoft"
        }, () => {
            console.log(this.state);
        })
    }
    logout = () => {
        this.setState({
            isLogin: false,
            userName: ""
        }, () => {
            console.log(this.state);
        })
    }

    // Cách 1: dùng phương thức kết hợp if để xác định nội dung render ra giao diện
    // renderContent = () => {
    //     if (this.isLogin) { // isLogin === true (người dùng đã đăng nhập)
    //         this.userName = "Duyen"
    //         return (
    //             <div>
    //                 Hello {this.userName} <button>Log out</button>
    //             </div>
    //         )
    //     }
    //     return (
    //         <div>
    //             <button>Login</button>
    //         </div>
    //     )
    // }

    // Phương thức render() của component Demo_if
    render() {
        return (
            <div>
                {/* {this.renderContent()} */}
                {this.state.isLogin ? <div>Hello {this.state.userName}<button onClick={this.logout}>Log out</button></div> :
                    <div><button onClick={this.login}>Login</button></div>}
            </div>
        )
    }
}

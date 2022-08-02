import React, { Component } from 'react'
import BaiTapChonXe from '../BaiTap/BaiTapChonXe'
import BaiTapTangGiamFont from '../BaiTap/BaiTapTangGiamFont'

export default class StateDemo extends Component {
    // Thuộc tính
    // state: là thuộc tính sẵn có được kế thừa từ rcc, dùng để chứa các giá trị thay đổi trên giao diện
    state = {
        login: false //false: chưa đăng nhập, true: đã đăng nhập
    }

    renderLogin = () => {
        if (this.state.login) {
            return <div>
                <span className='text-light'>Hello Cybersoft</span>
                <button className="btn btn-warning" onClick={() => {
                    this.setState({
                        login: false
                    })
                }}>Log Out</button>
            </div>
        }
        return <button className="btn btn-outline-success" onClick={() => {
            // Gọi hàm để đăng nhập
            this.handleLogin();
        }}>Sign In</button>;
    }

    handleLogin = /* async */ () => {
        // Không được thay đổi state trực tiếp như sau
        // this.state.login = true;
        // console.log(this.state.login);

        // mà phải thông qua phương thức setState
        /* 
            + this.setState là phương thức có sẵn của rcc, làm thay đổi giá trị state cũ đồng thời render lại giao diện;
            + setState là phương thức bất đồng bộ (tức là khi hàm này xử lý sẽ mất 1 khoảng thời gian, trong khoảng thời gian đó vẫn tiếp tục làm các công việc kế tiếp);
        */
        let newState = { login: true };
        // await this.setState(newState); // async await là đợi cho hàm setState xử lý xong rồi mới thực hiện các công việc tiếp theo
        // Nếu không dùng async await, thì ở tham số thứ 2 của hàm setState, truyền vào 1 hàm
        this.setState(newState, () => {
            // hàm này sẽ tự gọi sau khi setState và render xong
            // cách này oke hơn
            console.log(this.state)
        });
    }


    render() {
        return (
            <>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <div className="container">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                        <div className="collapse navbar-collapse" id="collapsibleNavId">
                            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home <span className="visually-hidden">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Link</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                    <div className="dropdown-menu" aria-labelledby="dropdownId">
                                        <a className="dropdown-item" href="#">Action 1</a>
                                        <a className="dropdown-item" href="#">Action 2</a>
                                    </div>
                                </li>
                            </ul>
                            <div className="d-flex my-2 my-lg-0 align-items-center">
                                {/* Cách 1: */}
                                {/* Toán tử 3 ngôi: nếu this.login === true (đã đăng nhập) thì hiện thị đối tượng span, ngược lại ':' false (chưa đăng nhập) thì hiển thị button Sign In */}
                                {/* {this.login ? <span className='text-light'>Hello Cybersoft</span> : <button className="btn btn-outline-success">Sign In</button>} */}

                                {/* Cách 2: */}
                                {this.renderLogin()}
                            </div>
                        </div>
                    </div>
                </nav>
                <hr />
                <BaiTapChonXe />
                <hr />
                <BaiTapTangGiamFont />
            </>
        )
    }
}

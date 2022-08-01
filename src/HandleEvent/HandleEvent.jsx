import { toHaveFocus } from '@testing-library/jest-dom/dist/matchers';
import React, { Component } from 'react'

export default class HandleEvent extends Component {
    handleclick = (e) => {
        alert(123);
    };

    showMess = (name) => {
        alert(`Hello ${name}!`);
    }

    render() {
        return (
            <div className='container'>
                <button id='btnClick' onClick={() => {
                    alert(123);
                }}>Click me</button>

                <button className="btn btn-primary ml-3" onClick={this.handleclick}>Click</button>

                <hr />

                <h3>Handle click param</h3>
                <button className='btn btn-secondary' onClick={(e) => {
                    // Gọi các hàm khác thực thi khi click
                    this.showMess('Duyen');
                }}>Show mess</button>

                <button className="btn btn-primary ml-2" onClick={this.showMess.bind(this, "Duyen")}>Click</button>
            </div>
        )
    }
}

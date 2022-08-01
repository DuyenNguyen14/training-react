// rcc: react class component
import React, { Component } from 'react'

export default class DemoClassComp extends Component {

    // render: là phương thức mặc định xác định giao diện của thẻ <DemoClassComp />
    render() {
        return (
            <div>
                <div className="card text-white bg-primary">
                    <img className="card-img-top" src="https://picsum.photos/400/400" alt="Title" />
                    <div className="card-body">
                        <h4 className="card-title">Title</h4>
                        <p className="card-text">Text</p>
                    </div>
                </div>
            </div>

        )
    }
}

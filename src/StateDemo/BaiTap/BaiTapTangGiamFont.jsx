import React, { Component } from 'react'

export default class BaiTapTangGiamFont extends Component {
    state = {
        fsize: 16 // giá trị default của state
    }
    render() {
        return (
            <div className='container'>
                <h3>Bài tập tăng giảm font-size</h3>
                <p style={{ fontSize: this.state.fsize + 'px' }}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat unde, eaque voluptatem, similique omnis suscipit porro molestias, repellat laudantium obcaecati iure quisquam necessitatibus dolor dolorum. Facere voluptatibus cupiditate autem fugiat.
                </p>
                <button className="btn btn-primary mx-2" onClick={() => {
                    this.setState({
                        fsize: this.state.fsize + 2
                    })
                }}>+</button>
                <button className="btn btn-secondary mx-2" onClick={() => {
                    this.setState({
                        fsize: this.state.fsize - 2
                    })
                }}>-</button>
            </div>
        )
    }
}

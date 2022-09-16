import React, { Component } from 'react'

export default class BaiTapState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: './img/red-car.jpg',
        }
    }

    changeColor = (color) => {
        let imgSource = '';
        switch (color) {
            case "red":
                imgSource = './img/red-car.jpg';
                break;
            case "black":
                imgSource = './img/black-car.jpg';
                break;
            case "gray":
                imgSource = './img/grey-car.jpeg';
                break;
        }
        // Gọi phương thức setState để truyền imgSource mới từ sự kiện click của button --> render lại giao diện với source mới
        this.setState({
            img: imgSource
        })
    }

    render() {
        return (
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-6'>
                        <p>Please choose your favourite car color:</p>
                        {/* <img src="https://image.shutterstock.com/image-photo/red-car-260nw-197514563.jpg" alt="" id='carPic' /> */}
                        <img src={this.state.img} alt="" />
                    </div>
                    <div className='col-md-6'>
                        <p>Change color:</p>
                        <button className='btn btn-danger text-white' id='btnRed' onClick={() => this.changeColor("red")}>Red Color</button>
                        <button className='btn btn-dark text-white ml-3' id='btnBlack' onClick={() => this.changeColor("black")}>Black Color</button>
                        <button className='btn btn-secondary text-white ml-3' id='btnGrey' onClick={() => this.changeColor("gray")}>Grey Color</button>
                    </div>
                </div>
            </div>
        )
    }
}

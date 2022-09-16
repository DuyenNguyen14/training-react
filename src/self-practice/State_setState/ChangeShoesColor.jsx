import React, { Component } from 'react'

export default class ChangeShoesColor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: './img/white-shoe.jpeg',
        }
    }

    changeColor = (color) => {
        let imgSource = '';
        switch (color) {
            case "white":
                imgSource = './img/white-shoe.jpeg';
                break;
            case "cream":
                imgSource = './img/cream-shoe.jpeg';
                break;
            case "yellow":
                imgSource = './img/yellow-shoe.jpeg';
                break;
            case "black":
                imgSource = './img/black-shoe.jpeg';
                break;
        }
        this.setState({
            img: imgSource
        })
    }
    render() {
        let imgStyle = {
            width: '100%',
        }
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-6 shoe_img">
                        <img src={this.state.img} alt="" style={imgStyle} />
                    </div>
                    <div className="col-6 color-btns d-flex align-items-end">
                        <button className="btn btn-light" onClick={() => this.changeColor("white")}>White</button>
                        <button className="btn btn-secondary ml-2" onClick={() => this.changeColor("cream")}>Cream</button>
                        <button className="btn btn-warning ml-2" onClick={() => this.changeColor("yellow")}>Yellow</button>
                        <button className="btn btn-dark ml-2" onClick={() => this.changeColor("black")}>Black</button>
                    </div>
                </div>
            </div>
        )
    }
}

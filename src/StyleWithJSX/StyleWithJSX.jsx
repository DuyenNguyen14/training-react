import React, { Component } from 'react';
// import '../index.css';
import style from './StyleWithJSX.module.css';

export default class StyleWithJSX extends Component {
    render() {
        return (
            <div className='container'>
                <h3>StyleWithJSX</h3>
                <p className='text-red'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo illo modi eos quidem molestiae debitis ullam ut id possimus. Officia laborum illo eligendi reiciendis sint asperiores officiis eaque expedita cupiditate.
                </p>
                <h3 className={`p-2 bg-dark ${style['text-blue']}`}>Hello FrontEnd 28</h3>
                <hr />
                <div style={{ color: 'red', background: `url(https://picsum.photos/900/500)`, height: 500 }}>Hello cybersoft!!!</div>
            </div>
        )
    }
}

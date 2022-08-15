import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Page404 extends Component {
    render() {
        return (
            <div className='container'>
                <p>Error 404. Not found!!! Back to <NavLink to={''}>Home</NavLink></p>
            </div>
        )
    }
}

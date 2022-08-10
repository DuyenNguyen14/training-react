import React, { Component } from 'react'
import ProductCard from './ProductCard'

const data = [
    { id: 33, name: 'Duyen', age: 20 },
    { id: 44, name: 'Sang', age: 21 },
    { id: 55, name: 'Nam', age: 22 }
]

export default class DemoProps extends Component {

    renderPerson = () => {
        return data.map((person, index) => {
            return <div className="col-3" key={index}>
                <ProductCard item={person} />
            </div>
        })
    }


    render() {
        // Nếu component có quá nhiều props thì có thể khai báo props thành object như sau
        // let person = {
        //     id: 1,
        //     name: 'Quan',
        //     age: 18
        // }

        // let person2 = {
        //     id: 2,
        //     name: 'Hau',
        //     age: 19
        // }


        return (
            <div className='container'>
                {/* <div className="w-25">
                    Props của các thẻ phải giống nhau
                    <ProductCard item={person} />
                </div>
                <div className="w-25">
                    <ProductCard item={person2} />
                </div> */}
                <div className="row">
                    {this.renderPerson()}
                </div>
            </div>
        )
    }
}

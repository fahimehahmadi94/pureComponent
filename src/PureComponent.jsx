import React, { Component, memo, PureComponent } from 'react';

// class PureCompo extends PureComponent {
//     render() {
//         console.log("pure component");
//         return (
//             <h2 className="text-center mt-4">
//                 {"pure component :" + this.props.name}
//             </h2>
//         );
//     }
// }
// const PureCompo =(props)=>{
//         return (
//             <h2 className="text-center mt-4">
//                 {"pure component :" + props.name}
//             </h2>
//         );
// }

//حدس کلمه
class PureCompo extends PureComponent {
    constructor() {
        super()
        this.state = {
            name: ""
        }
        this.counter = 0
    }

    handleChangeName = () => {
        this.setState({
            name: document.getElementById('myInput').value
        })
    }
    render() {
        return (
            <div className="form-fa-geoup text-center mt-4 p-3">
                <h4 className="text-center text-dark">حدس کلمه</h4>
                <input type="text" autoComplete='off' id='myInput'
                    className='form-control' />
                <button className='btn btn-warning my-3'
                    onClick={this.handleChangeName}>
                    ثبت
                </button>
                <button className='btn btn-secondary my-3 mx-2'
                    onClick={() => { document.getElementById('myInput').value = "" }} >
                    مخفی
                </button>
                <br />
                <span>{this.counter++}</span>
            </div>
        );
    }
}



export default PureCompo;
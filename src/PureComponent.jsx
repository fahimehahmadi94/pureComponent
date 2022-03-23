import React, { Component, createRef, memo, PureComponent } from 'react';

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
        this.myInput = createRef()
    }

    handleChangeName = () => {
        this.setState({
            name: this.myInput.current.value
        })
    }
    componentDidMount(){
        this.myInput.current.focus()
    }
    render() {
        return (
            <div className="form-fa-geoup text-center mt-4 p-3">
                <h4 className="text-center text-dark">حدس کلمه</h4>
                <input type="text" autoComplete='off' 
                    className='form-control' ref={this.myInput}/>
                <button className='btn btn-warning my-3'
                    onClick={this.handleChangeName}>
                    ثبت
                </button>
                <button className='btn btn-secondary my-3 mx-2'
                    onClick={() => {this.myInput.current.value = "" }} >
                    مخفی
                </button>
                <br />
                <span>{this.counter++}</span>
            </div>
        );
    }
}



export default PureCompo;
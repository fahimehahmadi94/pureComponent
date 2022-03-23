import React, { Component, createRef } from 'react';
import PureCompo from './PureComponent';

// class ParentCompo extends Component {
//     constructor() {
//         super()
//         this.state = {
//             name: "fahimeh"
//         }
//     }

//     componentDidMount() {
//         setInterval(() => {
//             this.setState({
//                 name: "fahimeh" + new Date()
//             })
//         }, 1000);
//     }

//     render() {
//         console.log("________parent______");
//         return (
//             <div>
//                 <PureCompo name={this.state.name} />
//             </div>
//         );
//     }
// }
class ParentCompo extends Component {
    constructor() {
        super()
        this.componentRef = createRef();
    }
    handelChangeComponentName=()=>{
        this.componentRef.current.handleChangeName();
    }
    render() {
        return (
            <div>
                <PureCompo ref={this.componentRef}/>
                <button className='btn btn-info me-4'
                onClick={this.handelChangeComponentName}>
                    test
                </button>
            </div>
        );
    }
}
export default ParentCompo;
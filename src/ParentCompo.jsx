import React, { Component, createRef } from 'react';
import Fcomponent from './Fcomponent';
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
        //this.componentRef = createRef();
        this.myInput = createRef();
    }
    // handelChangeComponentName = () => {
    //     this.componentRef.current.handleChangeName();
    // }
    componentDidMount() {
        this.myInput.current.focus();
    }
    render() {
        return (
            <div>
                {/* <PureCompo ref={this.componentRef}/>
                <button className='btn btn-info me-4'
                onClick={this.handelChangeComponentName}>
                    test
                </button> */}
                <Fcomponent ref={this.myInput} />
            </div>
        );
    }
}
export default ParentCompo;
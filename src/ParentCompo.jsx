import React, { Component } from 'react';
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
    render() {
        return (
            <div>
                <PureCompo />
            </div>
        );
    }
}
export default ParentCompo;
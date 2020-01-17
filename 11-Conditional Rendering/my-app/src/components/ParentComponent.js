import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            parentName: 'Parent'
        }
        // require binding cuz greetParent Function need to use this pointer
        // this.greetParent=this.greetParent.bind(this)
    }

    greetParent = (childName) =>{
         //ok
        // alert('Hello'+this.state.parentName)
        //ES 6 - template literals
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }
    // greetParent() {
    //     //ok
    //     // alert('Hello'+this.state.parentName)
    //     //ES 6 - template literals
    //     alert(`Hello ${this.state.parentName}`)
    // }
    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greetParent}/>
            </div>
        )
    }
}

export default ParentComponent

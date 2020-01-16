import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './userContext'

class ComponentE extends Component {
    
    //method 2
    // static contextType = UserContext
    render() {
        return (
            <>
                ComponentE context {this.context.name}
                <ComponentF />
            </>
        )
    }
}

// method 1
ComponentE.contextType = UserContext

export default ComponentE

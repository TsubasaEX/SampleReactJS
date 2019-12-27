//2- This is a class component
import React, { Component } from 'react'

//state 
class Message extends Component {
    constructor() {
        super()
        this.state = {
            message: 'Welcom Visitor'
        }
    }
    changeMessage() {
        this.setState(
            {
                message: 'Thank You For Subscribing'
            }
        )
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Message
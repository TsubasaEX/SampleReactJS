import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'

export class HoverCounter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        this.setState(
            prevState => {
                return {
                    count: prevState.count + 1
                }
            }
        )
    }

    render() {
        return (
        <h1 onMouseOver={this.incrementCount}>Hovered {this.state.count} times</h1>
        )
    }
}

export default HoverCounter

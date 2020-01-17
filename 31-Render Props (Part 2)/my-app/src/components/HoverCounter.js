import React, { Component } from 'react'
import withCounter from './withCounter'

export class HoverCounter extends Component {
    render() {
        const { count, incrementCount } = this.props
        return (
            <h1 onMouseOver={incrementCount}>{this.props.tag} Hovered {count} times</h1>
        )
    }
}

export default withCounter(HoverCounter, 10)

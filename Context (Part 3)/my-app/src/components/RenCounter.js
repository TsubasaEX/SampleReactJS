import React, { Component } from 'react'

export class RenCounter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        this.setState(prevState => {
            return { count: prevState.count + 1 }
        }
        )
    }

    render() {
        return (
            <div>
                {/* method 1 - use render props */}
                {this.props.render(this.state.count, this.incrementCount)}
                {/* method 2 - use children props */}
                {/* {this.props.children(this.state.count, this.incrementCount)} */}
            </div>
        )
    }
}

export default RenCounter

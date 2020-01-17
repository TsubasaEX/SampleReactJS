import React, { Component } from 'react'

export class ClickCounterOne extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            name: ''
        }
    }

    componentDidMount() {
        document.title = `Clicked ${this.state.count} times`
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.count !== prevState.count) {
            console.log('updating document title')
            document.title = `Clicked ${this.state.count} times`
        }
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.name} onChange={e => {
                    this.setState({ name: e.target.value })
                }

                } />
                <button onClick={() => this.setState(
                    prevState => {
                        return { count: prevState.count + 1 }
                    }
                )}>
                    Click {this.state.count} times
                </button>
            </div>
        )
    }
}

export default ClickCounterOne

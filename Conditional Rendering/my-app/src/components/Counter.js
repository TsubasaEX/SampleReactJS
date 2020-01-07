//setState
import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    increment() {

        //Wrong -> setState is async, use callback as second parameter instead
        //Wrong(Won't rerender) -> use setState to rerender the component instead.
        // this.state.count = this.state.count + 1
        // console.log(this.state.count)


        //Wrong -> use prevState instead.
        // this.setState(
        //     {
        //         count: this.state.count + 1
        //     },
        //     () => {
        //         console.log('Callback Value', this.state.count)
        //     }
        // )

        //Complete Method
        this.setState(
            (prevState, props) => ({
                count: prevState.count + parseInt(props.inc)
            }),
            () => {
                console.log('Callback Value', this.state.count)
            }
        )

    }

    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return (
            <div>
                <div>
                    count - {this.state.count}
                </div>
                <button onClick={() => this.incrementFive()}>
                    increment
                </button>
            </div>

        )
    }
}

export default Counter

import React, { Component } from 'react'
import { ThemeConsumer } from 'styled-components'

export class RefsDemo extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }

        // use this method instead
        this.inputRef = React.createRef()

        // old fashioned method - callback refs
        // this.cbRef=null
        // this.setCbRef = (element) =>{
        //     this.cbRef=element
        // }
    }

    componentDidMount() {
        // if (this.cbRef){   
        //     this.cbRef.focus()
        // }
        this.inputRef.current.focus();
        console.log(this.inputRef)
    }

    clickHandler = () => {
        // this.inputRef.current.focus();
        alert(this.inputRef.current.value)
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef} />
                {/* <input type="text" ref={this.setCbRef} /> */}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo

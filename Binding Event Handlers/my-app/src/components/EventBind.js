import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Hello'
        }
        // method 3 - best
        // this.clickHandler=this.clickHandler.bind(this)
    }

    // clickHandler(){
    //     this.setState({
    //         message:'GoodBye!'
    //     })
    //     console.log(this)
    // }
    
    // method 4 - fashion and best
    clickHandler = () =>{
        this.setState(
            {
                message:'GoodBye!'
            }
        )
    }
    

    render() {
        return (
            <div>
                <div>
                    {this.state.message}
                </div>
                {/* method 1 - have performance problem(rerender)*/}
                {/* <button onClick={this.clickHandler.bind(this)}>
                   Click 
                </button> */}
                {/* method 2 - have performance problem(rerender)*/}
                {/* <button onClick={()=> this.clickHandler()}>
                   Click 
                </button> */}
                {/* method 3/4 */}
                <button onClick={this.clickHandler}>
                   Click 
                </button>
            </div>
        )
    }
}

export default EventBind

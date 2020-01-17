import React, { Component } from 'react'
import { ThemeConsumer } from 'styled-components'

class Form extends Component {


    constructor(props) {
        super(props)

        // this.myName = 'myNAME'
        this.state = {
            username: '',
            comments: '',
            topic: 'react'
        }
    }

    //Bad behavior - use this.state instead
    // handleMy = event => {
    //     this.myName = event.target.value
    //     console.log(event.target.value)
    //     console.log(this.myName)
    //     //Calling forceUpdate() will cause render() to be called on the component, skipping shouldComponentUpdate(). 
    //     this.forceUpdate() 
    // }

    handleUsernameChange = event => {
        this.setState(
            {
                username: event.target.value
            }
        )
    }

    handleCommentsChange = event => {
        this.setState(
            {
                comments: event.target.value
            }
        )
    }

    handleTopicChange = event => {
        this.setState(
            {
                topic: event.target.value
            }
        )
    }

    handleSubmit = event => {
        // alert(`${this.myName} ${this.state.username} ${this.state.comments} ${this.state.topic}`)
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }

    render() {

        const {username,comments,topic} = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                {/* <div>
                    <label>MyName</label>
                    <input type="text" value={this.myName} onChange={this.handleMy}></input>
                </div> */}
                <div>
                    <label>UserName</label>
                    <input type="text" value={username} onChange={this.handleUsernameChange}></input>
                </div>
                <div>
                    <label>Comments</label>
                    <textarea value={comments} onChange={this.handleCommentsChange}></textarea>
                </div>
                <div>
                    <label>Topic</label>
                    <select defaultValue={topic} onChange={this.state.handleTopicChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form

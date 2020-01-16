import React, { Component } from 'react'
import Axios from 'axios'

class PostForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }

    changeHandler = e => {
        this.setState(
            { [e.target.name]: e.target.value }
        )
    }

    submitHandler = e => {
        console.log(this.state)
        Axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then(response => {
            console.log(response)
        }).catch(error=>{
            console.log(error)
        })
        e.preventDefault()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        UserId<input type="text" name="userId" onChange={this.changeHandler} />
                    </div>
                    <div>
                        Title<input type="text" name="title" onChange={this.changeHandler} />
                    </div>
                    <div>
                        Body<input type="text" name="body" onChange={this.changeHandler} />
                    </div>
                    <button>Summit</button>
                </form>
            </div>
        )
    }
}

export default PostForm

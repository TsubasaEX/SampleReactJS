import React, { Component } from 'react'
import Axios from 'axios'

class PostList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            errorMsg: ''
        }
    }

    componentDidMount() {
        //to get an error
        // Axios.get('https://jsonplaceholder.typicode.com/posts1')
        Axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                this.setState({
                    posts: response.data
                })
            })
            .catch(error => {
                this.setState({
                    errorMsg: 'Error retrieving data'
                })
            })
    }

    render() {
        const { posts, errorMsg } = this.state
        return (
            <div>
                List of posts
                {posts.length ?
                    posts.map(post => <div key={post.id}>{post.title}</div>) :
                    null}
                {errorMsg ? <div>{errorMsg}</div> : null}
            </div>
        )
    }
}

export default PostList

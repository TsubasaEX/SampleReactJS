import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DateFetching() {

    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [idFromButtonClick])

    return (
        <div>
            <input value={id} onChange={(e) => setId(e.target.value)} />
            <button onClick={() => setIdFromButtonClick(id)}>Click</button>
            <div>
                {post.title}
            </div>
        </div>
    )
}

export default DateFetching

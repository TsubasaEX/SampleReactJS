import React, { useState, useEffect } from 'react'

function HookCounterOne() {

    const [count, setCount] = useState(0)

    // will call the function in useEffect every time when it needs to render
    useEffect(() => {
        document.title = `Clicked ${count} times`
    })

    return (
        <div>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Click {count} times</button>
        </div>
    )
}

export default HookCounterOne

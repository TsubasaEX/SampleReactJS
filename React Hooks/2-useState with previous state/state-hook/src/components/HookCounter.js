import React, { useState } from 'react'

function HookCounter() {

    //Simple Example
    const [count, setCount] = useState(0)

    // Object Example
    const [obj, setObj] = useState({ count: 0 })
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count {count}</button>
            <button onClick={() => setObj({ count: obj.count + 1 })}>Count {obj.count}</button>
        </div>
    )
}

export default HookCounter

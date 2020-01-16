import React, { useState } from 'react'

function HookCounter() {

    //Simple Example
    const [count, setCount] = useState(0)
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count {count}</button>
        </div>
    )

    // Object Example
    // const [obj, setCount] = useState({ count: 0 })
    // return (
    //     <div>
    //         <button onClick={() => setCount({ count: obj.count + 1 })}>Count {obj.count}</button>
    //     </div>
    // )
}

export default HookCounter

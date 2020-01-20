import React, { useState, useEffect } from 'react'

function HookCounterOne() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    // will call the function in useEffect after every single render
    // second parameter is used to identify the conditional variables required checking
    useEffect(() => {
        console.log('useEffect - updating document title')
        document.title = `Clicked ${count} times`
    }, [count])

    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Click {count} times</button>
        </div>
    )
}

export default HookCounterOne

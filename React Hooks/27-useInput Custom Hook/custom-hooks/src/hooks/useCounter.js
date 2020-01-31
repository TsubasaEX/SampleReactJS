import { useState } from 'react'

function useCounter(initCount = 0, value) {
    const [count, setCount] = useState(initCount)

    const increment = () => {
        setCount(prevCount => prevCount + value)
    }

    const decrement = () => {
        setCount(prevCount => prevCount - value)
    }

    const reset = () => {
        setCount(initCount)
    }

    return [count, increment, decrement, reset]
}

export default useCounter

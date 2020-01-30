import React, { useState, useMemo } from 'react'

function Counter() {
    const [countOne, setCountOne] = useState(0)
    const [countTwo, setCountTwo] = useState(0)

    const incrementOne = () => {
        setCountOne(prevCountOne => prevCountOne + 1)
    }
    const incrementTwo = () => {
        setCountTwo(prevCountTwo => prevCountTwo + 1)
    }

    const isEven = useMemo(() => {
        let i = 0
        while (i < 200000000) i++
        console.log('isEven')
        return countOne % 2 === 0
    }, [countOne])

    return (
        <div>
            <div>
                <button onClick={incrementOne}>Count - {countOne}</button>
                <span>{isEven ? 'Even' : 'Odd'}</span>
            </div>
            <div>
                <button onClick={incrementTwo}>Count - {countTwo}</button>
            </div>
        </div>
    )
}

export default Counter

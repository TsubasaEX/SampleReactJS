import React from 'react'
import { useSelector } from 'react-redux'

function HookCakeContainer() {
    const numOfCakes = useSelector(state => state.numOfCakes)
    return (
        <div>
            <h2>Num of cakes - {numOfCakes}</h2>
            <button>Buy Cake</button>
        </div>
    )
}

export default HookCakeContainer
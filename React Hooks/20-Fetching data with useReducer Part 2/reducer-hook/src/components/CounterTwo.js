import React, { useReducer } from 'react'

const initState = {
    firstCounter: 0,
    secondCounter: 10
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.value }
        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - action.value }
        case 'incrementFive':
            return { ...state, firstCounter: state.firstCounter + action.value }
        case 'decrementFive':
            return { ...state, firstCounter: state.firstCounter - action.value }
        case 'increment2':
            return { ...state, secondCounter: state.secondCounter + action.value }
        case 'decrement2':
            return { ...state, secondCounter: state.secondCounter - action.value }
        case 'reset':
            return initState
        default:
            return state
    }
}

function CounterTwo() {
    const [state, dispatch] = useReducer(reducer, initState)

    return (
        <div>
            <div>First Counter - {state.firstCounter}</div>
            <div>Second Counter - {state.secondCounter}</div>
            <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'incrementFive', value: 5 })}>Increment 5</button>
            <button onClick={() => dispatch({ type: 'decrementFive', value: 5 })}>Decrement 5</button>
            <div>
                <button onClick={() => dispatch({ type: 'increment2', value: 1 })}>Increment Counter2</button>
                <button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>Decrement Counter2</button>
            </div>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    )
}

export default CounterTwo

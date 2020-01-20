import React, { useState, useEffect } from 'react'

export default function IntervalHookCounter() {

    const [count, setCount] = useState(0)
    // Wrong - The count wont increase on the page
    // const tick = () =>{
    //     setCount(count+1)
    // }

    // useEffect(() => {
    //     const interval = setInterval(tick,1000)
    //     return () => {
    //         clearInterval(tick)
    //     };
    // }, [])

    // Method 1 - add dependencies to dependency array 
    // const tick = () => {
    //     setCount(count + 1)
    // }

    // useEffect(() => {
    //     const interval = setInterval(tick, 1000)
    //     return () => {
    //         clearInterval(tick)
    //     };
    // }, [count])

    // Method 2 - use prevCount in setCount()
    // const tick = () => {
    //     setCount(prevCount => prevCount+1)
    // }

    // useEffect(() => {
    //     const interval = setInterval(tick, 1000)
    //     return () => {
    //         clearInterval(tick)
    //     };
    // }, [])

    // Use method 1&2 at same time - Increase very fast?? Don't know why...
    // const tick = () => {
    //     setCount(prevCount => prevCount+1)
    // }

    // useEffect(() => {
    //     const interval = setInterval(tick, 1000)
    //     return () => {
    //         clearInterval(tick)
    //     };
    // }, [count])

    // Recommendation
    //Bad behavior
    // const someProps='123'
    // const doSomething = () => {
    //     console.log(someProps)
    // }
    // const tick = () => {
    //     setCount(prevCount => prevCount + 1)
    // }

    // useEffect(() => {
    //     doSomething()
    //     const interval = setInterval(tick, 1000)
    //     return () => {
    //         clearInterval(tick)
    //     };
    // }, [someProps])

    //Good behabior - always specify functions in useEffect, otherwise, u might miss sth required to define in dependency array.
    const someProps='123'
    const tick = () => {
        setCount(prevCount => prevCount + 1)
    }

    useEffect(() => {
        const doSomething = () => {
            console.log(someProps)
        }
        doSomething(someProps)
        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(tick)
        };
    }, [someProps])

    return (
        <div>
            {count}
        </div>
    )
}

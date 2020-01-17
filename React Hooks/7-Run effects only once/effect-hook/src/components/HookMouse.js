import React, { useState, useEffect } from 'react'

export default function HookMouse() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = (e) =>{
        console.log('Mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

    // function logMousePosition(e) {
    //     console.log('Mouse event')
    //     setX(e.clientX)
    //     setY(e.clientY)
    // }
    
    //second parameter (empty array) is used to run effect only once.
    useEffect(
        () => {
            console.log('useEffect callede')
            window.addEventListener("mousemove", logMousePosition)
        }, []
    )
    return (
        <div>
            x - {x} y -{y}
        </div>
    )
}

import React from 'react'

function FunctionClick() {

    function clickHandler() {
        console.log('Button Clicked')
    }
    return (
        <div>
            {/* wrong! - this is function call */}
            {/* <button onClick={clickHandler()}>
                Click
          </button> */}
            <button onClick={clickHandler}>
                Click
          </button>
        </div>
    )
}

export default FunctionClick
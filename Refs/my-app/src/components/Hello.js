//3- JSX
import React from 'react'

const Hello = () => {
    //JSX -> simpler
    return (
        <div id='hello' className='dummyClass'>
            <h1>Hello Vishwas</h1>
        </div>
    )

    //JSX will be transpile into JavaScript as below
    // return React.createElement(
    //     'div',
    //     {id: 'hello',className:'dummyClass'},
    //     React.createElement('h1',null,'Hello Vishwas')
    // )
}

//Default Export
export default Hello

//Named Export
// export {Hello}
import React from 'react'

// method 2 - inline styling
// key should be camel case
const heading = {
    fontSize: '72px',
    color: 'blue'
}

function Inline() {
    return (
        <div>
            <h1 className='error'>Error</h1>
            {/* Error - css module is locally scoped in App.js */}
            {/* <h1 className={styles.success}>Success</h1> */}
            <h1 style={heading}>Inline</h1>
        </div>
    )
}

export default Inline

import React from 'react'

function MemoComp({name}) {
    console.log('MemoComp Render')
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoComp)
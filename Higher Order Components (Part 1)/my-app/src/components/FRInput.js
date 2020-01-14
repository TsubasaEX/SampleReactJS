import React from 'react'

// function FRInput() {
//     return (
//         <div>
//             <input type="type" />
//         </div>
//     )
// }

const FRInput = React.forwardRef((props, ref) => {
    return (
        <div>
            <input type="type" ref={ref} />
        </div>
    )
})


export default FRInput

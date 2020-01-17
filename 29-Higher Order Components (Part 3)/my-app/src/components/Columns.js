import React from 'react'

function Columns() {
    const items = ['Birth','Marital Status','Gender']

    return (
        <React.Fragment>
            <td>ID</td>
            <td>Name</td>
            {
                items.map((value,index)=>
                (
                    <React.Fragment key={index}>
                        <td>{value}</td>
                    </React.Fragment>
                ))
            }
        </React.Fragment>
    )

}

export default Columns

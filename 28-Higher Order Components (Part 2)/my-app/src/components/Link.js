//method 4.3 - styled components
import React from 'react'

function Link(props) {
    return (
        <div>
            <a className={props.className} href={props.to}>{props.children}</a>
        </div>
    )
}

export default Link

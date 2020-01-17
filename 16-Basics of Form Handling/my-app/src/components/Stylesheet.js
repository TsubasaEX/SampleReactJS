import React from 'react'
import './myStyles.css'

function Stylesheet(props) {
    let className = props.primary? 'primary':''

    // method 1.1 - template literals to use multiple classes
    return (
        <div>
            <h1 className={`${className} font-xl`}>Stylesheets</h1>
        </div>
    )

    // method 1 - regular css
    // return (
    //     <div>
    //         <h1 className={className}>Stylesheets</h1>
    //     </div>
    // )
}

export default Stylesheet

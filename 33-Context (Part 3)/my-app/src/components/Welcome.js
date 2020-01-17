//2- This is a class component
import React, { Component } from 'react'

//Destructuring props
class Welcome extends Component {
    render() {
        const { name, heroName, children } = this.props
        return (
            <div>
                <h1>Welcom {name} a.k.a {heroName}</h1>
                {children}
            </div>
        )
    }
}

export default Welcome
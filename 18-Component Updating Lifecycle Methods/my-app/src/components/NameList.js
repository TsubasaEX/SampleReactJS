import React, { Component } from 'react'
import Person from './Person'

class NameList extends Component {
    render() {

        const names = ['Bruce', 'Clark', 'Diana']

        // if name is unique, we could also take name as key prop
        // const nameList = names.map((name, index) => <h2 key={name}>{index}{name}</h2>)

        const nameList = names.map((name, index) => <h2 key={index}>{index}{name}</h2>)

        return <div>{nameList}</div>
    }
}

export default NameList

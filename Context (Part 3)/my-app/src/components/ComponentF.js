import React, { Component } from 'react'
import { UserConsumer } from './userContext'

class ComponentF extends Component {
    render() {
        return (
            <UserConsumer>
                {(contx) => {
                    return <div>Hello {contx.name} {contx.id}</div>
                }}
            </UserConsumer>
        )
    }
}

export default ComponentF

import React, { useContext } from 'react'
import ComponentF from './ComponentF'
import { UserContext, ChannelContext } from '../App'

function ComponentE() {

    const user = React.useContext(UserContext)
    const channel = React.useContext(ChannelContext)
    return (
        <div>
            <ComponentF />
            {user} - {channel}
        </div>
    )
}

export default ComponentE

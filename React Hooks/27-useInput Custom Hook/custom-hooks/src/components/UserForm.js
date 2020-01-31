import React, { useState } from 'react'
import useInput from '../hooks/useInput'

function UserForm() {
    // const [firstName, setFirstName] = useState('')
    // const [lastName, setLastName] = useState('')

    const [firstName,bindFirstName,resetFirstName] = useInput('')
    const [lastName,bindLastName,resetLastName] = useInput('')

    const sumitHandler = e => {
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }

    return (
        <div>
            <form onSubmit={sumitHandler}>
                <div>
                    <label>First Name</label>
                    <input {... bindFirstName} type="text" />
                </div>
                <div>
                    <label>Last Name</label>
                    <input {... bindLastName} type="text" />
                </div>
                <button>Sumit</button>
            </form>
        </div>
    )
}

export default UserForm

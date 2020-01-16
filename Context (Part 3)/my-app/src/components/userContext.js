import React from 'react';

// parameter in createContext() is a default value.
const UserContext = React.createContext({
    name:'Vishwas',
    id:'123'
})

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export { UserProvider, UserConsumer }
export default UserContext
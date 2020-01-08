import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {

        //method 4 - short circuit operator
        return this.state.isLoggedIn && <div>Welcom Vishwas</div>

        //method 3 - ternary conditional operator
        // return (
        //     this.state.isLoggedIn ?
        //         <div>Welcom Vishwas</div> :
        //         <div>Welcom Guest</div>
        // )

        //method 2 - element variables
        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcom Vishwas</div>
        // } else {
        //     message = <div>Welcom Guest</div>
        // }
        // return <div>{message}</div>

        // method 1 - if/else 
        // if (this.state.isLoggedIn) {
        //     return (
        //         <div>
        //             Welcom Vishwas
        //     </div>
        //     )
        // } else {
        //     return (
        //         <div>
        //             Welcom Guest
        //     </div>
        //     )
        // }
    }
}

export default UserGreeting

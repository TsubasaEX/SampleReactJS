//2- This is a functional component
import React from 'react';

// function Greet(){
//     return <h1>Hello World!!</h1>
// }

//ES6 style
// const Greet = props => {
//     console.log(props)
//     return (
//         <div>
//             <h1>Hello {props.name} a.k.a {props.heroName}</h1>
//             {props.children}
//         </div>
//     )
// }


//1- Destructuring props
// const Greet = ({name,heroName,children}) => {

//     return (
//         <div>
//             <h1>Hello {name} a.k.a {heroName}</h1>
//             {children}
//         </div>
//     )
// }

//2- Destructuring props
const Greet = props => {
    const { name, heroName, children } = props
    return (
        <div>
            <h1>Hello {name} a.k.a {heroName}</h1>
            {children}
        </div>
    )
}


export default Greet
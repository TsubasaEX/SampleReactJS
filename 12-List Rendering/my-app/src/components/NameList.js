import React, { Component } from 'react'
import Person from './Person'

class NameList extends Component {
    render() {

        const persons = [
            {
                id: 1,
                name: 'Bruce',
                age: 30,
                skill: 'React'
            },
            {
                id: 2,
                name: 'Clark',
                age: 25,
                skill: 'Angular'
            },
            {
                id: 3,
                name: 'Diana',
                age: 28,
                skill: 'Vue'
            }
        ]

        const names = ['Bruce', 'Clark', 'Diana']

        let lists = []
        for (let i = 0; i <= names.length - 1; i++) {
            //記得在JSX中使用JS變數要用花括號包著
            lists.push(<li>{names[i]}</li>)
        }
        for (const [key, value] of Object.entries(names)) {
            lists.push(<li>{value}</li>)
        }

        const personList = persons.map(person => <Person person={person} />)

        return <div>{lists}{personList}</div>

        // const personList = persons.map(person => <h2>I'm {person.name}. I'm {person.age}. I know {person.skill}</h2>)

        // return <div>{personList}</div>
        // let lists = []
        // for(let i=0;i<=names.length-1;i++) {
        //     //記得在JSX中使用JS變數要用花括號包著
        //     lists.push(<li>{names[i]}</li>)
        // }
        // return (
        //     <div>
        //         {
        //             lists
        //         }
        //         {
        //             persons.map(person => <h2>I'm {person.name}. I'm {person.age}. I know {person.skill}</h2>)
        //         }
        //     </div>
        // )
    }
}

export default NameList

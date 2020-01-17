// import React, { PureComponent } from 'react'
import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'


// if parent component is a pure component then all child components will rerednder depending on the behavior of the pure component
// even child components are regular components.
// class ParentComp extends PureComponent{
class ParentComp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: 'Vishwas'
        }
    }

    // pure component use shallow comparisons against props & state
    // so please always use new object for rerendering
    // don't try to push data into the same object you had
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Vishwas'
            })
        }, 2000)
    }

    render() {
        console.log('*****************Parent Render*****************')
        return (
            <div>
                Parent Component
                <RegComp name={this.state.name}></RegComp>
                <PureComp name={this.state.name}></PureComp>
            </div>
        )
    }
}

export default ParentComp

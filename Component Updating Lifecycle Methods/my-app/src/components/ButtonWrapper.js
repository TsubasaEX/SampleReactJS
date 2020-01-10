//method 4.2 - styled components
import React from 'react'
import styled from 'styled-components'


function ButtonWrapper(props) {
    const Wrapper = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: ${(props) => {
        console.log(props)
        return props.clicked ? "blue":"palevioletred"
    }};
    margin: 0 1em;
    padding: 0.25em 1em;
    `

    return (
        // {...this.props} spreads out the "own" enumerable properties in props as discrete properties on the Modal element you're creating.
        // <Modal {...this.props} title='Modal heading' animation={false}>
        // would be the same as
        // <Modal a={this.props.a} b={this.props.b} title='Modal heading' animation={false}>
        <div>
            <Wrapper primary={false} {...props}></Wrapper>
            {/* <Wrapper clicked={true}>gfdgfdg</Wrapper> */}
        </div>
    )
}

export default ButtonWrapper

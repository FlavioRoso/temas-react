import React from 'react'
import { Container } from './styles'

function Select({callback, children, initial}) {

    const change = (event) =>{
        
        callback(event.target.value);
    }



    return (
        <Container >
            <select onChange={(event) => change(event)} >
                {children}
            </select>
        </Container>
    )
}

export default Select

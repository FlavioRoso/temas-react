import React from 'react'
import { Container } from './styles'

function Select({callback, children, label}) {

    const change = (event) =>{
        
        callback(event.target.value);
    }



    return (
        <Container >
            <label>{label}</label>
            <select  onChange={(event) => change(event)} >
                {children}
            </select>
        </Container>
    )
}

export default Select

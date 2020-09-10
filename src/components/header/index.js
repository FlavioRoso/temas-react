import React , { useContext }from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { Container } from './styles';




function Header() {
    const theme =  useContext(ThemeContext);
    let checked = true;
    

    const handleChange = ()=>{

        checked = !checked;
 
        console.log(checked);
    }

 

    return (
        <Container >
            <button onClick={handleChange}></button>

         

        </Container>
    );
}

export default Header;
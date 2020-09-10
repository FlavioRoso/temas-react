import React, { useContext,useState } from 'react'

import { Container, Principal } from './styles.js';

import Header from '../../components/header';
import Main from '../../components/main';
import MenuLateral from '../../components/menu-lateral';


//themes
import { ThemeContext } from 'styled-components';
import ToggleButton from '../../components/toggleButton'
import { Light } from '../../styles/themes/light';
import { Dark } from '../../styles/themes/dark';


export default function Home() {



    const theme =  useContext(ThemeContext);
    let [checked,setChecked] = useState(true);

   

    const handleChange = (stateButton)=>{



        setChecked(stateButton);

        theme.settings =  checked ? Light.settings : Dark.settings

        console.log(theme.settings)

    }

   
        return (
            <Container>
                <MenuLateral/>
                <Principal>
                    <Header>
                        <ToggleButton onClick={handleChange} initial={false}></ToggleButton>
                    </Header>
                     <Main>
                     
                     </Main>
                </Principal>
            </Container>
        )
}
 
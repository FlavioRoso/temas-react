import React, { useContext,useState } from 'react'

import { Container, Principal } from './styles.js';

import Header from '../../components/header';
import Main from '../../components/main';
import MenuLateral from '../../components/menu-lateral';

import Select from '../../components/select';


//themes
import { ThemeContext } from 'styled-components';

import { ListThemes, ThemeLoader } from '../../styles/ThemeLoader'




export default function Home() {



    const theme =  useContext(ThemeContext);
    let [themeSelected,setThemeSelected] = useState(true);

   

    const handleChange = (value)=>{

        if(value)
        {
            setThemeSelected(value)
            const newTheme = ThemeLoader(value)
           
            theme.settings =  newTheme.settings
            console.log(theme.settings) 
        }
    }


        return (
            <Container>
                <MenuLateral/>
                <Principal>
                    <Header>
                        <Select callback={handleChange}>
                            {
                                ListThemes.map(row =>{
                                    return <option value={row}>{row}</option>
                                })
                            }
                        </Select>
                    </Header>
                     <Main>
                     
                     </Main>
                </Principal>
            </Container>
        )
}
 
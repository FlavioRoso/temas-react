import React, { useContext,useState } from 'react'

import { Container, Principal , Text , Article} from './styles.js';

import Header from '../../components/header';
import Main from '../../components/main';
import MenuLateral from '../../components/menu-lateral';

import Select from '../../components/select';


//themes
import { ThemeContext } from 'styled-components';

import { ListThemes, ThemeLoader } from '../../styles/ThemeLoader'




export default function Home() {



    const theme =  useContext(ThemeContext);
    const [themeSelected,setThemeSelected] = useState(localStorage.getItem('theme'));

  
    

   

    const handleChange = (value)=>{

        if(value && ListThemes.includes(value))
        {
            setThemeSelected(value)
            localStorage.setItem('theme',value)
            const newTheme = ThemeLoader(value)
           
            theme.settings =  newTheme.settings
            console.log(themeSelected) 
        }
    }


        return (
            <Container>
                <MenuLateral/>
                <Principal>
                    <Header>
                        <Text>
                            Tema Selecionado: <span>{themeSelected}</span>
                        </Text>
                        <Select callback={handleChange} label="Selecione Tema: ">
                            <option> ---- </option>
                            {
                                ListThemes.map(row =>{
                                    return <option value={row}  >{row}</option>
                                })
                            }
                        </Select>
                    </Header>
                     <Main>
                            <Article>
                                <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
                                <h2>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</h2>
                                <p>Mussum Ipsum, cacilds vidis litro abertis. Leite de capivaris, leite de mula manquis sem cabeça. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Cevadis im ampola pa arma uma pindureta. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio.</p>
                                <p>In elementis mé pra quem é amistosis quis leo. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Casamentiss faiz malandris se pirulitá. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.</p>
                                <p>Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum. Quem num gosta di mé, boa gentis num é. Copo furadis é disculpa de bebadis, arcu quam euismod magna.</p>
                                <p>Suco de cevadiss deixa as pessoas mais interessantis. Aenean aliquam molestie leo, vitae iaculis nisl. Detraxit consequat et quo num tendi nada. Quem num gosta di mim que vai caçá sua turmis!</p>
                                <p>Diuretics paradis num copo é motivis de denguis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Sapien in monti palavris qui num significa nadis i pareci latim. Si num tem leite então bota uma pinga aí cumpadi!</p>

                            </Article>
                     </Main>
                </Principal>
            </Container>
        )
}
 
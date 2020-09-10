import React from 'react'

import { Container, Principal } from './styles.js';

import Header from '../../components/header';
import Main from '../../components/main';
import MenuLateral from '../../components/menu-lateral';

class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <Container>
                <MenuLateral/>
                <Principal>
                    <Header/>
                     <Main>
                            
                     </Main>
                </Principal>
            </Container>
        )
    }
}

export default Home
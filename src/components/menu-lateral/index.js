import React from 'react';

import { Container, Logo } from './styles';

function MenuLateral() {
    return (
      <Container >
          <Logo>
              <img src="/logo192.png" alt="logo react"></img>
              <p>Themes</p>
          </Logo>
      </Container>
    );
}

export default MenuLateral;
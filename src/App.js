import React from 'react';

import Home from './pages/home'
import {ThemeProvider} from 'styled-components';

import { GlobalStyle } from './styles/global';

import { Dark } from './styles/themes/dark'

function App() {
  return (

    <>
      <GlobalStyle/>
      <ThemeProvider theme={Dark}>
          <Home/>
      </ThemeProvider>
    </>
  );
}

export default App;

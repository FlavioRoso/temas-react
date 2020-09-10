import React from 'react';

import Home from './pages/home'
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from './styles/global';

import { ThemeLoader } from './styles/ThemeLoader';




function App() {



  const theme = ThemeLoader('Dark');
 
  return (

    <>
      <GlobalStyle/>
      <ThemeProvider theme={theme}>
          <Home/>
      </ThemeProvider>
    </>
  );
}

export default App;

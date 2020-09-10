import React, {useState} from 'react';

import Home from './pages/home'
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from './styles/global';

import { ThemeLoader } from './styles/ThemeLoader';




function App() {

  const [theme,setTheme] = useState(localStorage.getItem('theme'))

  if(!theme)
  {
      setTheme('Dark')
  }
 


  const themeRender = ThemeLoader(theme);
 
  return (

    <>
      <GlobalStyle/>
      <ThemeProvider theme={themeRender}>
          <Home/>
      </ThemeProvider>
    </>
  );
}

export default App;

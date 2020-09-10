import React, {useState} from 'react';

import Home from './pages/home'
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from './styles/global';

import { ThemeLoader } from './styles/ThemeLoader';




function App() {

  const [theme,setTheme] = useState(localStorage.getItem('theme'))

  let themeRender ;
  if(!theme)
  {
      setTheme('Dark');
      localStorage.setItem('theme','Dark');
      themeRender = ThemeLoader('Dark');
  }
  else
  {
      themeRender = ThemeLoader(theme);
  }
 


  
 
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

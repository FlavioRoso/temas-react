import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Fira+Sans+Extra+Condensed:wght@100;300&family=Open+Sans&family=PT+Serif&family=Playfair+Display&family=Roboto:wght@100;300;500&display=swap');

@font-face{
    font-family: 'clock-font';
    src:url('digital-7.ttf')
}

  
/* RESET */
* { 
    margin:0; 
    padding:0;  
    border:0; 
    vertical-align:baseline; 
    -webkit-tap-highlight-color: rgba(0,0,0,0); 
    
  }
/*  transition: all 0.2s linear;  -webkit-transition: all 0.2s linear; -moz-transition: all 0.2s linear; -ms-transition: all 0.2s linear; */


.verde{ color: #7fdd2d}
/* tap-hig... removendo quadro azul links mobile */
h1, h2, h3, h4, h5, h6, a { font-weight:400; color:#333; }
img, picture, video, embed { max-width: 100%; } /* truque para deixar as imagens e outros elementos adaptáveis */
a { text-decoration:none; outline:none ;}
a:hover { text-decoration:underline; }
input:focus, button:focus, textarea:focus, select:focus { outline: none; }
input, select, textarea { -webkit-appearance: none; -moz-appearance: none; appearance: none; border-radius: 0px; } 

input[type=number]::-webkit-outer-spin-button, input[type=number]::-webkit-inner-spin-button { -webkit-appearance: none; }
input[type=number] { -moz-appearance:textfield; }
/* remover setas contador input tipo number */

.clearfix:before,.clearfix:after { content: " "; display: table; } 
.clearfix:after { clear: both; } 
.clearfix { *zoom: 1; }
.espaco{ clear: both; float: none; height: 10px; }
/* fazer com que todos elementos fiquem dentro da div #conteudo por exemplo */

*, *:before, *:after { -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; }

hr { height:1px; background-color:hsla(0,0%,51%,.2); clear:both; }
hr.marginTop30 { margin-top:30px; }
hr.marginTop50 { margin-top:50px; }
hr.marginBottom30 { margin-bottom:30px; }
hr.marginBottom50 { margin-bottom:50px; }
hr.marginTopTitulo { margin-top:50px; }

/* BASE */
html, body { height:100%; }
body { color:#4D4D4D; font-size:14px; background:#F7F7F7; font-family: arial; margin: 0px; padding: 0px; min-height: 100%}
#tudo { position:relative; float:left; width:100%; height:100%; min-width:320px; padding-top:40px;  }
#container { float:left; width:100%; min-height:400px; padding:30px 0; overflow:hidden; }
#container.zero { padding:0; }
.meio-conteudo { width:90%; margin:0 auto; }
.meio-conteudo.blog-detalhe { width:960px; }

#root{
    *{
        transition: all 0.2s linear;  -webkit-transition: all 0.2s linear; -moz-transition: all 0.2s linear; -ms-transition: all 0.2s linear;
    }
}

   


`
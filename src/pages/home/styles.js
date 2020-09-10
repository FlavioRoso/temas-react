import styled from 'styled-components';

export const Container = styled.div`

    display:flex;
    

  
`;

export const Principal = styled.div`


    width:100%;
    height: fit-content;
    

  
`;

export const Text = styled.p`


    color: ${props => props.theme.settings.colors.primaryText};
    display: flex;
    align-content: center;
    padding: 10px;
    font-size: 20px;
    position: relative;
    span{
        background: ${props => props.theme.settings.colors.background};
        padding: 5px;
        border-radius: 10px;
        position: relative;
        top: -5px

    }


    @media screen and (max-width: 1024px){
        display: none;
    }


  
`;

export const Article = styled.article`

    padding: 20px;
    color: ${props => props.theme.settings.colors.primaryText};
   
    max-width: 1000px;
    width: 90%;
    margin: 0 auto;
    font-family: ${props => props.theme.settings.fonts.text};
    h1{
        font-size: 60px;
        font-family: ${props => props.theme.settings.fonts.title};
        color: ${props => props.theme.settings.colors.primaryText};
        margin-bottom: 40px;
    }
    h2{
        font-size: 30px;
        margin-bottom: 60px;
        color: ${props => props.theme.settings.colors.primaryText};
    }

    p{
        font-size: 22px;
        margin-bottom: 15px;
    }


    @media screen and (max-width: 650px){
        h1{
            font-size: 50px;
            font-weight: 600px;
            margin-bottom: 70px;
        }

        h2{
            font-size: 40px;
            margin-bottom: 100px;
        }

        p{
            font-size: 30px;
         
        }
    }
  
`;

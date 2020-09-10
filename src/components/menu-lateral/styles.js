import styled from 'styled-components';

export const Container = styled.aside`

    width: 300px;

    position: Static;
    min-height: 100%;
    background: ${props => props.theme.settings.colors.secundary};
    
    @media screen and (max-width: 1024px){
        display: none;
    }
`;

export const Logo = styled.div`

    display: flex;


    img{
        width: 60px;
        height: 60px;
    }
    p{
        font-family: 'Roboto 300';
        color: ${props => {
            
            if(props.theme.settings.name === "Coffee") 
                return props.theme.settings.colors.secundaryText
            else
                return props.theme.settings.colors.primaryText
        }};
        font-size: 50px;
        text-align: center;
        width: 90%;
    }

`


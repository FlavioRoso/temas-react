import styled from 'styled-components';

export const Container = styled.header`


    width: 100%;
    height: fit-content;
    padding: 10px;
    background: ${props => props.theme.settings.colors.primary};
    display: flex;
    align-content: center;
    justify-content: space-between;
    position: static
  
  
`;

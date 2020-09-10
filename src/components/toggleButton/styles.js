import styled from 'styled-components';

export const Container = styled.button`

    width: 25px;
    height: 25px;
    background: ${props=>props.active ? '#93f593' : '#fff'};
    color: ${props=>props.active ? '#fff' : '#93f593'}
    
  
`

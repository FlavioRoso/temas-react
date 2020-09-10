import styled from 'styled-components';

export const Container = styled.div`
    width: fit-content;
    float: left;
    padding: 10px
    select{
    padding: 5px;
    font-size: 17px;
      
    min-width: 200px;
    }
    label{
        color: ${props => props.theme.settings.colors.primaryText};
     
        align-content: center;
        padding: 10px;
        font-size: 20px;
        position: relative;
    }

    select{
        background-color: #f1f1f1;
        border: 1px solid #999;
    }

  
`;

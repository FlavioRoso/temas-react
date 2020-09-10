import React, { useState } from 'react';

import CheckIcon from '@material-ui/icons/Check';

import { Container } from './styles';


function ToggleButton(props) {
    
    const [buttonState,setButtonState] = useState(props.initial);

    const handler = () => {

        setButtonState(!buttonState);
        if(props.onClick)
            props.onClick(buttonState);
    }

    return (
        <Container active={buttonState} onClick={handler}>
            {buttonState ? <CheckIcon/> : ''}
        </Container>
    )
}





export default ToggleButton

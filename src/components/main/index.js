import React from 'react'

import { Container} from './styles.js';



class Main extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <Container>
               {this.props.children}
            </Container>
        )
    }
}

export default Main
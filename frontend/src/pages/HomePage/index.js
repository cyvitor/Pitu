import React from "react";
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Header from '../../components/Header'

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Header title='Pitu - encutrador de link'>HomePage</Header>
                <FontAwesomeIcon icon="fa-solid fa-square-check" /> Pitu home page
            </Container>
        )
    }

}

export default HomePage;
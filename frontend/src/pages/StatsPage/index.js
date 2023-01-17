import React from "react";
import Header from '../../components/Header';
import { Container } from 'react-bootstrap';
import ShortenerService from "../../services/shortenerService";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StatsContainer, StatsRow, StatsBox, StatsBoxTitle } from './styles'

class StatsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            shortenedURL: {},
            errorMessage: '',
        }
    }

    async componentDidMount() {
        const { code } = this.props.match.params;
        try {
            const service = new ShortenerService();
            const shortenedURL = await service.getStats(code);
            this.setState({isLoading: false, shortenedURL})
        } catch (error) {
            this.setState({isLoading: false, errorMessage: 'ERROR, deu ruim ' + error})
        }
    }

    render() {
        const { isLoading, errorMessage, shortenedURL } = this.state;
        return (
            <Container>
                <Header title='Pitu - encutrador de link'>Contador</Header>
                {errorMessage ? (
                    <StatsContainer className="text-center">
                        <FontAwesomeIcon size="3x" color="#f8d7da" icon="exclamation-triangle" />
                        <p className="m-3">{errorMessage}</p>
                        <a className="btn btn-primary" href="/" >Encontar uma URL</a>
                    </StatsContainer>
                ) : (
                    <StatsContainer className="text-center">
                        <p><b>http://172.16.2.200/{shortenedURL.code}</b></p>
                        <p>Rediciona para:<br />{shortenedURL.url}</p>
                        <StatsRow>
                            <StatsBox>
                                <b>{shortenedURL.hits}</b>
                                <StatsBoxTitle>Acessos:</StatsBoxTitle>
                            </StatsBox>
                            <StatsBox>
                                <b>{shortenedURL.relativeDate}</b>
                                <StatsBoxTitle>Ultimo acesso:</StatsBoxTitle>
                            </StatsBox>
                        </StatsRow>
                        <a className="btn btn-primary" href="/" >Encontar uma URL</a>
                    </StatsContainer>
                )}
            </Container>
        )
    }

}

export default StatsPage;
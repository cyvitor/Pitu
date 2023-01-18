import React from "react";
import { Container } from "react-bootstrap";
import Header from "../../components/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ShortenerService from "../../services/shortenerService";

class RedirectPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            url: '',
            errorMessage: '',
        }
    }

    async componentDidMount() {
        const { code } = this.props.match.params;

        try {
            const service = new ShortenerService();
            const { url } = await service.getLink(code);
            window.location = url;
        } catch (error) {
            this.setState({ isLoading: false, errorMessage: 'ERROR, deu ruim ' + error })
        }
    }

    render() {
        const { errorMessage } = this.state;
        return (
            <Container>
                <Header title="Pitu - encutrador de link">RedirectPage</Header>
                {errorMessage ? (
                    <Container className="text-center">
                        <FontAwesomeIcon size="3x" color="#f8d7da" icon="exclamation-triangle" />
                        <p className="m-3">{errorMessage}</p>
                        <a className="btn btn-primary" href="/" >Encontar uma URL</a>
                    </Container>
                ) : (<><p className="text-center">Redirecionando....</p></>)}
            </Container>
        )
    }

}

export default RedirectPage;
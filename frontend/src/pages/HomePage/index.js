import React from "react";
import Header from '../../components/Header';
import { ContentContainer, Form } from './styles';
import { Container, InputGroup, FormControl, Button, Alert, Spinner } from 'react-bootstrap';
import ShoternerService from '../../services/shortenerService';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            url: '',
            code: '',
            erroMessage: '',
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { url } = this.state;

        this.setState({ isLoading: true, erroMessage: '' });

        if (!url) {
            this.setState({ isLoading: false, erroMessage: 'Informe URL.' })
        } else {
            try {
                const service = new ShoternerService();
                const result = await service.generate({ url });

                this.setState({ isLoading: false, code: result.code })
            } catch (error) {
                this.setState({ isLoading: false, erroMessage: 'Ops, deu rum: ' + error });
            }
        }
    }

    copyToClipboard = () => {
        const element = this.inputURL;
        element.select();
        document.execCommand('copy');
    }

    render() {
        const { isLoading, erroMessage, code } = this.state;
        return (
            <Container>
                <Header title='Pitu - encutrador de link'>HomePage</Header>
                <ContentContainer>
                    <Form onSubmit={this.handleSubmit}>
                        <InputGroup>
                            <FormControl
                                placeholder="Digite a URL"
                                defaultValue=""
                                onChange={e => this.setState({ url: e.target.value })}
                            />
                            <Button variant="primary" type="submit">Encurtar</Button>
                        </InputGroup>
                    </Form>
                </ContentContainer>

                {isLoading ? (
                    <Spinner animation="border" />
                ) : (
                    code && (
                        <>
                            <InputGroup className="mb-3">
                                <FormControl
                                    autoFocus={true}
                                    defaultValue={`http://172.16.2.200/${code}`}
                                    ref={(input) => this.inputURL = input}
                                />
                                <Button variant="outline-secondary" onClick={() => this.copyToClipboard()}>Copiar</Button>
                            </InputGroup>
                            <p>Contator de acesso:</p>
                            <InputGroup className="mb-3">
                                <FormControl
                                    
                                    defaultValue={`http://172.16.2.200/${code}/stats`}
                                    ref={(input2) => this.inputURL = input2}
                                />
                                <Button variant="outline-secondary" onClick={() => this.copyToClipboard()}>Copiar</Button>
                            </InputGroup>                            
                            
                        </>
                    )
                )}
                {erroMessage && <Alert variant="danger">{erroMessage}</Alert>}
            </Container>
        )
    }

}

export default HomePage;
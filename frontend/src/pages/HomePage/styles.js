import styled from 'styled-components';

// retirei o display: flex; das propriedades pois estava deixando o form pequeno

export const ContentContainer = styled.div`
    
    justify-content: center !important;
    margin-bottom: 2rem;
`;

export const Form = styled.form`
    flex: 0 0 80%
    max-width: 80%
    padding: 2rem 2rem 1rem 2rem;
    border: solid 1px #ccc;
    boder-radius: .25rem;
    text-align: center;
`;

export const AdsBlock = styled.div`
    display: block;
    border: solid 1px #f7f7f7;
    background-color: #f1f1f1;
    text-center;
    padding: 2rem;
    flex: 0 0 80%;
    max-width: 80%;
`
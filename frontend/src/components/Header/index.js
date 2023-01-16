import React from 'react';
import {Logo, HeaderContainer} from './styles';
import R2D2Icon from '../../assets/favicon.ico';

function Header(props) {
    return (
        <>
            <HeaderContainer>
                <Logo src={R2D2Icon} alt='{props.title}'/>
                <h1>{props.title}</h1>
                <p>{props.children}</p>
            </HeaderContainer>
        </>

    )
}

export default Header;
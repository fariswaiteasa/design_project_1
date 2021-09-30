import React from 'react'
import {
    HeaderContainer,
    Logo,
    Navigation,
} from './HeaderStyle';
import logo from '../../images/triquetra.png';

const Header = () => {
    return (
        <> 
            <HeaderContainer>
                <Logo>
                    <img src={logo} alt="Logo"/>
                    <h1>art/parc | 2021</h1>
                </Logo>
                <Navigation>
                    <h1>exhibits</h1>
                    <h1>curators</h1>
                    <h1>registration</h1>
                </Navigation>
            </HeaderContainer>
        </>
    )
}

export default Header

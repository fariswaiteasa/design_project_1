import React from 'react'
import {
    HeaderContainer,
    Logo,
    Navigation,
} from './HeaderStyle';
import logo from '../../images/triquetra.png';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    return (
        <> 
            <HeaderContainer>
                <Logo>
                    <img src={logo} alt="Logo"/>
                    <h1>art/parc.2021</h1>
                </Logo>
                <Navigation>
                    <h1>about</h1>
                    <h1>exhibits</h1>
                    <h1>curators</h1>
                    <h1>registration</h1>
                    <MenuIcon />
                </Navigation>
            </HeaderContainer>
        </>
    )
}

export default Header

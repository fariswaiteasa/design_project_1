import React from 'react'
import {
    HeaderContainer,
    Logo,
    Navigation,
} from './HeaderStyle';
import logo from '../../images/triquetra.png';
import videoMain from '../../videos/mainVideo.mp4'

const Header = () => {
    return (
        <> 
            <HeaderContainer>
                <Logo>
                    <img src={logo} />
                    <h1>impul.se | 2021</h1>
                </Logo>
                <Navigation>
                    <h1>exhibits</h1>
                    <h1>curators</h1>
                    <h1>contact</h1>
                </Navigation>
            </HeaderContainer>
        </>
    )
}

export default Header

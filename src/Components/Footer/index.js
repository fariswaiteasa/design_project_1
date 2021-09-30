import React from 'react'
import {
    FooterContainer,
    FooterLeft,
    FooterRight,
    Socials,
    Copyright
} from './FooterStyle';

import logo from '../../images/triquetra.png';
import { Facebook, Twitter, Instagram} from '@mui/icons-material';

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterLeft>
                    <h1>EXHIBITS.</h1>
                    <h1>CURATORS.</h1>
                    <h1>REGISTRATION.</h1>
                </FooterLeft>
                <FooterRight>
                    <Socials>
                        <Facebook />
                        <Twitter />
                        <Instagram />
                    </Socials>
                </FooterRight>
                <Copyright>
                    <h1>COPYRIGHT 2021 ANIMATICS PRODUCTION HOUSE LLC</h1>
                    <h1>ALL RIGHTS RESERVED</h1>
                    <img src={logo} alt="Logo" />
                </Copyright>
            </FooterContainer>
        </>
    )
}

export default Footer

{
    /*
    #TODO: Background pattern for footer using SVG pattern or self make in Hydra
    #TODO: Links for socials
    */
}

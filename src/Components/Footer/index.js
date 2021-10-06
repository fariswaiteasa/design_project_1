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
                    <h1>art/parc | 2021</h1>
                    <h2>EXHIBITS.</h2>
                    <h2>CURATORS.</h2>
                    <h2>REGISTRATION.</h2>
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

export default Footer;

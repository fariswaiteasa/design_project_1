import React from 'react'
import styled from 'styled-components';
import logo from '../../images/triquetra.png'

const Logo = styled.div`
    position: -webkit-sticky;
    position: sticky;
    z-index: -3;
    opacity: 20%;
    display: flex;
    justify-content: center;
    top: 20px;

    > img {
        width: 600px;
        height: 600px;
    }
`;

const Background = () => {
    return (
        <Logo>
            <img src={logo} alt='' />
        </Logo>
    )
}

export default Background

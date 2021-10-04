import styled from 'styled-components';

export const Container = styled.div`
    overflow: hidden;
    background: black;
    padding: 5vw;
    height: 100vh;
    color: white;
`;

export const ImageContainer = styled.div`
    display: flex;
    position: relative;
    left: ${props => props.left};

    > img {
        width: 200px;
        height: 250px;
        object-fit: cover;
    }
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-right: 5vw;
    width: 40vw;

    > h1 {
        font-size: 100px;
    }

    > h2 {
        font-size: 50px;
        font-weight: 300;
    }
`;


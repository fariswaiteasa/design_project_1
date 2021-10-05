import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    padding: 5vw;
    width: 100vw;
    height: 100vh;
`;

export const ImageContainer = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    background: black;
    width: 50vw;
    height: auto;
    z-index: 0;
`;

export const Image = styled.div`
    display: flex;
    position: absolute;
    left: ${props => props.left};
    top: ${props => props.top};

    > img {
        width: 200px;
        height: 250px;
        object-fit: cover;
    }
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50vw;
    padding: 30px;
    > h1 {
        font-size: 100px;
    }

    > h2 {
        font-size: 50px;
        font-weight: 300;
    }
`;


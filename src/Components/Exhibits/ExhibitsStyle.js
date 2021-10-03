import styled from 'styled-components';

export const Container = styled.div`
    overflow: hidden;
    padding: 10vw;
    height: 100vh;
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
    padding-right: 15vw;
    width: 40vw;

    > h1 {
        font-size: 100px;
    }

    > h2 {
        font-size: 50px;
        font-weight: 300;
    }
`;


import styled from 'styled-components';

export const ShowcaseContainer = styled.div`
    overflow: hidden;
    height: 100vh;
    padding: 0;
    > video {
        width: 100vw;
        height: 100vh;
        object-fit: cover;
    }
`;

export const ShowcaseText = styled.div`
    position: absolute;
    width: 100vw;
    top: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ShowcaseTitle = styled.div`
    display: flex;
    > h1 {
        font-size: clamp(1rem, 7vw, 10rem);

        &.one {
            color: #edea3b;
        }

        &.two {
            color: black;
        }

        &.three {
            color: black;
        }
    }

`;

export const ShowcaseDesc = styled.h1`
    color: white;
    font-size: clamp(1rem, 3vw, 10rem);
    font-weight: 700;
`;

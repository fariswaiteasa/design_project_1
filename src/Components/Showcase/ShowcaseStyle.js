import styled from 'styled-components';

export const ShowcaseContainer = styled.div`
    overflow: hidden;
    position: relative;
    height: 700px;
    padding: 0;
    > video {
        width: 100vw;
        height: 700px;
        object-fit: cover;
    }
`;

export const ShowcaseText = styled.div`
    position: absolute;
    left: 40%;
    top: 40%;
`;

export const ShowcaseTitle = styled.div`
    display: flex;
    > h1 {
        font-size: 5em;

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
    font-size: 2em;
    font-weight: 700;
`;

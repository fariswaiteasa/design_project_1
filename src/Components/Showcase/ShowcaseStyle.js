import styled from 'styled-components';

export const ShowcaseContainer = styled.div`
    overflow: hidden;
    height: 600px;
    padding: 0;
    > video {
        width: 100vw;
        height: 600px;
        object-fit: cover;
    }
`;

export const ShowcaseText = styled.div`
    position: relative;
    left: 40%;
    bottom: 350px;
`;

export const ShowcaseTitle = styled.div`
    display: flex;
    > h1 {
        font-size: 4em;

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

export const ShowcaseDesc = styled.p`
    color: white;
    font-weight: 300;
`;

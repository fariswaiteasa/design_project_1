import styled from 'styled-components';

export const Container = styled.div`
    padding: 5vw;
    > h1 {
        font-size: 50px;
        padding: 30px;
    }
`;

export const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`;

export const Card = styled.div`
    display: flex;
    position: relative;
    width: 200px;
    height: 400px;
    
    > img {
        object-fit: fill;
    }

    > h1 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 30px;
        font-weight: 700;
        color: white;
    }
`;

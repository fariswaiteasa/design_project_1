import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    > h1 {
        font-size: 50px;
        padding: 30px;
        text-align: end;
    }
`;

export const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const Card = styled.div`
    display: flex;
    position: relative;
    
    > img {
        width: 300px;
        height: 400px;
        object-fit: cover;
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

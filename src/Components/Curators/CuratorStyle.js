import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    > h1 {
        font-size: 50px;
        padding: 30px;
        text-align: end;
    }
`;

export const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin: 0 30px 0 30px;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

export const Card = styled.div`
    display: flex;
    position: relative;
    
    > img {
        min-width: 250px;
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

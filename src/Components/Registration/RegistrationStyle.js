import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
`;

export const RegisterInfoSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: justify;
    margin: 40px;

    > h1 {
        font-size: 50px;
        padding: 30px;
    }

    > h2 {
        font-size: 16px;
        font-weight: 300;
        padding: 20px 6vw 20px 6vw;
    }
`;

export const Facilities = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    height: auto;
    width: 100%;
    align-items: center;
    margin: 30px 0 30px 0;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        min-width: 70%;
    }
`;

export const FacilitiesDesc = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 320px;
    min-height: 300px;
    margin: 0 1vw 0 1vw;
    background: black;
    text-align: justify;
    color: white;
    
    > h2 {
        font-size: clamp(0.7rem,1vw,2rem);
        font-weight: 300;
        padding: 0 30px 0 30px;
        height: 30px;
        margin-bottom: 40px;
        line-height: 20px;
    }

    > .MuiSvgIcon-root {
        margin-bottom: 40px;
        width: 70px;
        height: 70px;
        align-self: center;
    }

    @media screen and (max-width: 768px) {
        > h2 {
            font-size: 16px;
        }
    }
`;

export const TicketContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    margin-top: 30px;
    margin-bottom: 30px;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        margin: 20px 0 20px 0;
    }

`;

export const Ticket = styled.div`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 20px 0 20px 0;
    @media screen and (max-width: 768px) {
        width: 80%;
    }
`;

export const TicketTier = styled.div`
    display: flex;
    flex-direction: row;
    background: ${props => props.background};
    box-shadow: -5px 2px 10px black;
    margin: 20px 0 20px 0;
    padding: 25px;
    height: 100px;
    width: 100%;
    cursor: pointer;
    justify-content: space-between;
    align-items: center;

    &:hover {
        background: #edea3b;
        transition: 300ms ease-in-out;
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

`;

export const TicketTierName = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 40%;

    > h1 {
        font-size: 20px;
    }

    > h2 {
        font-size: 16px;
        font-weight: 300;
    }

    @media screen and (max-width: 768px) {
        align-items: center;
        margin: 5px 0 5px 0;
    }
`;

export const TicketIcons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: end;

    > .MuiSvgIcon-root {
        margin: 0 0.5vw 0 0.5vw;
    }
`;

export const SignUp = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;

    > form {
        width: 100%;
    }

    > h1 {
        margin-bottom: 20px;
    }

    @media screen and (max-width: 768px) {
        width: 80%;
    }
`;

export const FormInput = styled.div`
    display: flex;
    flex-direction: column;

    > input {
        background: transparent;
        border: 0;
        border-bottom: 3px solid #000;
        padding: 20px;
        color: #000;
        width: auto;
    }
`;

export const Submit = styled.div`

    margin: 3vh 0 3vh 0;

    > input {
        background: #edea3b;
        border: none;
        padding: 20px;
        align-self: center;
        width: 100%;
        
        &:hover{
            background: #000;
            transition: 100ms ease-in;
            color: white;
        }
    }
`;
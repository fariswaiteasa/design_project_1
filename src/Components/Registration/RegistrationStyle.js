import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5vw;
`;

export const RegisterInfo = styled.div`
    background: lightblue;
`;

export const TicketContainer = styled.div`
    background: lightpink;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

export const Ticket = styled.div`
    background: lightgrey;
`;

export const TicketTier = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    margin: 20px;
    height: 100px;
    width: 500px;
    cursor: pointer;
`;

export const SignUp = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > form {
        width: 100%;
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

    > input {
        background: yellow;
        border: 0;
        padding: 20px;
        align-self: center;
        width: 100%;
    }
`;
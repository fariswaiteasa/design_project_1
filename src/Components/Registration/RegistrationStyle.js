import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5vw;
`;

export const RegisterInfo = styled.div`

    > h1 {
        font-size: 50px;
        padding: 30px;
    }
`;

export const TicketContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

`;

export const Ticket = styled.div`
    width: 40vw;
`;

export const TicketTier = styled.div`
    display: flex;
    flex-direction: column;
    background: ${props => props.background};
    box-shadow: -5px 2px 10px black;
    margin: 20px;
    padding: 10px;
    height: 100px;
    width: auto;
    cursor: pointer;
    justify-content: center;

    > h1 {
        font-size: 30px;
    }

    &:hover {
        background: #edea3b;
        transition: 300ms ease-in-out;
    }

`;

export const SignUp = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > form {
        width: 30vw;
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
        border: 0;
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
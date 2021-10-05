import React, {useState} from 'react'
import {
    Container,
    RegisterInfo,
    Ticket,
    TicketContainer,
    TicketTier,
    SignUp,
    FormInput,
    Submit
} from './RegistrationStyle'

const Registration = () => {

    const [tier,setTier] = useState(0);

    return (
        <>
            <Container>
                <RegisterInfo>
                    <h1>registration.</h1>
                </RegisterInfo>
                <TicketContainer>
                    <Ticket>
                        <TicketTier 
                            onClick={() => setTier(1)}
                            background={(tier === 1) ? "#edea3b" :"white"}
                        >
                            <h1>EXPLORER</h1>
                        </TicketTier>
                        <TicketTier 
                            onClick={() => setTier(2)}
                            background={(tier === 2) ? "#edea3b" :"white"}
                        >
                            <h1>ADVENTURER</h1>
                        </TicketTier>
                        <TicketTier 
                            onClick={() => setTier(3)}
                            background={(tier === 3) ? "#edea3b" :"white"}
                        >
                            <h1>FOUNDER</h1>
                        </TicketTier>
                    </Ticket>
                    <SignUp>
                        <form>
                            <FormInput>
                                <input type="text" placeholder="name." />
                                <input type="text" placeholder="e-mail." />
                            </FormInput>
                            <Submit>
                                <input type="submit" value="submit." />
                            </Submit>
                        </form>
                    </SignUp>
                </TicketContainer>
            </Container>
        </>
    )
}

export default Registration

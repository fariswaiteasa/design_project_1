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

    const [tier,setTier] = useState(1);

    return (
        <>
            <Container>
                <RegisterInfo>
                    <h1>Registration Info goes here</h1>
                </RegisterInfo>
                <TicketContainer>
                    <Ticket>
                        <h1>You have selected Tier {tier}</h1>
                        <TicketTier onClick={() => setTier(1)}>
                            <h1>TIER 1</h1>
                        </TicketTier>
                        <TicketTier onClick={() => setTier(2)}>
                            <h1>TIER 2</h1>
                        </TicketTier>
                        <TicketTier onClick={() => setTier(3)}>
                            <h1>TIER 3</h1>
                        </TicketTier>
                    </Ticket>
                    <SignUp>
                        <h1>Sign Up Form goes here</h1>
                        <form>
                            <FormInput>
                                <input type="text" placeholder="Name" />
                                <input type="text" placeholder="E-Mail" />
                            </FormInput>
                            <Submit>
                                <input type="submit" value="Submit" />
                            </Submit>
                        </form>
                    </SignUp>
                </TicketContainer>
            </Container>
        </>
    )
}

export default Registration

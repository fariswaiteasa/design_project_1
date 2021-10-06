import React, {useState} from 'react'
import {
    Container,
    RegisterInfoSection,
    Facilities,
    FacilitiesDesc,
    Ticket,
    TicketContainer,
    TicketTier,
    TicketTierName,
    TicketIcons,
    SignUp,
    FormInput,
    Submit
} from './RegistrationStyle'

//Icon Imports
import CottageIcon from '@mui/icons-material/Cottage';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import EarbudsIcon from '@mui/icons-material/Earbuds';
import NaturePeopleIcon from '@mui/icons-material/NaturePeople';

//Data import
import {
    RegisterInfo,
    FacilitiesInfo,
    HouseInfo,
    BusInfo,
    RestAreaInfo,
    vipInfo
} from './data'

const Registration = () => {

    const [tier,setTier] = useState(0);

    return (
        <>
            <Container>
                <RegisterInfoSection>
                    <h1>registration.</h1>
                    <h2>{RegisterInfo}</h2>
                    <h2>{FacilitiesInfo}</h2>
                </RegisterInfoSection>
                <Facilities>
                        <FacilitiesDesc>
                            <CottageIcon />
                            <h2>{HouseInfo}</h2>
                        </FacilitiesDesc>
                        <FacilitiesDesc>
                            <AirportShuttleIcon />
                            <h2>{BusInfo}</h2>
                        </FacilitiesDesc>
                        <FacilitiesDesc>
                            <EarbudsIcon />
                            <h2>{RestAreaInfo}</h2>
                        </FacilitiesDesc>
                        <FacilitiesDesc>
                            <NaturePeopleIcon />
                            <h2>{vipInfo}</h2>
                        </FacilitiesDesc>
                    </Facilities>
                <TicketContainer>
                    <Ticket>
                        <TicketTier 
                            onClick={() => setTier(1)}
                            background={(tier === 1) ? "#edea3b" :"white"}
                        >
                            <TicketTierName>
                                <h1>EXPLORER</h1>
                                <h2>$800</h2>
                            </TicketTierName>
                            <TicketIcons>
                                <AirportShuttleIcon />
                                <CottageIcon />
                            </TicketIcons>
                        </TicketTier>
                        <TicketTier 
                            onClick={() => setTier(2)}
                            background={(tier === 2) ? "#edea3b" :"white"}
                        >
                            <TicketTierName>
                                <h1>ADVENTURER</h1>
                                <h2>$1400</h2>
                            </TicketTierName>
                            <TicketIcons>
                                <EarbudsIcon />
                                <AirportShuttleIcon />
                                <CottageIcon />
                            </TicketIcons>
                        </TicketTier>
                        <TicketTier 
                            onClick={() => setTier(3)}
                            background={(tier === 3) ? "#edea3b" :"white"}
                        >
                            <TicketTierName>
                                <h1>FOUNDER</h1>
                                <h2>$3000</h2>
                            </TicketTierName>
                            <TicketIcons>
                                <NaturePeopleIcon />
                                <EarbudsIcon />
                                <AirportShuttleIcon />
                                <CottageIcon />
                            </TicketIcons>
                        </TicketTier>
                    </Ticket>
                    <SignUp>
                        <h1>Join the experience.</h1>
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

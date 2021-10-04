import React from 'react'
import {
    Container,
    CardContainer,
    Card
} from './CuratorStyle';

import curator1 from '../../images/curator1.jpg';
import curator2 from '../../images/curator2.jpg';
import curator3 from '../../images/curator3.jpg';

const Curators = () => {
    return (
        <>
            <Container>
                <h1>curators.</h1>
                <CardContainer>
                    <Card>
                        <img src={curator1} alt='' />
                        <h1>Obule Harak</h1>
                    </Card>
                    <Card>
                        <img src={curator2} alt='' />
                        <h1>Stacy Yerst</h1>
                    </Card>
                    <Card>
                        <img src={curator3} alt='' />
                        <h1>Brady Hørst</h1>
                    </Card>
                </CardContainer>
            </Container>
        </>
    )
}

export default Curators

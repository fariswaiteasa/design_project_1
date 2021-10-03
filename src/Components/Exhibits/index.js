import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import {
    Container,
    ImageContainer,
    TextContainer
} from './ExhibitsStyle';
import {description,imageBank} from './data';

const Exhibits = () => {

    const alignCenter = { display: 'flex', alignItems: 'center' }

    return (
        <Container>
            <Parallax pages={3}>
                <ParallaxLayer sticky={{start: 0, end: 3}} style={{...alignCenter, justifyContent: 'flex-end'}}>
                    <TextContainer>
                        <h1>art/parc</h1>
                        <h2>{description}</h2>
                    </TextContainer>
                </ParallaxLayer>

                <ParallaxLayer offset={1.5} speed={0.5} style={{...alignCenter, justifyContent: 'flex-start'}}>
                    <ImageContainer left="0px">
                        <img src={imageBank[0]} alt="" />
                    </ImageContainer>
                </ParallaxLayer>

                <ParallaxLayer offset={1.7} speed={1.2} style={{...alignCenter, justifyContent: 'flex-start'}}>
                    <ImageContainer left="100px">
                        <img src={imageBank[1]} alt="" />
                    </ImageContainer>
                </ParallaxLayer>

                <ParallaxLayer offset={1.9} speed={1} style={{...alignCenter, justifyContent: 'flex-start'}}>
                    <ImageContainer left="200px">
                        <img src={imageBank[2]} alt="" />
                    </ImageContainer>
                </ParallaxLayer>

                <ParallaxLayer offset={1.2} speed={0.3} style={{...alignCenter, justifyContent: 'flex-start'}}>
                    <ImageContainer left="300px">
                        <img src={imageBank[3]} alt="" />
                    </ImageContainer>
                </ParallaxLayer>

                <ParallaxLayer offset={1.4} speed={1.5} style={{...alignCenter, justifyContent: 'flex-start'}}>
                    <ImageContainer left="400px">
                        <img src={imageBank[4]} alt="" />
                    </ImageContainer>
                </ParallaxLayer>
            </Parallax>
        </Container>
    )
}

export default Exhibits

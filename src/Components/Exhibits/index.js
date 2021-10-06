import React from 'react';
import {
    Container,
    ImageContainer,
    Image,
    TextContainer,
    Logo
} from './ExhibitsStyle';
import {description,imageBank} from './data';

const Exhibits = () => {

    return (
        <>
            <Container>
                <ImageContainer>
                    <Image left="0px" top="-300px">
                        <img src={imageBank[0]} alt="" />
                    </Image>
                    <Image left="100px" top="-100px">
                        <img src={imageBank[1]} alt="" />
                    </Image>
                    <Image left="200px" top="200px">
                        <img src={imageBank[2]} alt="" />
                    </Image>
                    <Image left="300px" top="-250px">
                        <img src={imageBank[3]} alt="" />
                    </Image>
                    <Image left="400px" top="50px">
                        <img src={imageBank[4]} alt="" />
                    </Image>
                </ImageContainer>
                <TextContainer>
                    <h1>about.</h1>
                    <h2>{description}</h2>
                </TextContainer>
            </Container>
        </>
    )
}

export default Exhibits

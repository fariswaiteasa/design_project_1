import React from 'react';
import {
    ShowcaseContainer,
    ShowcaseText,
    ShowcaseTitle,
    ShowcaseDesc
} from './ShowcaseStyle'
import video from '../../videos/mainVideo.mp4';

const Showcase = () => {
    return (
        <>
            <ShowcaseContainer>
                <video src={video} autoPlay muted loop ></video>
                <ShowcaseText>
                    <ShowcaseTitle>
                        <h1 class="one">art/parc</h1>
                        <h1 class="two">&nbsp;|</h1>
                        <h1 class="three">&nbsp;2021</h1>
                    </ShowcaseTitle>
                    <ShowcaseDesc>Outdoor Art Installation</ShowcaseDesc>
                </ShowcaseText>
            </ShowcaseContainer>
        </>
    )
}

export default Showcase
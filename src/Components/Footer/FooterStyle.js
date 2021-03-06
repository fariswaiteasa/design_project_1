import styled from 'styled-components';

export const FooterContainer = styled.div`
    background-color: black;
    padding: 20px;
    display: grid;
    color: white;
    width: 100%;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 0.7fr 0.3fr;
    grid-template-areas: 
    "footleft footright"
    "copyright copyright";

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-rows: 2fr 1fr 1fr;
        grid-template-areas: "footleft" "footright" "copyright";

    }

`;

export const FooterLeft = styled.div`
    grid-area: footleft;
    display: flex;
    flex-direction: column;
    align-items: center;

    > h1 {
        font-size: 30px;
        padding: 10px;
    }

    > h2 {
        font-size: 20px;
        padding: 10px;       
    }
`;

export const FooterRight = styled.div`
    //background-color: lightgray;
    grid-area: footright;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Copyright = styled.div`
    grid-area: copyright;
    //background-color: lightgreen;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 10px;

    > h1 {
        font-size: 10px;
        font-weight: 300;
        padding: 10px;
    }

    > img {
         width: 20px;
         height: 20px;
         filter: invert(1)
     }
`;

export const Socials = styled.div`
    > .MuiSvgIcon-root {
        margin: 20px;
        font-size: 40px;

        &:hover {
            color: #edea3b;
            transition: 200ms ease-in;
        }
    }
`;

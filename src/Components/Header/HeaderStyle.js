import styled from 'styled-components';

export const HeaderContainer = styled.div`
    display: flex;
    padding: 20px;
    align-items: center;
    position: absolute;
    z-index: 999;
    background: transparent;
`;

export const Logo = styled.div`
    flex: 0.4;
    display: flex;
    align-items: center;
    margin-left: 40px;

     > img {
         width: 20px;
         height: 20px;
         padding-right: 5px;
     }

     > h1 {
         font-size: 15px;
         overflow: hidden;
         background-clip: text;
         background: linear-gradient(to right, black, black 50%, #edea3b 50%);
         -webkit-text-fill-color: transparent;
         background-size: 200% 100%;
         -webkit-background-clip: text;
         transition: background-position 275ms ease;
         text-decoration: none; // text decorations are clipped in WebKit browsers
         &:hover {
             background-position: 0 100%;
             background-position: 100%;
            }
        }
    `;

export const Navigation = styled.div`
    flex: 0.7;
    display: flex;
    justify-content: right;
    padding-right: 40px;

    > h1 {
        font-size: 15px;
        margin-left: 40px;
        cursor: pointer;

        &:hover {
            transform: translateY(-5px);
            transition: 200ms ease-in;
        }
    }
`;


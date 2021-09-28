import styled from 'styled-components';

export const HeaderContainer = styled.div`
    display: flex;
    padding: 20px;
    align-items: center;
    position: relative;
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
     }
`;

export const Navigation = styled.div`
    flex: 0.7;
    display: flex;
    justify-content: right;
    padding-right: 40px;

    > h1 {
        font-size: 10px;
        font-weight: lighter;
        margin-left: 40px;

        &:hover {
            color: red;
        }
    }
`;


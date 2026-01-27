import styled from "styled-components";

export const MainContainer = styled.main`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const DivMain = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    ul {
        list-style: none;
        display: grid;
        gap: .4em;
    }

    a {
        color: #000;
        text-decoration: none;
        transition: .2s;
        /* padding: 0; */
        width: 210px;
        height: 7dvh;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.25em;

        &:hover {
            scale: 1.1;
            box-shadow: 0 0 10px rgb(0 0 0 / .5);
        }
    }
`;
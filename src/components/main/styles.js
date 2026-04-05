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
        transition: 1s;
        position: relative;
        z-index: 1;
        width: 200px;
        height: 7dvh;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.25em;
        overflow: hidden;
        border-radius: .5em;

        &:hover {
            color: white;
        }
    }

    a::before {
        left: -230px;
        width: 220px;
        height: 100%;
        background-color: #25242a;
        border-radius: 0em 1em 1em 0;
        position: absolute;
        transition: .6s;
        z-index: -1;
        content: '';
    }

    a:hover::before {
        left: 0;
    }
`;
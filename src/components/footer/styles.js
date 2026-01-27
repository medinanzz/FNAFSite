import styled from "styled-components";

export const DivFooterContainer = styled.div`
    background-color: rgb(0 0 0 / .5);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1em;

    p {
        color: white;
    }
`;

export const IImg = styled.i`
    width: 35px;
    height: 35px;

    img {
        width: 35px;
        height: 35px;
    }
`;

export const Afooter = styled.a`
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;

    & span {
        height: 35px;
        align-content: center;

        &:hover {
            text-decoration: underline;
        }
    }
`;

export const DivCriador = styled.div`
    display: flex;
    color: white;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media screen and (width >= 600px) {
        flex-direction: row;
    }
`;
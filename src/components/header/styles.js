import styled from "styled-components";

export const DivHeader = styled.div`
    box-shadow: 0 0 10px rgb(0 0 0 / .5);
    padding: 1em;
    text-align: center;

    h1 {
        font-size: 1.8em;
    }

    @media screen and (width >= 600px) {
        h1 {
            font-size: 2em;
        }
    }
`;
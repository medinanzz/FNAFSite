import styled from "styled-components";

export const Title = styled.h1`
    text-align: center;
`;

export const DivText = styled.div`
    padding: 1em;
    flex: 1;
    p {
        text-align: justify;
    }

    .p1 {
        margin-bottom: 1em;
    }
    .p2 {
        margin-top: 1em;
    }

    .p {
        a {color: black; text-decoration: none; margin-left: .3em;}
        a:hover {text-decoration: underline;}
        address {
            margin-top: 1em;
        }
    }
`;
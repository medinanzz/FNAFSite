import { Link } from "react-router-dom";
import styled from "styled-components";

export const BtnBack = styled(Link)`

    font-size: 1.5em;
    text-decoration: none;
    color: #000;
    position: relative;
    font-family: "Inter", sans-serif;
    margin: 0.5em;
    width: fit-content;

    &::before {
        content: " ";
        bottom: 0;
        width: 100%;
        height: 2px;
        background-color: #000;
        transform: translateX(-50%);
        left: 50%;
        position: absolute;
        transition: .3s;
        opacity: 0;
    }

    &:hover::before {
        opacity: 1;
    }
`;
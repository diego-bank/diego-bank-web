import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledContainer = styled.div`
    min-height: 400px;
    width: 100%;
    padding-top: 170px;
    padding-left: 20%;
    @media (max-width: 950px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-left: 0;
    }
`;

export const StyledTitle = styled.h1`
    font-size: 40px;
    width: 450px;
    @media (max-width: 950px) {
        text-align: center;
        width: 90%;
    }
`;

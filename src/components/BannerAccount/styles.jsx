import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledBanner = styled.div`
padding-top: 50px;
    display: flex;
    justify-content: center;
    gap: 50px;
    align-items: center;
    min-height: 400px;
    max-width: 75%;
`;

export const StyledContainer = styled.div`
    min-height: 400px;
    width: 100%;
    padding-top: 100px;
    @media (max-width: 950px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 90%;
    }
`;

export const StyledTitle = styled.h1`
    font-size: 40px;
    width: 450px;
    @media (max-width: 950px) {
        text-align: center;
        width: 100%;
    }
`;


export const StyledImage = styled.img`
    width: 500px;
    @media (max-width: 950px) {
        display: none;
    }
`;

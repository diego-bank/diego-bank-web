import styled from "styled-components";

export const StyledMain = styled.main`
    padding-top: 100px;
    min-height: 970px;
    background-color: #0b0e3b;
`;

export const StyledText = styled.h1`
    text-align: justify;
    font-size: 20px;
    padding: 70px 200px 70px 200px;
    @media (max-width: 950px) {
        font-size: 12px;
        padding: 50px 50px;
    }
`;
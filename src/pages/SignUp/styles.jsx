import styled from "styled-components";

export const StyledContainer = styled.div`
    background-color: #0b0e3b;
    padding-bottom: 50px;
    display: flex;
    flex-direction: column;
`;

export const StyledMain = styled.main`
    padding-top: 100px;
    min-height: 970px;
    background-color: #0b0e3b;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
`;

export const StyledTitle = styled.h1`
    font-size: 40px;
    width: 450px;
    text-align: center;
    margin-bottom: 20px;
    @media (max-width: 950px) {
        text-align: center;
        width: 90%;
    }
`;
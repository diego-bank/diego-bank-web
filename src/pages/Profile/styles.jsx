import styled from "styled-components";

export const StyledContainer = styled.div`
    min-height: 800px;
    background-color: #0b0e3b;
    padding-bottom: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const StyledBanner = styled.div`
    height: 500px;
    width: 70vw;
    background-color: #0b0e3b;
    display: grid;
    grid-template-columns: 1fr 2fr;

    article {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }
    section {
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: center;
        padding: 0;
        margin: 0;
    }
    div {
        display: flex;
        gap: 0px 70px;
        flex-wrap: wrap;
    }
    @media (max-width: 1430px) {
        grid-template-columns: 1fr 1fr;
        div {
            gap: 0px 20px;
        }
        section {
            height: 200px;
        }
    }
    @media (max-width: 900px) {
        grid-template-columns: 1fr;
        div {
            justify-content: center;
            
        }
        section {
            height: 250px;
        }
        article {
            margin-bottom: 15px;
        }
    }
`;

export const StyledTitle = styled.h2`
    text-align: center;
    width: 100%;
    font-size: 24px;
`;

export const StyledIcon = styled.div`
    width: 190px;
    height: 190px;
    border-radius: 250px;
    border: 2px solid #7312a0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: #0b0f44;
    box-shadow: 10px 10px 10px #0000003e;
`;

export const StyledImage = styled.img`
    height: 188px;
    object-fit: cover;
    overflow: hidden;
    border-radius: 250px;
`;
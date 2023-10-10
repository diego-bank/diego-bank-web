import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 80px;
    background-color: #0b0e3b;
    position: fixed;
    width: 100%;
    justify-content: space-evenly;
    @media (max-width: 1000px) {
        width: 100%;
        justify-content: flex-start;
    }
`;

export const StyledLogo = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.87);
    font-size: 30px;
    font-weight: bold;
    height: 80px;
    @media (max-width: 950px) {
        width: 50%;
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    color: #9748fd;
    padding: 5px 14px;
    font-size: 20px;
`;

export const StyledUl = styled.ul`
    display: flex;
    gap: 40px;
    @media (max-width: 1000px) {
        display: none;
    }
`;

export const StyledLi = styled.li`
    list-style-type: none;
`;

export const StyledImage = styled.img`
    width: 500px;
    height: 80px;
    object-fit: cover;
    @media (max-width: 950px) {
        width: 50%;
        object-fit: cover;
    }
`;

export const StyledMenuMobile = styled.div`
    @media (min-width: 1000px) {
        display: none;
    }
`;
import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 400px;
    background-color: #000000;
    gap: 20px;
    width: 100%;
`;

export const StyledInfos = styled.div`
    display: flex;
    flex-direction: column;
    @media (max-width: 950px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
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
`;

export const StyledLi = styled.li`
    list-style-type: none;
`;

export const StyledImage = styled.img`
    max-width: 500px;
    min-width: 100px;
    height: 80px;
    object-fit: cover;
`;

export const StyledImage2 = styled.img`
    width: 200px;
    height: 80px;
    object-fit: cover;
`;

export const StyledDiv = styled.div`
    margin-left: 120px;
    display: flex;
    flex-direction: column;
    max-width: 420px;
    margin-bottom: 15px;
    a {
        text-decoration: none;
        font-size: large;
    }
    @media (max-width: 950px) {
        text-align: center;
        margin-left: 0;
    }
`;

export const StyledText = styled.p`
    font-size: 15px;
    @media (max-width: 950px) {
        text-align: center;
    }
`;

export const StyledDownloads = styled.div`
    display: flex;
    min-height: 300px;
    margin-right: 120px;
    width: 550px;
    flex-direction: row;
    gap: 60px;
    @media (max-width: 950px) {
        display: none;
    }
`;

export const StyledTitle = styled.h1`
    font-size: 60px;
`;

export const StyledBar = styled.div`
    border: #5f5f5f solid;
        background-color: #5f5f5f;
        width: 5px;
        height: 300px;
`;
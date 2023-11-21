import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledKanye = styled.div`
    width: 100%;
    height: calc(100vh - 60px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const StyledTitle = styled.h1`
    font-size: 100px;
    padding: 30px;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    background-color: #116feb;
    color: #fff;
    padding: 12px;
    margin-top: 15px;
    border-radius: 8px;
`;
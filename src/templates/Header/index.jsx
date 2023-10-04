import { StyledHeader, StyledLogo, StyledUl, StyledImage, StyledLi, StyledLink } from './styles';

import logo from '../../assets/logo.png'

function Header(){
    return(
        <StyledHeader>
            <StyledLogo to={'/'}><StyledImage src={logo} /></StyledLogo>
            <StyledUl>
                <StyledLi>
                    <StyledLink to={'/'}>Home</StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink to={'/'}>About</StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink to={'/'}>Download</StyledLink>
                </StyledLi>
                <StyledLi>
                    <StyledLink to={'/'}>Login</StyledLink>
                </StyledLi>
            </StyledUl>
        </StyledHeader>
    )
}

export default Header;
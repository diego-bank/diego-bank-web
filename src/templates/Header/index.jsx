import { StyledMenuMobile, StyledHeader, StyledLogo, StyledUl, StyledImage, StyledLi, StyledLink } from './styles';
import { slide as Menu } from 'react-burger-menu';

import { useAuthStore } from '../../stores/authStore'

import logo from '../../assets/logo.png'

var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      left: '80%',
      top: '25px'
    },
    bmBurgerBars: {
      background: '#373a47'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%',
      top: 0
    },
    bmMenu: {
      background: '#181d30',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmItem: {
      display: 'flex'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0)'
    }
  }

function Header(){
    const auth = useAuthStore(state => state.accessToken);

    return(
      <>
          {
           auth ? 
            (
              <StyledHeader>
                <StyledLogo to={'/'}><StyledImage src={logo} /></StyledLogo>
                <StyledUl>
                    <StyledLi>
                        <StyledLink to={'/'}>Home</StyledLink>
                    </StyledLi>
                    <StyledLi>
                        <StyledLink to={'/about'}>About</StyledLink>
                    </StyledLi>
                    <StyledLi>
                        <StyledLink to={'/'}>Download</StyledLink>
                    </StyledLi>
                    <StyledLi>
                        <StyledLink to={'/logout'}>Logout</StyledLink>
                    </StyledLi>
                    <StyledLi>
                        <StyledLink to={'/profile'}>Profile</StyledLink>
                    </StyledLi>
                </StyledUl>
                <StyledMenuMobile>
                  <Menu className='menu-mobile' styles={styles} right={true}>
                          <StyledLink to={'/'}>Home</StyledLink>
                          <StyledLink to={'/about'}>About</StyledLink>
                          <StyledLink to={'/'}>Download</StyledLink>
                          <StyledLink to={'/logout'}>Logout</StyledLink>
                          <StyledLink to={'/profile'}>Profile</StyledLink>
                  </Menu>
                </StyledMenuMobile>
              </StyledHeader>
            ) : (
              <StyledHeader>
              <StyledLogo to={'/'}><StyledImage src={logo} /></StyledLogo>
              <StyledUl>
                  <StyledLi>
                      <StyledLink to={'/'}>Home</StyledLink>
                  </StyledLi>
                  <StyledLi>
                      <StyledLink to={'/about'}>About</StyledLink>
                  </StyledLi>
                  <StyledLi>
                      <StyledLink to={'/'}>Download</StyledLink>
                  </StyledLi>
                  <StyledLi>
                      <StyledLink to={'/login'}>Login</StyledLink>
                  </StyledLi>
              </StyledUl>
              <StyledMenuMobile>
                <Menu className='menu-mobile' styles={styles} right={true}>
                        <StyledLink to={'/'}>Home</StyledLink>
                        <StyledLink to={'/about'}>About</StyledLink>
                        <StyledLink to={'/'}>Download</StyledLink>
                        <StyledLink to={'/login'}>Login</StyledLink>
                </Menu>
              </StyledMenuMobile>
              </StyledHeader>
            )
          }
          </>
    )
}

export default Header;
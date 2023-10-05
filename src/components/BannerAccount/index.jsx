import Button from "../Button";
import { StyledBanner, StyledContainer, StyledImage, StyledTitle } from "./styles";

import cell from '../../assets/cell.png'

function BannerAccount() {
    return(
        <StyledBanner>
            <StyledImage src={cell}/>
            <StyledContainer>
                <StyledTitle>Create Your Account</StyledTitle>
                <Button text={'Create Account'} link={'/signup'}/>
            </StyledContainer>
        </StyledBanner>
    )
}

export default BannerAccount;
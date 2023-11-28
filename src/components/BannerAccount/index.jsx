import Button from "../Button";
import { StyledBanner, StyledContainer, StyledImage, StyledTitle } from "./styles";

// banner de create tour account
function BannerAccount({ img }) {
    return(
        <StyledBanner>
            <StyledImage src={img}/>
            <StyledContainer>
                <StyledTitle>Create Your Account</StyledTitle>
                <Button text={'Create Account'} link={'/signup'}/>
            </StyledContainer>
        </StyledBanner>
    )
}

export default BannerAccount;
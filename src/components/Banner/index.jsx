import Button from "../Button";
import { StyledContainer, StyledTitle } from "./styles";

// componente de banner para download 
function Banner() {
    return(
        <StyledContainer>
            <StyledTitle>Free account, 100% digital and with unlimited services</StyledTitle>
            <Button text={'Download'} link={'/download'}/>
        </StyledContainer>
    )
}

export default Banner;
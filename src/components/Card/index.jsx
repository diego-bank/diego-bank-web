import { StyledContainer, StyledTitle,StyledText } from "./styles";

function Card({ title, text, children}) {
    return(
        <StyledContainer>
            {children}
            <StyledTitle>{title}</StyledTitle>
            <StyledText>{text}</StyledText>
        </StyledContainer>
    )
}

export default Card;
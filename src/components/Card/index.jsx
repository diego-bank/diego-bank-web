import { StyledContainer, StyledTitle } from "./styles";

function Card({ title, text }) {
    return(
        <StyledContainer>
            <StyledTitle>{title}</StyledTitle>
            <p>{text}</p>
        </StyledContainer>
    )
}

export default Card;
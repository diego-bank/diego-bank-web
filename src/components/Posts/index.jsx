import { StyledContainer } from "./styles";

function Posts({ children }) {
    return(
        <StyledContainer>
            {children}
        </StyledContainer>
    )
}

export default Posts;
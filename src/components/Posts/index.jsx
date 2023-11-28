import { StyledContainer } from "./styles";

// componente de posts, para conter card ou imagens
function Posts({ children }) {
    return(
        <StyledContainer>
            {children}
        </StyledContainer>
    )
}

export default Posts;
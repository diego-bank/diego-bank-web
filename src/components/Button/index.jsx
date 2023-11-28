import { StyledButton } from "./styles";
import { Link } from "react-router-dom";

// componente de botão
function Button({ text, link, type }) {
    return(link ? (
        <Link to={link}>
            <StyledButton>
                {text}
            </StyledButton>
        </Link> ) : (
            <StyledButton type={type}>
                {text}
            </StyledButton>
        )
    )
}

export default Button;
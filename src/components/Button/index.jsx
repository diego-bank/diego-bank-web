import { StyledButton } from "./styles";
import { Link } from "react-router-dom";

function Button({ text, link }) {
    return(
        <Link to={link}>
            <StyledButton>
                {text}
            </StyledButton>
        </Link>
    )
}

export default Button;
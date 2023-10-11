import Button from "../Button";
import { StyledForm } from "./styles";

function Form({ children }) {
    return(
        <StyledContainer>
            {children}
        </StyledContainer>
    )
}

export default Form;
import Button from "../Button";
import { StyledForm } from "./styles";

function Form({ children, method, onSubmit }) {
    return(
        <StyledForm method={method} onSubmit={onSubmit}>
            {children}
        </StyledForm>
    )
}

export default Form;
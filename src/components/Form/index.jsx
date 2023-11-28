import Button from "../Button";
import { StyledForm } from "./styles";

// componente de form para requisições
function Form({ children, method, onSubmit }) {
    return(
        <StyledForm method={method} onSubmit={onSubmit}>
            {children}
        </StyledForm>
    )
}

export default Form;
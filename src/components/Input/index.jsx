import { useState } from "react";
import { StyledInput, StyledLabel, StyledContainer } from "./styles";

function Input({ type, label, name }) {
    const [text, setText] = useState('');

    return(
        <StyledContainer>
            <StyledLabel>
                {label}
            </StyledLabel>
            <StyledInput type={type} name={name} value={text} onChange={e => setText(e.value)} />
        </StyledContainer>
    )
}

export default Input;
import { useState } from "react";
import { StyledInput, StyledLabel, StyledContainer } from "./styles";

function Input({ type, label, name, onChange, value, maxLength, minLength, disabled=false }) {
    return(
        <StyledContainer>
            <StyledLabel>
                {label}
            </StyledLabel>
            <StyledInput type={type} name={name} value={value} onChange={onChange} disabled={disabled} required maxLength={maxLength} minLength={minLength}/>
        </StyledContainer>
    )
}

export default Input;
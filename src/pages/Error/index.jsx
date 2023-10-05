import { Link } from "react-router-dom";
import { StyledErro, StyledTitle, StyledLink } from './styles'

function Error(){
    return(
        <StyledErro>
            <StyledTitle>404</StyledTitle>
            <h2>Página não encontrada!</h2>
            <StyledLink to="/">Volte ao menu inicial!</StyledLink>
        </StyledErro>
    )
}

export default Error;
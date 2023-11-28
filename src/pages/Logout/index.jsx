import { StyledContainer } from "./styles";
import { useAuthStore } from '../../stores/authStore'
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function Logout() {
    const clearTokens = useAuthStore(state => state.clearTokens);
    const navigate = useNavigate();

    // limpa credenciais de usuário e redireciona
    useEffect(() => {
        
        async function logout() {
            await clearTokens()
            navigate('/', { replace: true })
        }

        logout()
    }, [clearTokens, navigate])

    return(
        <StyledContainer>
            
        </StyledContainer>
    )
}

export default Logout;
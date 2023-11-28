import { useEffect } from 'react';
import { StyledKanye, StyledTitle, StyledLink } from './styles'
import { useState } from 'react';

import { apiKanye } from '../../services/kanye'

function Kanye(){
    const [quote, setQuote] = useState('');

    // requisição na api do kanye west
    async function getKanye() {
        await apiKanye.get()
        .then((response) => {
            setQuote(response.data.quote)
        })
    }
        
    // requisição realizada no carregamento da página
    useEffect(() => {
        getKanye()
    }, [])

    return(
        <StyledKanye>
            {quote != "" ? (
                <StyledTitle>Kanye Said: {quote}</StyledTitle>
            ) : (
                <></>
            )}
            
        </StyledKanye>
    )
}

export default Kanye;
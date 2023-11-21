import { useEffect } from 'react';
import { StyledKanye, StyledTitle, StyledLink } from './styles'
import { useState } from 'react';

import { apiKanye } from '../../services/kanye'

function Kanye(){
    const [quote, setQuote] = useState('');

    async function getKanye() {
        await apiKanye.get()
        .then((response) => {
            setQuote(response.data.quote)
        })
    }
        

    useEffect(() => {
        getKanye()
    }, [])

    return(
        <StyledKanye>
            <StyledTitle>Kanye Said: {quote}</StyledTitle>
        </StyledKanye>
    )
}

export default Kanye;
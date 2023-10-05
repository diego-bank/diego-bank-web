import { StyledFooter, StyledImage, StyledImage2, StyledBar, StyledDiv, StyledText, StyledInfos, StyledDownloads, StyledTitle } from './styles';

import logo from '../../assets/logo.png'
import appstore from '../../assets/appstore.png'
import playstore from '../../assets/playstore.png'

function Footer(){
    return(
        <StyledFooter>
            <StyledInfos>
                <StyledImage src={logo} />
                <StyledDiv>
                    <a href='https://github.com/diegwl' target='_blank' rel="noreferrer">Github</a>
                    <a href='https://www.linkedin.com/in/diego-castan-lopes/' target='_blank' rel="noreferrer">Linkedin</a>
                </StyledDiv>
                <StyledDiv>
                <StyledText>
                    Copyright © 2023 Diego Bank. Todos os direitos reservados.
                    Diego Bank Instituição de Pagamento S.A. - Emissora de moeda eletrônica - CNPJ nº 00.001.001/0001-01.
                    Av. Oliveira Rod, nº 123 - São Paulo/SP
                </StyledText>
                </StyledDiv>
            </StyledInfos>
            <StyledDownloads>
                <StyledBar />
                <div>
                    <StyledTitle>
                        Download Now!
                    </StyledTitle>
                    <StyledImage2 src={playstore} />
                    <StyledImage2 src={appstore} />
                </div>
            </StyledDownloads>
        </StyledFooter>
    )
}

export default Footer;
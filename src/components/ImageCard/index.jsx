import { StyledImage } from "./styles";

// componente de estilização para imagens
function ImageCard({ img }) {
    return(
        <>
            <StyledImage src={img}/>
        </>
    )
}

export default ImageCard;
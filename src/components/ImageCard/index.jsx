import { StyledImage } from "./styles";

function ImageCard({ img }) {
    return(
        <>
            <StyledImage src={img}/>
        </>
    )
}

export default ImageCard;
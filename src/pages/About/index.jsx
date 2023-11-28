import Banner from "../../components/Banner";
import Posts from "../../components/Posts";
import Card from "../../components/Card"
import ImageCard from '../../components/ImageCard'

import cell2 from '../../assets/cell2.svg'
import cell3 from '../../assets/cell3.svg'
import cell4 from '../../assets/cell4.svg'

import { StyledMain, StyledText } from "./styles";

// pagina com informações sobre o projeto
function About() {
    return(
        <StyledMain>
            <Posts>
                <>
                    <ImageCard img={cell2} />
                    <ImageCard img={cell3} />
                    <ImageCard img={cell4} />
                </>
            </Posts>
            <StyledText>
            The virtual bank project, at the forefront of modern financial technology, demonstrates a remarkable fusion of React and React Native for the user interface, complemented by the robust Django Rest Framework for the backend. This initiative aspires to establish an intuitive, secure, and efficient digital banking experience, holding the potential to bring about a significant paradigm shift in the digital banking sector. As this project continues to develop, it promises to provide users with a transformative and user-centric digital banking solution.
            </StyledText>
        </StyledMain>
    )
}

export default About;

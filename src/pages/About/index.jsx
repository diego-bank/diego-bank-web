import Banner from "../../components/Banner";
import Posts from "../../components/Posts";
import Card from "../../components/Card"
import ImageCard from '../../components/ImageCard'

import cell2 from '../../assets/cell2.svg'
import cell3 from '../../assets/cell3.svg'
import cell4 from '../../assets/cell4.svg'

import { StyledMain, StyledText } from "./styles";


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
                This is a Example
            </StyledText>
        </StyledMain>
    )
}

export default About;

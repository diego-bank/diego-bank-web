import Banner from "../../components/Banner";
import Posts from "../../components/Posts";
import Card from "../../components/Card"
import { StyledContainer } from "./styles";

function Home() {
    return(
        <StyledContainer>
            <Banner />
            <Posts>
                <>
                    <Card title={'Data Security'} text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'} />
                    <Card title={'Anywhere Any Time'} text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'} />
                    <Card title={'Certification'} text={'Certified by the ANCD (National Association for Digital Certification). Currently one of the safest and most affordable tools.'} />
                </>
            </Posts>
        </StyledContainer>
    )
}

export default Home;
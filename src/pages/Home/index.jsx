import Banner from "../../components/Banner";
import Posts from "../../components/Posts";
import Card from "../../components/Card"
import { StyledContainer } from "./styles";

import SecurityIcon from '@mui/icons-material/Security';
import MoreTimeIcon from '@mui/icons-material/MoreTime';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import BannerAccount from "../../components/BannerAccount";

import cell from '../../assets/cell.svg'

// Página home
function Home() {
    return(
        <StyledContainer>
            <Banner />
            <Posts>
                <>
                    <Card title={'Data Security'} text={'Here at Diego Bank, your data is 100% safe, enjoy the best services and we take care of your security.'}>
                        <SecurityIcon fontSize="large"/>
                    </Card>
                    <Card title={'Anywhere Any Time'} text={'Our services can be easily accessed from anywhere via our mobile app or the web.'}>
                        <MoreTimeIcon fontSize="large"/>
                    </Card>
                    <Card title={'Certification'} text={'Certified by the ANCD (National Association for Digital Certification). Currently one of the safest and most affordable tools.'}>
                        <WorkspacePremiumIcon fontSize="large"/>
                    </Card>
                </>
            </Posts>
            <BannerAccount img={cell} />
        </StyledContainer>
    )
}

export default Home;
import { ExploreContainer, InfoContainer, StyledHome, Text, Title } from "./home.styles";

const Home = () => {
    
    return (
        <StyledHome>
            
                <InfoContainer>
                <Title>SO, YOU WANT TO TRAVEL TO</Title>
                <h1>SPACE</h1>
                <Text>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</Text>
                </InfoContainer>
                <ExploreContainer>
                     <h1>EXPLORE</h1>
                </ExploreContainer>
            
        </StyledHome>
    );
};

export default Home;

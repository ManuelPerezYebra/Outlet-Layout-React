import Tabs from "../components/tabs/Tabs";
import { PlanetContainer, StyledDestination, TitleContainer,InfoContainer, StyledHr, DataContainer } from "./destination.styles";


const Destination = () => {

    return (
        <StyledDestination>
            
                <PlanetContainer>
                    <TitleContainer><span>01</span><h1>PICK YOUR DESTINATION</h1></TitleContainer>
                    <img src="destination/image-moon.webp" alt="" />
                </PlanetContainer>
                <InfoContainer>
                <Tabs/>
                <h1>MOON</h1>
                <p>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
                <StyledHr/>
                <DataContainer>
                    <div>
                        <p>AVG. DISTANCE</p>
                        <p>384.400 KM</p>
                    </div>
                    <div>
                        <p>EST. TRAVEL TIME</p>
                        <p>3 DAYS</p>
                    </div>
                </DataContainer>
                </InfoContainer>
                
            
        </StyledDestination>
    );
};

export default Destination;

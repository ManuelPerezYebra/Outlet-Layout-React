import Tabs from "../components/tabs/Tabs";
import { PLANETS } from "../constants/destinations";
import { PlanetContainer, StyledDestination, TitleContainer,InfoContainer, StyledHr, DataContainer } from "./destination.styles";
import { useState } from "react";


const Destination = () => {
    console.log(PLANETS);
    const PlanetsArray = Object.values(PLANETS);
   
   
    const [activeTab, setActiveTab]=useState(0);

    return (
        <StyledDestination>
            
                <PlanetContainer>
                    <TitleContainer><span>01</span><h1>PICK YOUR DESTINATION</h1></TitleContainer>
                    <img src={PlanetsArray[activeTab].img} alt="" />
                </PlanetContainer>
                <InfoContainer>
                <Tabs activeTab={activeTab} setActiveTab={setActiveTab}/>
                <h1>{PlanetsArray[activeTab].name}</h1>
                <p>{PlanetsArray[activeTab].text}</p>
                <StyledHr/>
                <DataContainer>
                    <div>
                        <p>AVG. DISTANCE</p>
                        <p>{PlanetsArray[activeTab].distance}</p>
                    </div>
                    <div>
                         <p>EST.TRAVEL TIME</p>
                        <p>{PlanetsArray[activeTab].distance}</p>
                        
                    </div>
                </DataContainer>
                </InfoContainer>
                
            
        </StyledDestination>
    );
};

export default Destination;

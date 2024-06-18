import { ImgContainer, InfoContainer, StyledCrew, Text, Title } from "./crew.styles"
import { TEAM } from "../constants/workers"

const Crew =()=>{
    const TeamArray = Object.values(TEAM)
    return <>
    <StyledCrew>
        
       <InfoContainer>
       <Title>
        <span>02</span><h1> MEET YOUR CRE</h1>
        </Title>
        <p>{TeamArray[0].profession}</p>
        <h2>{TeamArray[0].name}</h2>
        <Text>
        {TeamArray[0].text}
        </Text>

       </InfoContainer>
       <ImgContainer>
       <img src={TeamArray[0].img} alt="" />
       </ImgContainer>
    </StyledCrew>
    
    </>
}
export default Crew

import {  StyledHeader, StyledHr, StyledLink, StyledNav } from "./header.styles"

const Header =()=>{
    return <StyledHeader>
        <div>
            <img src="/shared/logo.svg" alt="" />
        </div>
        

    <StyledNav>
            <StyledLink to='/'><span>00</span>HOME</StyledLink>
            <StyledLink to='/destination'><span>01</span>DESTINATION</StyledLink>
            <StyledLink to='/crew'><span>02</span>CREW</StyledLink>
            <StyledLink to='/technology'><span>03</span>TECHNOLOGY</StyledLink>
            <StyledHr/>   
        </StyledNav>    
        
   
       
    </StyledHeader>
}
export default Header
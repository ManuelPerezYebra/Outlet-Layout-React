import { useLocation } from "react-router-dom";
import { StyledHeader, StyledHr, StyledLink, StyledNav } from "./header.styles";

const Header = () => {
    const location = useLocation();

    return (
        <StyledHeader>
            <div>
                <img src="/shared/logo.svg" alt="Logo" />
            </div>
            <StyledNav>
                <StyledLink to='/' active={location.pathname === '/'}><span>00</span>HOME</StyledLink>
                <StyledLink to='/destination' active={location.pathname === '/destination'}><span>01</span>DESTINATION</StyledLink>
                <StyledLink to='/crew' active={location.pathname === '/crew'}><span>02</span>CREW</StyledLink>
                <StyledLink to='/technology' active={location.pathname === '/technology'}><span>03</span>TECHNOLOGY</StyledLink>
                <StyledHr />   
            </StyledNav>    
        </StyledHeader>
    );
};

export default Header;

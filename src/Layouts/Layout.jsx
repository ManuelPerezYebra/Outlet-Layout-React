import Header from "../components/header/Header";
import { Outlet } from 'react-router-dom';
import { StyledLayout } from "./layout.styles";

const Layout = () => {
    
    return (
        <>
        <StyledLayout>
            <Header />
             <Outlet />


        </StyledLayout>
           
        </>
    );
};

export default Layout;

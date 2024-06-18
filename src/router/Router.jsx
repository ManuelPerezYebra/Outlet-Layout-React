import { Route, Routes } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Home from "../pages/Home";
import Destination from "../pages/Destination";
import Crew from "../pages/crew";

const Router = () => {
    
    return (
        <Routes>
            <Route path="/" $bottomline={'white'} element={<Layout />}>
                <Route  index element={<Home  />} />
                <Route  path="/destination" element={<Destination  />} />
                <Route  path="/crew" element={<Crew  />} />
            </Route>
        </Routes>
    );
};

export default Router;

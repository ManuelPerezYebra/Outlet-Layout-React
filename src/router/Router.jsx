import { Route, Routes } from "react-router-dom";
import Layout from "../Layouts/Layout";
import Home from "../pages/Home";
import Destination from "../pages/Destination";

const Router = () => {
    
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route  index element={<Home  />} />
                <Route  path="/destination" element={<Destination  />} />
            </Route>
        </Routes>
    );
};

export default Router;

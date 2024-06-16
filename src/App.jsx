import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./GlobalStyles/GlobalStyles";
import Router from "./router/Router";

const App = () => {
	
    return (
        <>
            <GlobalStyles />
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </>
    );
};

export default App;

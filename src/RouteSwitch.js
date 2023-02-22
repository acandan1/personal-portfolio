import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./Apps/App";


const RouteSwitch = (props) => {

    return (
        <BrowserRouter basename="/personal-portfolio">
            <Routes>
                <Route path="/" element={ <App/> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;
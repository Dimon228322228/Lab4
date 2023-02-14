import React from 'react';
import {Route, Routes} from "react-router-dom";
import Error from "./Error.jsx";
import MainContent from "./MainContent.jsx";
import Login from "./Login.jsx";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path={"/"} element={<MainContent/>}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
    );
};

export default AppRouter;
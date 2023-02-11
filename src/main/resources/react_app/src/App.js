import React from "react";
import Navbar from "./components/UI/navbar/Navbar.jsx";
import "./styles/App.css"
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <Navbar />
            <AppRouter/>
        </div>
      </BrowserRouter>
  );
}

export default App;

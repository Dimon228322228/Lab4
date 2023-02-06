import React from "react";
import Navbar from "./components/UI/navbar/Navbar.jsx";
import "./styles/App.css"
import MainContent from "./components/MainContent.jsx";

function App() {

  return (
    <div className="App">
        <Navbar />
        <MainContent/>
    </div>
  );
}

export default App;

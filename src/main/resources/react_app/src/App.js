import React from "react";
import Navbar from "./components/UI/navbar/Navbar";
import "./styles/App.css"
import MainContent from "./components/MainContent";

function App() {

  return (
    <div className="App">
        <Navbar />
        <MainContent/>
    </div>
  );
}

export default App;

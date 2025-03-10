import React from "react"; // Import the CarWaxing component
import "./App.css"; // Global styles if needed
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Footer } from "./Components/Footer/Footer";
import Final from "./Components/Homepage/Full-top/Final";
import FinalService from "./Components/Ourservices/FinalService";
import FinalCareer from "./Components/Careers/FinalCareer";
import FinalContact from "./Components/Careers/FinalContact";


function App() {
  return (
    <div className="App">
      <Router>
      
   <Routes>
    <Route path="/" element={<Final/>}/>
    <Route path="/services" element={<FinalService/>}/>
    <Route path="/careers" element={<FinalCareer/>}/>
    <Route path="/contact" element={<FinalContact/>}/>

   </Routes>
      
             

    <Footer/>
</Router>
    </div>
  );
}

export default App;

























/*

import React from "react";
//import Navbar from "./Components/Navbar/Navbar";
//import CoverSection from "./Components/Coversection/Coversection";
//import "./Storytelling.css";
import CarWaxing from "./Components/Carwaxing/Carwaxing";

const App = () => {
  return (
    <div className="app-container">
      <StorytellingEditor />
    </div>
  );
};

const StorytellingEditor = () => {
  return (
    <div className="storytelling-editor"> 
      <CarWaxing/>
    </div>
  );
};

export default App;
*/
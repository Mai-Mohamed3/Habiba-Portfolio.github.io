import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import AboutMe from "./Components/AboutMe";
import "./Styles/global.css";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Profiles from "./Components/Profiles";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import "@fortawesome/fontawesome-free/css/all.min.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe/>
      <Education/>
      <Skills/>
      <Profiles/>
      <Portfolio/>
      <Contact/>
    </div>
  );
};

export default App;

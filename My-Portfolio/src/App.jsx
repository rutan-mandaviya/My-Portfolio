import React from "react";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
import { Element } from "react-scroll";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="w-full h-full bg-[#070707] text-white select-none">
      
      <Navbar  />

      <Element name="home">
        <Home />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="projects">
        <Project />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>

      <Footer />
    </div>
  );
}

export default App;

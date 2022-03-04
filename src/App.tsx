import React from "react";
import { Profile } from "./components/Profile/Profile";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
import { Header } from "./components/Header/Header";
import "./App.css";


function App() {
  return (
    <div className="App">
      <Header
      // projectsHash="#projects"
      // contactHash="#contact"
      />
      <div id="profile" className='sectionOne'>
        <Profile />
      </div>
      <div id="projects" className='sectionTwo'>
        <Projects />
      </div>
      <div id="contact" className='sectionThree'>
        <Contact />
      </div>
    </div>
  );
}

export default App;
import React from "react";
import { Profile } from "./components/Profile";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import "./App.css";
import { BackToTop } from "./components/BackToTop";


function App() {
  return (
    <div className="App">
      <div className="sectionsContainer">
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
    </div>
  );
}

export default App;
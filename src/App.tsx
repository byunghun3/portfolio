import React from "react";
import { Profile } from "./components/Profile/Profile";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
import "./App.css";
import { BackToTop } from "./components/BackToTop/BackToTop";


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
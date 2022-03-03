import React from "react";
import { Profile } from "./components/Profile/Profile";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
import "./App.css";


function App() {
  return (
    <div className="App">
      <div className='sectionOne'>
        <Profile />
      </div>
      <div className='sectionTwo'>
        <Projects />
      </div>
      <div className='sectionThree'>
        <Contact />
      </div>
    </div>
  );
}

export default App;
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Profile } from "./components/Profile";
import { Projects } from "./components/Projects";
import { Story } from "./components/Story";
import { ThemeProvider } from "./contexts/ThemeContext";
import "./App.css";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;

  @media (max-height: 599px), (max-width: 600px) {
    // min-height: 100vh;
    // display: block;
    scroll-snap-type: none;
    overflow-y: visible;
    // background-color: purple;
  }

  // @media (max-width: 499px) {
  //   min-height: 100vh;
    // scroll-snap-type: none;
    // overflow-y: visible;
  // }
`;

const Section = styled.div`
      display: flex;
    flex-direction: column;
    // min-height: 100vh;
  // scroll-snap-align: start;
`;

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Container>
          {/* <Section id="profile"> */}
          {/* a */}
          <Profile
            projectsHash="#projects"
          />
          {/* </Section> */}
          {/* <Section id="projects"> */}
          {/* b */}
          <Projects
            profileHash="#profile"
          />
          {/* </Section> */}
          {/* <Section id="story"> */}
          <Story
            profileHash="#profile"
          />
          {/* </Section> */}
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
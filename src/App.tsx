import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Profile } from "./components/Profile";
import { Projects } from "./components/Projects";
import { Story } from "./components/Story";
import { ThemeProvider } from "./contexts/ThemeContext";
import "./App.css";
import { BackToTop } from "./components/BackToTop";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  // overflow: auto;

        //     &::-webkit-scrollbar{
        //     display: none;
        // }
`;

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: start;
`;

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Container>
          <Section id="profile">
            {/* a */}
            <Profile
              projectsHash="#projects"
            />
          </Section>
          <Section id="projects">
            {/* b */}
            <Projects
              profileHash="#profile"
            />
          </Section>
          <Section id="story">
            <Story />
          </Section>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
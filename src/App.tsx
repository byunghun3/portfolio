import React from "react";
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
    scroll-snap-type: none;
    overflow-y: visible;
  }
`;

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Container>
          <Profile />
          <Projects />
          <Story profileHash="#profile" />
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
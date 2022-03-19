import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Profile } from "./components/Profile";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { ThemeProvider } from "./contexts/ThemeContext";
import "./App.css";
import { BackToTop } from "./components/BackToTop";
import styled from "styled-components";

interface ContainerProps {
  pageOrder: number
}

const Container = styled.div<ContainerProps>`
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  transform: translateY(${(props) => props.newPageOrder * -50}vh);

  ${({ active }) => active && `
    overflow-y: visible;
  `}
`;

function App() {
  const [pageOrder, setPageOrder] = useState(0);
  const [active, setActive] = useState(false);

  const handleScroll = () => {
    setPageOrder(1);
    // console.log(3);
    // window.scrollTo({
    //   top: 50,
    //   left: 0,
    //   behavior: "smooth"
    // });
  };

  const handleClick = () => {
    setActive(true);
    // window.scrollBy(0, window.innerHeight);
    setTimeout(() => {
      // window.scrollBy(0, window.innerHeight);
      window.scrollBy(0, 1000);
      // window.scrollTo({
      //   top: 50
      // });
    }, 10);
    setTimeout(() => {
      setActive(false);
    }, 2000);
  };

  return (
    <ThemeProvider>
      <div className="App">
        {/* <div className="sectionsContainer"> */}
        <Container active={active} newPageOrder={pageOrder}>
          <div id="profile" className='sectionOne'>
            {/* <button onClick={handleClick}>click</button> */}
            <Profile
              projectsHash="#projects"
            />
          </div>
          <div id="projects" className='sectionTwo'>
            <Projects 
              profileHash="#profile"
            />
          </div>
          <div id="contact" className='sectionThree'>
            <BackToTop onClick={handleScroll} />

            <Contact />
          </div>

        </Container>
        {/* </div> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
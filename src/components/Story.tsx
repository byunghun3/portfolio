import React, { FC, useContext } from "react";
import { NavHashLink } from "react-router-hash-link";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { ThemeContext } from "../contexts/ThemeContext";
import ProfilePic from "../assets/images/profile-pic.jpg";
import styled from "styled-components";

interface StoryProps {
  profileHash: string
}

const Page = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    min-height: 100vh;
    background-color: ${(props) => props.isDarkMode ? "black" : "white"};
    color: ${(props) => props.isDarkMode ? "white" : "black"};
    scroll-snap-align: start;

    @media (max-width: 800px) {
      // scroll-snap-align: center;
    }
`;

const PageTitle = styled.div`
    flex: 1;
    margin-top: 2.5rem;
    font-family: "Russo One";
    font-size: 4rem;
`;

const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 70vh;
    width: 90%;
    margin-top: 2rem;
    // border: solid black;
    border-radius: 2rem;
    box-shadow: 0 0 2rem rgb(185, 205, 255);

    @media (max-width: 900px) {
      // flex-direction: column;
      display: inline-block;
      margin-top: 2rem;
    }

    @media (max-width: 600px) {
      display: flex;
      flex-direction: column;
    }
`;

const Photo = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 900px) {
      display: inline;
    }
`;

const ProPic = styled.img`
    width: 78%;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    border-radius: 0.5rem;

    @media (max-width: 900px) {
      float: left;
      width: 50%;
      margin-top: 2rem;
      margin-right: 2rem;
      margin-bottom: 1rem;
      margin-left: 2rem;
      // shape-outside: margin-box;
    }

    @media (max-width: 600px) {
      float: none;
      margin-right: 0;
      margin-bottom: 0;
      margin-left: 0;
    }
`;

const About = styled.div`
    flex: 1;
    padding: 1.5rem;
    text-align: left;
    font-family: "Verdana", "Inter", "Helvetica Neue";
    // font-family: "Helvetica Neue";
    // font-family: sans-serif;
    font-size: 1.7rem;

    @media (max-width: 910px) {
      // margin-left: 1rem;
      font-size: 1.5rem;
    }
`;

const ScrollContainer = styled.div`
    width: 90%;
    margin-top: 2rem;
    margin-bottom: 2rem;
    // border: solid orange;
`;

const ScrollButton = styled.button`
    float: right;
    margin-right: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: none;
    color: ${(props) => props.isDarkMode ? "white" : "black"};
    font-family: "Josefin Sans";
    font-size: 2rem;
    &:hover {
        transform: scale(1.25);
        cursor: pointer;
    }
`;

export const Story: FC<StoryProps> = ({ profileHash }) => {
  const { isDarkMode } = useContext(ThemeContext);

  const handleClick = () => {
    setTimeout(() => {
      history.pushState("", document.title, window.location.pathname + window.location.search);
    }, 1);
  };

  return (
    <Page id="story" isDarkMode={isDarkMode}>
      <PageTitle>Story</PageTitle>
      <Content>
        <Photo>
          <ProPic src={ProfilePic} />
        </Photo>
        <About>
          <p>My interest in programming started when I noticed how much easier and more efficient technology made the day-to-day work at my job.</p>
          <p>Learning web development was daunting at first, but I quickly realized that it was similar to studying and practicing a language.</p>
          <p>With my capabilities for project-based work as a project manager and my passion for analyzing and expressing through language as an English major at college, I fell in love with the process of learning to code and develop websites.</p>
          <p>My projects reflect a few of my passions - books and golf - and demonstrate my creativity, attention to detail, and willingness to challenge myself.</p>
          <p>I find it exciting that web development is a continuous learning journey. For my future projects, I hope to learn and incorporate a back end with Node.js and a new framework with Next.js.</p>
        </About>
      </Content>
      <ScrollContainer>
        <NavHashLink smooth to={profileHash}>
          <ScrollButton type="button" onClick={handleClick} isDarkMode={isDarkMode}>
            <ArrowUpwardIcon
              sx={{
                fontSize: "3rem"
              }}
            />
            Back to Top
          </ScrollButton>
        </NavHashLink>
      </ScrollContainer>
    </Page>
  );
};
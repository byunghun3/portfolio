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

  @media (max-width: 600px) {
      margin-top: 5rem;
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
  border-radius: 2rem;
  box-shadow: 0 0 2rem rgb(185, 205, 255);

  @media (max-width: 1050px) {
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

  @media (max-width: 1050px) {
    display: inline;
  }
`;

const ProPic = styled.img`
  width: 78%;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: 0.5rem;

  @media (max-width: 1050px) {
    float: left;
    width: 50%;
    margin-top: 2rem;
    margin-right: 2rem;
    margin-bottom: 1rem;
    margin-left: 2rem;
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
  font-size: 1.7rem;

  @media (max-width: 1050px) {
    font-size: 1.5rem;
  }
`;

const ScrollContainer = styled.div`
  width: 90%;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const ScrollButton = styled.button`
  float: right;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 2rem;
  border: none;
  background: none;
  color: ${(props) => props.isDarkMode ? "white" : "black"};
  font-family: "Josefin Sans";
  font-size: 2rem;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.25);
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
          <p>My interest in programming started when I noticed how much the excel macros the engineering team created made my day-to-day work easier as a project manager.</p>
          <p>Learning web development was daunting at first, but I was motivated by the large growth potential in the industry and the ownership I felt after each project.</p>
          <p>From struggling to figure out how to position a div in a flexbox to hitting wall after wall trying to code for the first time using React functional components and Typescript together, I fell in love with the process of researching and problem solving in coding.</p>
          <p>My projects reflect a few of my passions - reading and golfing - and demonstrate my creativity, attention to detail, and willingness to challenge myself.</p>
          <p>I find it exciting that web development is a continuous learning journey. For my future projects, I hope to learn and incorporate a new framework with Next.js.</p>
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
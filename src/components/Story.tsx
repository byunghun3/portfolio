import React, { FC, useContext } from "react";
import { NavHashLink } from "react-router-hash-link";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { ThemeContext } from "../contexts/ThemeContext";
import styled from "styled-components";

interface StoryProps {
  profileHash: string
}

const Page = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 100vh;
    background-color: ${(props) => props.isDarkMode ? "black" : "white"};
    color: ${(props) => props.isDarkMode ? "white" : "black"};
    scroll-snap-align: start;
`;

const PageTitle = styled.div`
    flex: 1;
    margin-top: 2.5rem;
    font-family: "Russo One";
    font-size: 4rem;
`;

const ScrollContainer = styled.div`
    width: 90%;
    margin-bottom: 4rem;
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
    <Page isDarkMode={isDarkMode}>
      <PageTitle>Story</PageTitle>
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
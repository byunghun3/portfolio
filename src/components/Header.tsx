import React, { FC, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { Switch } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { ThemeContext } from "../contexts/ThemeContext";
import styled from "styled-components";

interface HeaderProps {
  projectsHash: string
  storyHash: string
}

const Navbar = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 8vh;
  background-color: ${(props) => props.isDarkMode ? "lightblue" : "black"};
  color: ${(props) => props.isDarkMode ? "black" : "white"};
  font-family: "Josefin Sans";
  font-size: 1.9rem;
  transition: ease 0.3s;
`;

const Contact = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 60%;
  // border: solid white;
`;

const Phone = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 30%;
`;

const Email = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 30%;
`;

const NavLinks = styled.div`
  display: flex;
  // justify-content: center;
  justify-content: flex-start;
  align-items: center;
  width: 30%;
  color: ${(props) => props.isDarkMode ? "black" : "white"};
  // border: solid white;
`;

const LinkButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 4rem;
    border: none;
    background: none;
    color: ${(props) => props.isDarkMode ? "black" : "white"};
    font-family: "Josefin Sans";
    font-size: 2.7rem;
    &:hover {
        color: ${(props) => props.isDarkMode ? "white" : "lightblue"};
        transform: scale(1.25);
        cursor: pointer;
    }
`;

const ThemeSwitch = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 10%;
`;

export const Header: FC<HeaderProps> = ({ projectsHash, storyHash }) => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  const handleClick = () => {
    setTimeout(() => {
      history.pushState("", document.title, window.location.pathname + window.location.search);
    }, 1);
  };

  return (
    <div>
      <Navbar
        isDarkMode={isDarkMode}
      >
        <Contact>
          <Phone>
            <PhoneIcon
              sx={{
                margin: "0 0.7rem 0 3rem",
                fontSize: "2.5rem"
              }}
            />
            201-786-8979
          </Phone>
          <Email>
            <EmailIcon
              sx={{
                margin: "0 0.7rem 0 0",
                fontSize: "2.5rem"
              }}
            />
            byunghun3@gmail.com
          </Email>
        </Contact>
        <NavLinks>
          <NavHashLink
            smooth
            to={projectsHash}
            style={{
              textDecoration: "none"
            }}>
            <LinkButton type="button" onClick={handleClick} isDarkMode={isDarkMode}>
              Projects
            </LinkButton>
          </NavHashLink>
          <NavHashLink
            smooth
            to={storyHash}
            style={{
              textDecoration: "none"
            }}>
            <LinkButton type="button" onClick={handleClick} isDarkMode={isDarkMode}>
              Story
            </LinkButton>
          </NavHashLink>
        </NavLinks>
        <ThemeSwitch>
          <Switch
            color="primary"
            onChange={() => { setIsDarkMode(!isDarkMode); }}
          />
          {isDarkMode ?
            <DarkModeIcon
              sx={{
                margin: "0 4rem 0 0.7rem",
                fontSize: "2.7rem"
              }}
            /> :
            <LightModeIcon
              sx={{
                margin: "0 4rem 0 0.7rem",
                fontSize: "2.7rem"
              }}
            />}
        </ThemeSwitch>
      </Navbar >
    </div >
  );
};
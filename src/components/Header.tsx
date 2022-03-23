import React, { FC, useContext, useState } from "react";
import { NavHashLink } from "react-router-hash-link";
import { Switch, Drawer } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import { ThemeContext } from "../contexts/ThemeContext";
import styled from "styled-components";

interface HeaderProps {
  projectsHash: string
  storyHash: string
}

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 8vh;
  padding: 0.7rem 0;
  background-color: ${(props) => props.isDarkMode ? "lightblue" : "black"};
  color: ${(props) => props.isDarkMode ? "black" : "white"};
  font-family: "Josefin Sans";
  font-size: 1.9rem;
  transition: ease 0.3s;
`;

const ThemeSwitch = styled.div`
  flex: 0.3;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 2rem;

  @media (max-width: 875px) {
    flex: 1;
    justify-content: flex-start;
  }
`;

const Contact = styled.div`
  flex: 2;
  display: flex;
  justify-content: flex-start;
  padding: 0 1.5rem;

  @media (max-width: 1050px) {
    justify-content: space-between;
  }

  @media (max-width: 875px) {
    display: none;
  }
`;

const Phone = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-right: 2rem;
`;

const Email = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 2rem;
`;

const NavLinks = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1.5rem;
  color: ${(props) => props.isDarkMode ? "black" : "white"};

  @media (max-width: 875px) {
    display: none;
  }
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

  @media (max-width: 480px) {
    font-size: 4rem;
  }
`;

const MenuContainer = styled.div`
  display: none;

  @media (max-width: 875px) {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    padding-right: 2rem;
  }
`;

const ClearContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const Header: FC<HeaderProps> = ({ projectsHash, storyHash }) => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(false);
    setTimeout(() => {
      history.pushState("", document.title, window.location.pathname + window.location.search);
    }, 1);
  };

  const handleExpandMenu = () => {
    setIsExpanded(true);
  };

  const handleCloseMenu = () => {
    setIsExpanded(false);
  };

  return (
    <div>
      <Navbar
        isDarkMode={isDarkMode}
      >
        <ThemeSwitch>
          {isDarkMode ?
            <DarkModeIcon
              sx={{
                marginRight: "0.7rem",
                fontSize: "2.7rem"
              }}
            /> :
            <LightModeIcon
              sx={{
                marginRight: "0.7rem",
                fontSize: "2.7rem"
              }}
            />}
          <Switch
            color="primary"
            onChange={() => { setIsDarkMode(!isDarkMode); }}
          />
        </ThemeSwitch>
        <Contact>
          <Phone>
            <PhoneIcon
              sx={{
                marginRight: "0.7rem",
                fontSize: "2.5rem"
              }}
            />
            201-786-8979
          </Phone>
          <Email>
            <EmailIcon
              sx={{
                marginRight: "0.7rem",
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
        <MenuContainer>
          <MenuIcon
            onClick={handleExpandMenu}
            sx={{
              fontSize: "4.5rem",
              cursor: "pointer"
            }}
          />
        </MenuContainer>
      </Navbar >
      <Drawer
        anchor="right"
        open={isExpanded}
        onClose={handleCloseMenu}
        PaperProps={{
          sx: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "55vw",
            backgroundColor: `${isDarkMode ? "lightblue" : "black"}`,
            color: `${isDarkMode ? "black" : "white"}`,
            fontSize: "2rem",
            wordBreak: "break-word",

            "& > *:not(:first-child)": {
              margin: "5rem 0"
            },

            "@media (max-width: 480px)": {
              width: "100%",
              fontSize: "2.7rem"
            }
          }
        }}
        transitionDuration={700}
      >
        <ClearContainer>
          <ClearIcon
            onClick={handleCloseMenu}
            sx={{
              marginTop: "1.2rem",
              marginRight: "2.2rem",
              fontSize: "4.5rem",
              cursor: "pointer"
            }}
          />
        </ClearContainer>
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
        <Phone>
          <PhoneIcon
            sx={{
              marginRight: "0.7rem",
              fontSize: "2.5rem",
              "@media (max-width: 480px)": {
                fontSize: "3.5rem"
              }
            }}
          />
          201-786-8979
        </Phone>
        <Email>
          <EmailIcon
            sx={{
              marginRight: "0.7rem",
              fontSize: "2.5rem",
              "@media (max-width: 480px)": {
                fontSize: "3.5rem"
              }
            }}
          />
          byunghun3@gmail.com
        </Email>
      </Drawer>
    </div >
  );
};
import React, { FC, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
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

const Contact = styled.div`
  flex: 2;
  display: flex;
  justify-content: flex-start;
  // width: 30%;
  padding: 0 1.5rem;
  // border: solid white;

  @media (max-width: 1050px) {
    justify-content: space-between;
    // width: 45%;
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
  // width: 30%;
`;

const Email = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 2rem;
  // width: 30%;
`;

const NavLinks = styled.div`
  flex: 2;
  display: flex;
  // justify-content: center;
  justify-content: flex-end;
  align-items: center;
  // width: 30%;
  // margin-right: -15rem;
  padding: 0 1.5rem;
  color: ${(props) => props.isDarkMode ? "black" : "white"};
  // border: solid white;

  @media (max-width: 950px) {
    // margin-left: -5rem;
    // width: 25%;
  }

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

    @media (max-width: 499px) {
      font-size: 4rem;
    }
`;

const ThemeSwitch = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  // border: solid white;

  @media (max-width: 875px) {
    justify-content: flex-start;
    padding-left: 2rem;
  }
`;

const MenuContainer = styled.div`
  display: none;

  @media (max-width: 875px) {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    padding-right: 2rem;
    // border: solid white;
  }
`;

const ExpandedMenu = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  float: right;
  display: flex;
  flex-direction: column;
  height: 500rem;
  width: 30vw;
  background-color: black;
  color: white;

  &:backdrop {
    background: rgba(255,0,0,.25);
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
    // setTimeout(() => { setIsExpanded(!isExpanded); }, 200);
    setIsExpanded(true);
    // document.body.style.overflowY = "hidden";
    // document.body.style.scrollSnapType = "none";
    // document.body.setAttribute("style", "color: red; height: 50vh;");
    // document.body.style.fontSize = "50rem";
  };

  const handleCloseMenu = () => {
    setIsExpanded(false);
    // document.body.style.overflow = "visible";
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
                // margin: "0 0.7rem 0 3rem",
                margin: "0 0.7rem 0 0",
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
      {/* {isExpanded && */}
      {/* <ExpandedMenu> */}
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
            // overflowWrap: "break-word",
            wordBreak: "break-word",

            "& > *:not(:first-child)": {
              margin: "5rem 0"
            },

            "@media (max-width: 499px)": {
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
              // margin: "0 0.7rem 0 3rem",
              margin: "0 0.7rem 0 0",
              fontSize: "2.5rem",
              "@media (max-width: 499px)": {
                fontSize: "3.5rem"
              }
            }}
          />
          201-786-8979
        </Phone>
        <Email>
          <EmailIcon
            sx={{
              margin: "0 0.7rem 0 0",
              fontSize: "2.5rem",
              "@media (max-width: 499px)": {
                fontSize: "3.5rem"
              }
            }}
          />
          byunghun3@gmail.com
        </Email>
        {/* </ExpandedMenu> */}
      </Drawer>
      {/* } */}
    </div >
  );
};
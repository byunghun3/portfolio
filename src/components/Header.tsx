import React, { FC, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { Switch } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { ThemeContext } from "../contexts/ThemeContext";
// import { styled } from "@mui/system";
import styled from "styled-components";

interface HeaderProps {
  projectsHash: string
  contactHash: string
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
  width: 50%;
`;

const Phone = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 30%;
`;

// const StyledPhoneIcon = styled.PhoneIcon`
//   font-size: 10rem;
// `;

const Email = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 30%;
`;

const ThemeSwitch = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 50%;
`;

// const Switch = styled.input`
//   width: 2rem;
// `;

// const Navbar = styled(Toolbar)({
//   justifyContent: "end",
//   backgroundColor: "black"
// });

export const Header: FC<HeaderProps> = ({ projectsHash, contactHash }) => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  return (
    <div>
      {/* <AppBar
        position="sticky"
        elevation={0}
      > */}
      <Navbar
        isDarkMode={isDarkMode}
      >
        <Contact>
          <Phone>
            <PhoneIcon
              sx={{
                margin: "0 0.7rem 0 2rem",
                fontSize: "2.5rem"
              }}
            />
            201-786-8979
          </Phone>
          <Email>
            <EmailIcon
              sx={{
                margin: "0 0.7rem 0 2rem",
                fontSize: "2.5rem"
              }}
            />
            byunghun3@gmail.com
          </Email>
        </Contact>
        <ThemeSwitch>
          <Switch
            color="primary"
            onChange={() => { setIsDarkMode(!isDarkMode); }}
          // type="checkbox"
          />
          {isDarkMode ?
            <DarkModeIcon
              sx={{
                margin: "0 2rem 0 0.7rem",
                fontSize: "2.7rem"
              }}
            /> :
            <LightModeIcon
              sx={{
                margin: "0 2rem 0 0.7rem",
                fontSize: "2.7rem"
              }}
            />}
        </ThemeSwitch>
        {/* <div className="links"> */}
        {/* <NavHashLink smooth to={projectsHash}>
          Projects
        </NavHashLink> */}
        {/* <NavHashLink smooth to={contactHash}>
            Contact
          </NavHashLink> */}
        {/* </div> */}
      </Navbar >
      {/* </AppBar> */}
    </div >
  );
};
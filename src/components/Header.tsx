import React, { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { Switch } from "@mui/material";
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
  min-height: 8vh;
  background-color: black;
  color: white;
  font-size: 1.7rem;
`;

const Phone = styled.div`
  display: flex;
`;

const Email = styled.div`
  display: flex;
`;

// const Switch = styled.input`
//   width: 2rem;
// `;

// const Navbar = styled(Toolbar)({
//   justifyContent: "end",
//   backgroundColor: "black"
// });

export const Header: FC<HeaderProps> = ({ projectsHash, contactHash }) => {
  return (
    <div>
      {/* <AppBar
        position="sticky"
        elevation={0}
      > */}
      <Navbar>
        <Phone>201-786-8979</Phone>
        <Email>byunghun3@gmail.com</Email>
        <Switch
        // type="checkbox"
        />

        {/* <div className="links">
          <NavHashLink smooth to={projectsHash}>
            Projects
          </NavHashLink>
          <NavHashLink smooth to={contactHash}>
            Contact
          </NavHashLink>
        </div> */}
      </Navbar>
      {/* </AppBar> */}
    </div>
  );
};
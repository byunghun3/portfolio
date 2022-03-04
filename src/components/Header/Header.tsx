import React, { FC } from "react";
import { NavHashLink } from "react-router-hash-link";
import { AppBar, Toolbar } from "@mui/material";
import { styled } from "@mui/system";

interface HeaderProps {
  // projectsHash: string
  // contactHash: string
}

const Navbar = styled(Toolbar)({
  justifyContent: "end",
  backgroundColor: "black"
});

export const Header: FC<HeaderProps> = ({ }) => {
  return (
    <div>
      <AppBar
        position="sticky"
        elevation={0}
      >
        <Navbar>
          <NavHashLink to="projectsHash">
            Projects
          </NavHashLink>
          <NavHashLink to="contactHash">
            Contact
          </NavHashLink>
        </Navbar>
      </AppBar>
    </div>
  );
};
import React, { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { AppBar, Toolbar } from "@mui/material";
import { styled } from "@mui/system";
import "./Header.css";

interface HeaderProps {
  projectsHash: string
  contactHash: string
}

const Navbar = styled(Toolbar)({
  justifyContent: "end",
  backgroundColor: "black"
});

export const Header: FC<HeaderProps> = ({ projectsHash, contactHash }) => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      history.pushState("", document.title, window.location.pathname + window.location.search);
    }, 1);
  });

  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  };
  return (
    <div>
      <AppBar
        position="sticky"
        elevation={0}
      >
        <Navbar>
          <div className="contact">
            <span>201-786-8979</span>
            <span>byunghun3@gmail.com</span>
          </div>
          <div className="links">
            {/* <a href="#projects">
              Projects
            </a>
            <a href="#contact">
              Resume
            </a> */}
            <NavHashLink smooth to={projectsHash}>
              Projects
            </NavHashLink>
            <NavHashLink smooth to={contactHash}>
              Contact
            </NavHashLink>
          </div>
        </Navbar>
      </AppBar>
    </div>
  );
};
import React, { FC, useEffect, useContext } from "react";
import { NavHashLink } from "react-router-hash-link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { ThemeContext } from "../contexts/ThemeContext";
import { Header } from "./Header";
import DownArrow from "../assets/icons/Black-doodle-arrow-isolated-on-transparent-background-PNG.png";
import styled from "styled-components";

interface ProfileProps {
    projectsHash: string
}

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    min-height: 92vh;
    background-color: ${(props) => props.isDarkMode ? "black" : "white"};
    color: ${(props) => props.isDarkMode ? "white" : "black"};
`;

const Greeting = styled.div`
    display: flex;
    font-size: 4rem;
`;

const Intro = styled.div`
    display: flex;
    font-size: 2.5rem;
`;

const Links = styled.div`
    display: flex;
    margin-bottom: 2rem;
`;

const Resume = styled.button`
    font-size: 2rem;
`;

const ScrollButton = styled.button`
    position: absolute;
    right: 5%;
    bottom: 10%;
    border: none;
    background: none;
    &:hover {
        cursor: pointer;
    }
`;

const Arrow = styled.img`
    width: 5rem;
`;

export const Profile: FC<ProfileProps> = ({ projectsHash }) => {
    const { isDarkMode } = useContext(ThemeContext);

    const handleClick = () => {
        setTimeout(() => {
            history.pushState("", document.title, window.location.pathname + window.location.search);
        }, 1);
    };

    return (
        <div>
            <Header
                projectsHash="#projects"
                contactHash="#contact"
            />
            <Content isDarkMode={isDarkMode}>
                <Greeting>Hi, I&apos;m Byung-Hun Kim</Greeting>
                <Intro>A self-taught front-end developer who is hungry to learn, challenge, and create.</Intro>
                <NavHashLink smooth to={projectsHash}>
                    <ScrollButton type="button" onClick={handleClick}>
                        <Arrow src={DownArrow} />Projects</ScrollButton>
                </NavHashLink>
                <Links>
                    <Resume type="button">Resume</Resume>
                    <LinkedInIcon />
                    <GitHubIcon />
                </Links>

            </Content>
        </div>
    );
};
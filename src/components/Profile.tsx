import React, { FC, useEffect, useContext } from "react";
import { NavHashLink } from "react-router-hash-link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { ThemeContext } from "../contexts/ThemeContext";
import { Header } from "./Header";
import ResumePDF from "../assets/docs/resume.pdf";
import DownArrow from "../assets/icons/Black-doodle-arrow-isolated-on-transparent-background-PNG.png";
import styled from "styled-components";

interface ProfileProps {
    projectsHash: string
}

const Page = styled.div`
    min-height: 100vh;
    scroll-snap-align: start;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 92vh;
    background-color: ${(props) => props.isDarkMode ? "black" : "white"};
    color: ${(props) => props.isDarkMode ? "white" : "black"};
`;

const Greeting = styled.div`
    display: flex;
    margin-top: 2rem;
    padding: 0 1rem;
    font-family: "Russo One";
    font-size: 7rem;
`;

const Intro = styled.div`
    display: flex;
    margin-top: 10rem;
    padding: 0 0.5rem;
    font-family: "Josefin Sans";
    font-size: 3rem;
`;

const Links = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10rem;
    margin-bottom: 2rem;
`;

const Resume = styled.button`
    height: 5rem;
    width: 10rem;
    margin: 0 1rem;
    // margin: 0 0.7rem;
    border: solid ${(props) => props.isDarkMode ? "white" : "black"} 0.2rem;
    border-radius: 0.3rem;
    background-color: ${(props) => props.isDarkMode ? "black" : "white"};
    color: ${(props) => props.isDarkMode ? "white" : "black"};
    font-family: "Josefin Sans";
    font-size: 2rem;
    &:hover {
        background-color: ${(props) => props.isDarkMode ? "white" : "black"};
        color: ${(props) => props.isDarkMode ? "black" : "white"};
        cursor: pointer;
    }
`;

const ScrollContainer = styled.div`
    width: 90%;
    margin-top: 4rem;
    margin-bottom: -4rem;
    // border: solid orange;
`;

const ScrollDownButton = styled.button`
    // position: absolute;
    // right: 5%;
    // bottom: 5;
    float: right;
    // margin-left: 100rem;
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

export const Profile: FC<ProfileProps> = ({ projectsHash }) => {
    const { isDarkMode } = useContext(ThemeContext);

    const handleClick = () => {
        setTimeout(() => {
            history.pushState("", document.title, window.location.pathname + window.location.search);
        }, 1);
    };

    return (
        <Page id="profile">
            <Header
                projectsHash="#projects"
                storyHash="#story"
            />
            <Content isDarkMode={isDarkMode}>
                <Greeting>Hello, I&apos;m Byung-Hun Kim</Greeting>
                <Intro>A self-taught front-end developer.<br /><br /> Hungry to learn, challenge, and create.</Intro>
                <Links>
                    <a href={ResumePDF} target="_blank" rel="noopener noreferrer">
                        <Resume type="button" isDarkMode={isDarkMode}>Resume</Resume>
                    </a>
                    <LinkedInIcon
                        sx={{
                            margin: "0 1rem",
                            // margin: "0 0.7rem",
                            color: "#0072b1",
                            fontSize: "5rem",
                            "&:hover": {
                                borderRadius: "0.5rem",
                                backgroundColor: "#0072b1",
                                color: "white",
                                cursor: "pointer"
                            }
                        }}
                    />
                    <GitHubIcon
                        sx={{
                            margin: "0 1rem",
                            // margin: "0 0.7rem",
                            fontSize: "5rem",
                            "&:hover": {
                                borderRadius: "0.5rem",
                                backgroundColor: `${isDarkMode ? "white" : "black"}`,
                                color: `${isDarkMode ? "black" : "white"}`,
                                cursor: "pointer"
                            }
                        }}
                    />
                </Links>
                <ScrollContainer>
                    <NavHashLink smooth to={projectsHash}>
                        <ScrollDownButton type="button" onClick={handleClick} isDarkMode={isDarkMode}>
                            <ArrowDownwardIcon
                                sx={{
                                    fontSize: "3rem"
                                }}
                            />
                            Projects
                        </ScrollDownButton>
                    </NavHashLink>
                </ScrollContainer>
            </Content>
        </Page>
    );
};
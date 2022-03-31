import React, { FC, useContext } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { ThemeContext } from "../contexts/ThemeContext";
import { Header } from "./Header";
import ResumePDF from "../assets/docs/resume.pdf";
import styled from "styled-components";

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

    a {
        margin: 0 1rem;
    }
`;

const Resume = styled.button`
    height: 5rem;
    width: 10rem;
    border: solid ${(props) => props.isDarkMode ? "white" : "black"} 0.2rem;
    border-radius: 0.3rem;
    background-color: ${(props) => props.isDarkMode ? "black" : "white"};
    color: ${(props) => props.isDarkMode ? "white" : "black"};
    font-family: "Josefin Sans";
    font-size: 2rem;
    cursor: pointer;
    
    &:hover {
        background-color: ${(props) => props.isDarkMode ? "white" : "black"};
        color: ${(props) => props.isDarkMode ? "black" : "white"};
    }
`;

export const Profile: FC = () => {
    const { isDarkMode } = useContext(ThemeContext);

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
                    <a aria-label="Resume" href={ResumePDF} target="_blank" rel="noopener noreferrer">
                        <Resume type="button" isDarkMode={isDarkMode}>Resume</Resume>
                    </a>
                    <a aria-label="LinkedIn" href={"https://www.linkedin.com/in/byung-hun-kim/"} target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon
                            sx={{
                                color: "#0072b1",
                                fontSize: "5rem",
                                cursor: "pointer",

                                "&:hover": {
                                    borderRadius: "0.5rem",
                                    backgroundColor: "#0072b1",
                                    color: `${isDarkMode ? "black" : "white"}`
                                }
                            }}
                        />
                    </a>
                    <a aria-label="Github" href={"https://github.com/byunghun3"} target="_blank" rel="noopener noreferrer">
                        <GitHubIcon
                            sx={{
                                color: `${isDarkMode ? "white" : "black"}`,
                                fontSize: "5rem",
                                cursor: "pointer",

                                "&:hover": {
                                    borderRadius: "0.5rem",
                                    backgroundColor: `${isDarkMode ? "white" : "black"}`,
                                    color: `${isDarkMode ? "black" : "white"}`
                                }
                            }}
                        />
                    </a>
                </Links>
            </Content>
        </Page>
    );
};
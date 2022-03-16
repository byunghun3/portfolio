import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Header } from "./Header";
import styled from "styled-components";

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    min-height: 90vh;
    border: solid black;
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
`;

const Resume = styled.button`
    font-size: 2rem;
`;

type Props = {}

export const Profile = (props: Props) => {
    return (
        <div>
            <Header
                projectsHash="#projects"
                contactHash="#contact"
            />
            <Content>
                <Greeting>Hi, I&apos;m Byung-Hun Kim</Greeting>
                <Intro>A self-taught front-end developer who is hungry to learn, challenge, and create.</Intro>
                <Links>
                    <Resume type="button">Resume</Resume>
                    <LinkedInIcon />
                    <GitHubIcon />
                </Links>
            </Content>
        </div>
    );
};
import React, { FC, useContext } from "react";
import { NavHashLink } from "react-router-hash-link";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { ThemeContext } from "../contexts/ThemeContext";
import styled from "styled-components";

interface ProjectProps {
    profileHash: string
}

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    min-height: 100vh;
    background-color: ${(props) => props.isDarkMode ? "black" : "white"};
    color: ${(props) => props.isDarkMode ? "white" : "black"};
`;

const PageTitle = styled.div`
    flex: 1;
    font-size: 3rem;
`;

const ProjectsCards = styled.div`
    flex: 3;
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-width: 100%;
    border: solid black;
`;

const Card = styled.div`
    min-height: 60vh;
    min-width: 25vw;
    border: solid gray 0.2rem;
`;

const Title = styled.div`
    font-size: 2rem;
`;

const Demo = styled.button`
    font-size: 2rem;
`;

const Link = styled.a`
    text-decoration: none;
`;

const Code = styled.button`
    font-size: 2rem;
`;

const ScrollButton = styled.button`
    position: absolute;
    right: 5%;
    bottom: -90%;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    color: ${(props) => props.isDarkMode ? "white" : "black"};
    &:hover {
        cursor: pointer;
    }
`;

export const Projects: FC<ProjectProps> = ({ profileHash }) => {
    const { isDarkMode } = useContext(ThemeContext);

    const handleClick = () => {
        setTimeout(() => {
            history.pushState("", document.title, window.location.pathname + window.location.search);
        }, 1);
    };

    return (
        <Content isDarkMode={isDarkMode}>
            <PageTitle>Projects</PageTitle>
            <ProjectsCards>
                <Card>
                    <Title>Revd Bookstore</Title>
                    <Link href="https://byunghun3.github.io/revd-bookstore/">
                        <Demo type="button">Demo</Demo>
                    </Link>
                    <a href="https://github.com/byunghun3/revd-bookstore">
                        <Code type="button">Code</Code>
                    </a>
                </Card>
                <Card>
                    <Title>Golf Course Weather</Title>
                    <a href="https://byunghun3.github.io/golf-course-weather/">
                        <Demo type="button">Demo</Demo>
                    </a>
                    <a href="https://github.com/byunghun3/golf-course-weather">
                        <Code type="button">Code</Code>
                    </a>
                </Card>
                <Card>
                    <Title>Portfolio</Title>
                    <Demo type="button">Demo</Demo>
                    <a href="https://github.com/byunghun3/portfolio">
                        <Code type="button">Code</Code>
                    </a>
                </Card>
            </ProjectsCards>
            <NavHashLink smooth to={profileHash}>
                <ScrollButton type="button" onClick={handleClick} isDarkMode={isDarkMode}>
                    {/* <Arrow src={DownArrow} /> */}
                    <ArrowUpwardIcon
                        sx={{
                            fontSize: "3rem"
                        }}
                    />
                    Profile</ScrollButton>
            </NavHashLink>
        </Content>
    );
};
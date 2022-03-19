import React, { FC, useContext } from "react";
import { NavHashLink } from "react-router-hash-link";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { ThemeContext } from "../contexts/ThemeContext";
import RevdBookstore from "../assets/images/revd-bookstore.png";
import GolfCourseWeather from "../assets/images/golf-course-weather.png";
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
    margin-top: 1.5rem;
    font-size: 3rem;
`;

const ProjectsCards = styled.div`
    flex: 5;
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-width: 100%;
    margin-top: -8.5rem;
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    min-height: 70vh;
    min-width: 25vw;
    border: solid gray 0.2rem;
`;

const Title = styled.div`
    font-size: 2rem;
`;

const ProjectImg = styled.img`
    width: 35rem;
`;

const Buttons = styled.div`
    display: flex;
`;

const Demo = styled.button`
    font-size: 2rem;
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
                    <ProjectImg src={RevdBookstore} />
                    <Buttons>
                        <a href="https://byunghun3.github.io/revd-bookstore/">
                            <Demo type="button">Demo</Demo>
                        </a>
                        <a href="https://github.com/byunghun3/revd-bookstore">
                            <Code type="button">Code</Code>
                        </a>
                    </Buttons>
                </Card>
                <Card>
                    <Title>Golf Course Weather</Title>
                    <ProjectImg src={GolfCourseWeather} />
                    <Buttons>
                        <a href="https://byunghun3.github.io/golf-course-weather/">
                            <Demo type="button">Demo</Demo>
                        </a>
                        <a href="https://github.com/byunghun3/golf-course-weather">
                            <Code type="button">Code</Code>
                        </a>
                    </Buttons>
                </Card>
                <Card>
                    <Title>Portfolio</Title>
                    <Buttons>
                        <Demo type="button">Demo</Demo>
                        <a href="https://github.com/byunghun3/portfolio">
                            <Code type="button">Code</Code>
                        </a>
                    </Buttons>
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
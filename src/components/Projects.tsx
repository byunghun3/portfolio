import React, { FC, useContext } from "react";
import { NavHashLink } from "react-router-hash-link";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { ThemeContext } from "../contexts/ThemeContext";
import RevdBookstore from "../assets/images/revd-bookstore.png";
import GolfCourseWeather from "../assets/images/golf-course-weather.png";
import PortfolioDark from "../assets/images/portfolio-dark.png";
import PortfolioLight from "../assets/images/portfolio-light.png";
import styled from "styled-components";

interface ProjectProps {
    profileHash: string
}

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 100vh;
    background-color: ${(props) => props.isDarkMode ? "black" : "white"};
    color: ${(props) => props.isDarkMode ? "white" : "black"};
    scroll-snap-align: start;
`;

const PageTitle = styled.div`
    flex: 1;
    margin-top: 2.5rem;
    font-family: "Russo One";
    font-size: 4rem;
`;

const ProjectsCards = styled.div`
    flex: 5;
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-width: 100%;
    margin-top: -10.5rem;
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    min-height: 65vh;
    min-width: 25vw;
    // border: solid #F8F8FF 0.4rem;
    border-radius: 2rem;
    // box-shadow: 0.2rem 0.2rem 2rem 0.2rem rgb(185, 205, 255);
    box-shadow: 0 0 2rem rgb(185, 205, 255);
`;

const Title = styled.div`
    margin: 1rem 0;
    font-size: 2.3rem;
    font-weight: 700;
`;

const ProjectImg = styled.img`
    margin-top: -3rem;
    width: 35rem;
    border-radius: 0.5rem;
`;

const Stack = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 1.8rem;
    // border: solid black;
    text-align: center;

    div {
        margin: 0.8rem;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        // border: solid green;
        // color: red;
    }
`;

const Buttons = styled.div`
    display: flex;
`;

const Demo = styled.button`
    height: 5rem;
    width: 10rem;
    margin: 0 0.7rem;
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

const Code = styled.button`
    height: 5rem;
    width: 10rem;
    margin: 0 0.7rem;
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
    // margin-top: 3rem;
    margin-bottom: 3rem;
    // border: solid orange;
`;

const ScrollUpButton = styled.button`
    // position: absolute;
    // right: 5%;
    // bottom: -95%;
    float: right;
    margin-right: 2rem;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    color: ${(props) => props.isDarkMode ? "white" : "black"};
    font-family: "Josefin Sans";
    font-size: 2rem;
    &:hover {
        transform: scale(1.25);
        cursor: pointer;
    }
`;

const ScrollDownButton = styled.button`
    // position: absolute;
    // right: 5%;
    // bottom: -95%;
    float: right;
    margin-right: 2rem;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    color: ${(props) => props.isDarkMode ? "white" : "black"};
    font-family: "Josefin Sans";
    font-size: 2rem;
    &:hover {
        transform: scale(1.25);
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
                    <Stack>
                        <div>React</div>
                        <div>Typescript</div>
                        <div>CSS Module</div>
                        <div>MUI</div>
                    </Stack>
                    <Buttons>
                        <a href="https://byunghun3.github.io/revd-bookstore/" target="_blank" rel="noopener noreferrer">
                            <Demo type="button" isDarkMode={isDarkMode}>Demo</Demo>
                        </a>
                        <a href="https://github.com/byunghun3/revd-bookstore" target="_blank" rel="noopener noreferrer">
                            <Code type="button" isDarkMode={isDarkMode}>Code</Code>
                        </a>
                    </Buttons>
                </Card>
                <Card>
                    <Title>Golf Course Weather</Title>
                    <ProjectImg src={GolfCourseWeather} />
                    <Stack>
                        <div>React (class components)</div>
                        <div>SASS</div>
                    </Stack>
                    <Buttons>
                        <a href="https://byunghun3.github.io/golf-course-weather/" target="_blank" rel="noopener noreferrer">
                            <Demo type="button" isDarkMode={isDarkMode}>Demo</Demo>
                        </a>
                        <a href="https://github.com/byunghun3/golf-course-weather" target="_blank" rel="noopener noreferrer">
                            <Code type="button" isDarkMode={isDarkMode}>Code</Code>
                        </a>
                    </Buttons>
                </Card>
                <Card>
                    <Title>Portfolio</Title>
                    <ProjectImg src={isDarkMode ? PortfolioLight : PortfolioDark} />
                    <Stack>
                        <div>React</div>
                        <div>Typescript</div>
                        <div>Styled-Components</div>
                    </Stack>
                    <Buttons>
                        <Demo type="button" isDarkMode={isDarkMode}>Demo</Demo>
                        <a href="https://github.com/byunghun3/portfolio" target="_blank" rel="noopener noreferrer">
                            <Code type="button" isDarkMode={isDarkMode}>Code</Code>
                        </a>
                    </Buttons>
                </Card>
            </ProjectsCards>
            <ScrollContainer>
                <NavHashLink smooth to={profileHash}>
                    <ScrollDownButton type="button" onClick={handleClick} isDarkMode={isDarkMode}>
                        <ArrowUpwardIcon
                            sx={{
                                fontSize: "3rem"
                            }}
                        />
                        Profile
                    </ScrollDownButton>
                </NavHashLink>
            </ScrollContainer>
        </Content>
    );
};
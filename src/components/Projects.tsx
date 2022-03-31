import React, { FC, useContext, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { ThemeContext } from "../contexts/ThemeContext";
import RevdBookstore from "../assets/images/revd-bookstore.png";
import GolfCourseWeather from "../assets/images/golf-course-weather.png";
import PortfolioDark from "../assets/images/portfolio-dark.png";
import PortfolioLight from "../assets/images/portfolio-light.png";
import styled from "styled-components";

interface SliderProps {
    newSlideOrder: number
}

const Page = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    min-height: 100vh;
    background-color: ${(props) => props.isDarkMode ? "black" : "white"};
    color: ${(props) => props.isDarkMode ? "white" : "black"};
    scroll-snap-align: start;

    @media (max-width: 600px) {
        margin-top: 5rem;
    }
`;

const PageTitle = styled.div`
    flex: 1;
    margin-top: 2.5rem;
    font-family: "Russo One";
    font-size: 4rem;

    @media (max-width: 450px) {
        padding-top: 2rem;
    }
`;

const ProjectsCards = styled.div<SliderProps>`
    flex: 5;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;

    @media (max-width: 1000px) {
        position: relative;
        justify-content: flex-start;
        max-width: 100%;
        overflow: hidden;
    }

    @media (max-height: 599px) {
        padding: 5rem 0;
    }
`;

const Slider = styled.div`
    @media (max-width: 1000px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-width: 100vw;
        transform: translateX(${props => props.newSlideOrder * -100}vw);
        transition: ease 1s;
    }
`;

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    min-height: 45rem;
    width: 25vw;
    margin-top: -5rem;
    border-radius: 2rem;
    box-shadow: 0 0 2rem rgb(185, 205, 255);

    @media (max-width: 1000px) {
        min-height: 80vh;
        min-width: 50vw;
        margin-top: 0;
        padding-bottom: 1rem;
    }

    @media (max-width: 625px) {
        min-width: 70vw;
    }

    @media (max-width: 450px) {
        min-height: 65vh;
    }

    @media (max-height: 599px) {
        min-height: 45rem;
        margin-top: 0;
    }
`;

const Title = styled.div`
    margin: 1rem 0;
    font-size: 2.3rem;
    font-weight: 700;

    @media (max-width: 1000px) {
        font-size: 2.7rem;
    }
`;

const ProjectImg = styled.img`
    margin-top: -3rem;
    height: auto;
    width: 95%;
    border-radius: 0.5rem;

    @media (max-width: 1000px) {
        margin-top: 0;
    }
`;

const Stack = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 1.8rem;
    text-align: center;

    div {
        flex-basis: 30%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0.8rem;
        text-align: center;
    }

    @media (max-width: 1000px) {
        font-size: 2.2rem;

        div {
            margin: 1rem 1.5rem;
        }
    }
`;

const Buttons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const Demo = styled.button`
    height: 5rem;
    width: 10rem;
    margin: 0 1.5rem;
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

    @media (max-width: 1000px) {
        font-size: 2.3rem;
    }

    @media (max-width: 300px) {
        min-height: 2rem;
        width: 7rem;
        font-size: 2rem;
    }
`;

const Code = styled.button`
    height: 5rem;
    width: 10rem;
    margin: 0 1.5rem;
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

    @media (max-width: 1000px) {
        font-size: 2.3rem;
    }

    @media (max-width: 300px) {
        min-height: 2rem;
        width: 7rem;
        font-size: 2rem;
    }
`;

export const Projects: FC = () => {
    const { isDarkMode } = useContext(ThemeContext);
    const [slideOrder, setSlideOrder] = useState(0);

    const handleClick = () => {
        setTimeout(() => {
            history.pushState("", document.title, window.location.pathname + window.location.search);
        }, 1);
    };

    const handleSlide = (e: React.MouseEvent<any>) => {
        if (e.currentTarget.id === "left") {
            setSlideOrder(slideOrder > 0 ? slideOrder - 1 : 2);
            console.log("left");
        } else {
            setSlideOrder(slideOrder < 2 ? slideOrder + 1 : 0);
            console.log("right");
        }
    };

    return (
        <Page id="projects" isDarkMode={isDarkMode}>
            <PageTitle>Projects</PageTitle>
            <ProjectsCards>
                <Slider newSlideOrder={slideOrder}>
                    <ArrowBackIosIcon
                        id="left"
                        onClick={handleSlide}
                        sx={{
                            display: "none",
                            "@media (max-width: 1000px)": {
                                zIndex: "1",
                                display: "flex",
                                margin: "0 1rem",
                                fontSize: "2rem",
                                cursor: "pointer"
                            }
                        }} />
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
                            <a aria-label="Revd Bookstore Demo" href="https://byunghun3.github.io/revd-bookstore/" target="_blank" rel="noopener noreferrer">
                                <Demo type="button" isDarkMode={isDarkMode}>Demo</Demo>
                            </a>
                            <a aria-label="Revd Bookstore Code" href="https://github.com/byunghun3/revd-bookstore" target="_blank" rel="noopener noreferrer">
                                <Code type="button" isDarkMode={isDarkMode}>Code</Code>
                            </a>
                        </Buttons>
                    </Card>
                    <ArrowForwardIosIcon
                        id="right"
                        onClick={handleSlide}
                        sx={{
                            display: "none",
                            "@media (max-width: 1000px)": {
                                zIndex: "1",
                                display: "flex",
                                margin: "0 1rem",
                                fontSize: "2rem",
                                cursor: "pointer"
                            }
                        }} />
                </Slider>
                <Slider newSlideOrder={slideOrder}>
                    <ArrowBackIosIcon
                        id="left"
                        onClick={handleSlide}
                        sx={{
                            display: "none",
                            "@media (max-width: 1000px)": {
                                zIndex: "1",
                                display: "flex",
                                margin: "0 1rem",
                                fontSize: "2rem",
                                cursor: "pointer"
                            }
                        }} />
                    <Card>
                        <Title>Golf Course Weather</Title>
                        <ProjectImg src={GolfCourseWeather} />
                        <Stack>
                            <div>React (class components)</div>
                            <div>SASS</div>
                            <div>Jest</div>
                        </Stack>
                        <Buttons>
                            <a aria-label="Golf Course Weather Demo" href="https://byunghun3.github.io/golf-course-weather/" target="_blank" rel="noopener noreferrer">
                                <Demo type="button" isDarkMode={isDarkMode}>Demo</Demo>
                            </a>
                            <a aria-label="Golf Course Weather Code" href="https://github.com/byunghun3/golf-course-weather" target="_blank" rel="noopener noreferrer">
                                <Code type="button" isDarkMode={isDarkMode}>Code</Code>
                            </a>
                        </Buttons>
                    </Card>
                    <ArrowForwardIosIcon
                        id="right"
                        onClick={handleSlide}
                        sx={{
                            display: "none",
                            "@media (max-width: 1000px)": {
                                zIndex: "1",
                                display: "flex",
                                margin: "0 1rem",
                                fontSize: "2rem",
                                cursor: "pointer"
                            }
                        }} />
                </Slider>
                <Slider newSlideOrder={slideOrder}>
                    <ArrowBackIosIcon
                        id="left"
                        onClick={handleSlide}
                        sx={{
                            display: "none",
                            "@media (max-width: 1000px)": {
                                zIndex: "1",
                                display: "flex",
                                margin: "0 1rem",
                                fontSize: "2rem",
                                cursor: "pointer"
                            }
                        }} />
                    <Card>
                        <Title>Portfolio</Title>
                        <ProjectImg src={isDarkMode ? PortfolioLight : PortfolioDark} />
                        <Stack>
                            <div>React</div>
                            <div>Typescript</div>
                            <div>Styled-Components</div>
                            <div>Jest</div>
                        </Stack>
                        <Buttons>
                            <a aria-label="Portfolio Demo" href="https://byunghun3.github.io/portfolio/" target="_blank" rel="noopener noreferrer">
                                <Demo type="button" isDarkMode={isDarkMode}>Demo</Demo>
                            </a>
                            <a aria-label="Portfolio Code" href="https://github.com/byunghun3/portfolio" target="_blank" rel="noopener noreferrer">
                                <Code type="button" isDarkMode={isDarkMode}>Code</Code>
                            </a>
                        </Buttons>
                    </Card>
                    <ArrowForwardIosIcon
                        id="right"
                        onClick={handleSlide}
                        sx={{
                            display: "none",
                            "@media (max-width: 1000px)": {
                                zIndex: "1",
                                display: "flex",
                                margin: "0 1rem",
                                fontSize: "2rem",
                                cursor: "pointer"
                            }
                        }} />
                </Slider>
            </ProjectsCards>
        </Page>
    );
};
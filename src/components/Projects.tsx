import React, { FC, useContext, useState } from "react";
import { NavHashLink } from "react-router-hash-link";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
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

interface ProjectProps {
    profileHash: string
}

const FullPage = styled.div`
    min-height: 100vh;
    scroll-snap-align: start;

`;

const Page = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    min-height: 100vh;
    background-color: ${(props) => props.isDarkMode ? "black" : "white"};
    color: ${(props) => props.isDarkMode ? "white" : "black"};
    scroll-snap-align: start;

    @media (max-width: 1000px) {
        // justify-content: center;
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
    // min-height: 100vh;
    // max-width: 100%;
    width: 100%;
    // border: solid blue;

    @media (max-width: 1000px) {
        // flex-direction: column;
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
    // display: none;
    // min-height: 100vh;

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
    // height: 65vh;
    min-height: 45rem;
    // min-height: 65vh;
    width: 25vw;
    // border: solid #F8F8FF 0.4rem;
    margin-top: -5rem;
    border-radius: 2rem;
    // box-shadow: 0.2rem 0.2rem 2rem 0.2rem rgb(185, 205, 255);
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
    // width: 35rem;
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
    // border: solid black;
    text-align: center;

    div {
        // margin: 0.8rem 2.5rem;
        flex-basis: 30%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0.8rem;
        text-align: center;
        // border: solid green;
        // color: red;
    }

    @media (max-width: 1000px) {
        // justify-content: space-around;
        // margin-top: -1rem;
        font-size: 2.2rem;

        div {
            margin: 1rem 1.5rem;
        }
    }

    @media (max-height: 599px) {
        // display: none;
    }
`;

const Buttons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    > a {
        // width: 100%;
        // border: solid red;
    }
`;

const Demo = styled.button`
    height: 5rem;
    // width: 55%;
    width: 10rem;
    margin: 0 1.5rem;
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

    @media (max-width: 1000px) {
        // min-height: 7rem;
        // width: 12rem;
        // margin: 0 0.7rem;
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

    @media (max-width: 1000px) {
        // height: 7rem;
        // width: 12rem;
        // margin: 0 0.2rem;
        font-size: 2.3rem;
    }

    @media (max-width: 300px) {
        min-height: 2rem;
        width: 7rem;
        font-size: 2rem;
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
        // <FullPage>
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
                                // position: "absolute",
                                zIndex: "1",
                                // top: "50%",
                                // left: "0",
                                display: "flex",
                                margin: "0 1rem",
                                // margin: "0 1rem",
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
                            <a href="https://byunghun3.github.io/revd-bookstore/" target="_blank" rel="noopener noreferrer">
                                <Demo type="button" isDarkMode={isDarkMode}>Demo</Demo>
                            </a>
                            <a href="https://github.com/byunghun3/revd-bookstore" target="_blank" rel="noopener noreferrer">
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
                                // position: "absolute",
                                zIndex: "1",
                                // top: "50%",
                                // right: "0",
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
                                // position: "absolute",
                                zIndex: "1",
                                // top: "50%",
                                // left: "0",
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
                    <ArrowForwardIosIcon
                        id="right"
                        onClick={handleSlide}
                        sx={{
                            display: "none",
                            "@media (max-width: 1000px)": {
                                // position: "absolute",
                                zIndex: "1",
                                // top: "50%",
                                // right: "0",
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
                                // position: "absolute",
                                zIndex: "1",
                                // top: "50%",
                                // left: "0",
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
                        </Stack>
                        <Buttons>
                            <a href="https://byunghun3.github.io/byunghun3/portfolio" target="_blank" rel="noopener noreferrer">
                                <Demo type="button" isDarkMode={isDarkMode}>Demo</Demo>
                            </a>
                            <a href="https://github.com/byunghun3/portfolio" target="_blank" rel="noopener noreferrer">
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
                                // position: "absolute",
                                zIndex: "1",
                                // top: "50%",
                                // right: "0",
                                display: "flex",
                                margin: "0 1rem",
                                fontSize: "2rem",
                                cursor: "pointer"
                            }
                        }} />
                </Slider>
            </ProjectsCards>
            {/* <ScrollContainer>
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
            </ScrollContainer> */}
        </Page>
        // </FullPage>
    );
};
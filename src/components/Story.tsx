import React from "react";
import { BackToTop } from "./BackToTop";
import styled from "styled-components";

type Props = {}

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

const ScrollContainer = styled.div`
    width: 90%;
    margin-top: 3rem;
    margin-bottom: -3rem;
    // border: solid orange;
`;

export const Story = (props: Props) => {
  return (
    <Content>
      <PageTitle>Story</PageTitle>
    </Content>
  );
};
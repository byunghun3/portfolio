import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../App";

const MockApp = () => {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
};

test("anchor tags match corresponding links", () => {
    render(<MockApp />);

    // const imageElement = screen.getByAltText("profile-picture");
    // expect(imageElement).toBeInTheDocument();
    // const projectsButtonElement = screen.getByRole("button", { name: "Projects" });
    // const storyButtonElement = screen.getByRole("button", { name: "Story" });
    // fireEvent.click(projectsButtonElement);
    // fireEvent.click(storyButtonElement);
    // expect(window.location.pathname).toEqual("/#projects");
    // expect(window.location.pathname).toEqual("/#story");
    const resumeDemoLinkElement = screen.getByLabelText("Resume");
    const linkedInDemoLinkElement = screen.getByLabelText("LinkedIn");
    const githubLinkElement = screen.getByLabelText("Github");
    const bookstoreDemoLinkElement = screen.getByLabelText("Revd Bookstore Demo");
    const bookstoreCodeLinkElement = screen.getByLabelText("Revd Bookstore Code");
    const golfDemoLinkElement = screen.getByLabelText("Golf Course Weather Demo");
    const golfCodeLinkElement = screen.getByLabelText("Golf Course Weather Code");
    const portfolioDemoLinkElement = screen.getByLabelText("Portfolio Demo");
    const portfolioCodeLinkElement = screen.getByLabelText("Portfolio Code");
    // fireEvent.click(bookstoreDemoLinkElement);
    // expect(window.location.pathname).toEqual("https://byunghun3.github.io/revd-bookstore/");
    expect(resumeDemoLinkElement).toHaveAttribute("href", "resume.pdf");
    expect(linkedInDemoLinkElement).toHaveAttribute("href", "https://www.linkedin.com/in/byung-hun-kim-a3809a143/");
    expect(githubLinkElement).toHaveAttribute("href", "https://github.com/byunghun3");
    expect(bookstoreDemoLinkElement).toHaveAttribute("href", "https://byunghun3.github.io/revd-bookstore/");
    expect(bookstoreCodeLinkElement).toHaveAttribute("href", "https://github.com/byunghun3/revd-bookstore");
    expect(golfDemoLinkElement).toHaveAttribute("href", "https://byunghun3.github.io/golf-course-weather/");
    expect(golfCodeLinkElement).toHaveAttribute("href", "https://github.com/byunghun3/golf-course-weather");
    expect(portfolioDemoLinkElement).toHaveAttribute("href", "https://byunghun3.github.io/byunghun3/portfolio");
    expect(portfolioCodeLinkElement).toHaveAttribute("href", "https://github.com/byunghun3/portfolio");
});
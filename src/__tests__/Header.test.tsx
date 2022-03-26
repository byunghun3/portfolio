import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "../components/Header";

const MockHeader = () => {
    return (
        <BrowserRouter>
            <Header projectsHash="" storyHash="" />
        </BrowserRouter>
    );
};

test("open and close drawer menu", () => {
    render(<MockHeader />);
    const menuIconElement = screen.getByLabelText("Menu Icon");
    fireEvent.click(menuIconElement);
    const drawerMenuElement = screen.getByLabelText("Drawer Menu");
    expect(drawerMenuElement).toBeVisible();
    const closeIconElement = screen.getByLabelText("Close Icon");
    fireEvent.click(closeIconElement);
    expect(drawerMenuElement).toHaveAttribute("aria-hidden", "true");
    // expect(drawerMenuElement).not.toBeVisible();
});
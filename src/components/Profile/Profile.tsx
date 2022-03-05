import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Header } from "../Header/Header";

type Props = {}

export const Profile = (props: Props) => {
    return (
        <div>
            <Header
                projectsHash="#projects"
                contactHash="#contact"
            />
            Hello, my name is Byung-Hun Kim
            <LinkedInIcon />
            <GitHubIcon />
        </div>
    );
};
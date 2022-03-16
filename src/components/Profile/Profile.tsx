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
            <div>
            Hi, I&apos;m Byung-Hun Kim


            <LinkedInIcon />
            <GitHubIcon />
            </div>
        </div>
    );
};
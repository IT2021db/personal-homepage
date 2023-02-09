import React from "react";
//import { Section } from "../Skills/styled";
import { Title, SubHeader, StyledGithubIcon, Section } from "./styled";
//import { Content } from "../Content";
import { Tiles } from "./Tiles";

export const Portfolio = () => (
    <Section>
        <StyledGithubIcon />
        <SubHeader>Portfolio </SubHeader>
        <Title>My recent projects</Title>
        <Tiles />
    </Section>


);
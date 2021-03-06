import React from "react";
import { Section } from "../Skills/styled";
import { MyRecentProjects, SubHeader, Header, StyledGithubIcon } from "./styled";
import { Content } from "../Content";


export const Portfolio = () => (
    <Section>
        <Header>
            <StyledGithubIcon />
            <SubHeader>Portfolio </SubHeader>
            <MyRecentProjects>My recent projects</MyRecentProjects>
        </Header>
         <Content />
    </Section>
   

);
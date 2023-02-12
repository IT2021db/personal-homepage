import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Section } from "../Skills/styled";
import { MyRecentProjects, SubHeader, Header, StyledGithubIcon } from "./styled";
import { Content } from "./Content";
import { GetApi } from "./GetApi";
import { githubUsername } from "./githubUsername";

export const Portfolio = () => {
    // const dispatch = useDispatch;

    // const repositoriesStatus = useSelector(selectRepositoriesStatus);
    // const repositories = useSelector(selectRepositories);
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


    // useEffect(()=>{
    //     dispatch(fetchRepositories(githubUsername));
    // }, [dispatch]);

    return (
        <Section>
            <Header>
                <StyledGithubIcon />
                <SubHeader>Portfolio </SubHeader>
                <MyRecentProjects>My recent projects</MyRecentProjects>
            </Header>
            <Content
            // status={repositoriesStatus}
            // repositories={repositories}

            />
            <GetApi />
        </Section>
    );
}
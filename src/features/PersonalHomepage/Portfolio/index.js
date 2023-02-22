import React, { useState, useEffect } from "react";
import { Section } from "../Skills/styled";
import { SubHeader, Header, StyledGithubIcon, Title, ReposWrapper } from "./styled";
import { Repositories } from "./Repositories";
import { useDispatch, useSelector } from "react-redux";
import { selectRepos } from "../homepageSlice";
import { fetchRepos } from "../homepageSlice";


export const Portfolio = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchRepos());
    }, []);

    const repos = useSelector(selectRepos);

    return (
        <Section>
            <Header>
                <StyledGithubIcon />
                <SubHeader>Portfolio </SubHeader>
                <Title>My recent projects </Title>
                <ReposWrapper>
                    {repos.map((repo) => (
                        <Repositories
                            key={repo.id}
                            repoName={repo.name}
                            description={repo.description}
                        />
                    ))}
                </ReposWrapper>
            </Header>
        </Section>
    );
};
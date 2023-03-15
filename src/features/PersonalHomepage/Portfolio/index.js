import React, { useState, useEffect } from "react";
import { Section, SubHeader, Header, StyledGithubIcon, Title, ReposSection } from "./styled";
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
                <ReposSection>
                    {repos.map((repo) => (
                        <Repositories
                            key={repo.id}
                            repoName={repo.name}
                            userName={repo.owner.login}
                            description={repo.description}
                            repoURL={repo.html_url}
                        />
                    ))}
                </ReposSection>
            </Header>
        </Section>
    );
};
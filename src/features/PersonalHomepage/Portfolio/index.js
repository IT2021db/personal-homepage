import React, { useState, useEffect } from "react";
import { Section, SubHeader, Header, StyledGithubIcon, MyRecentRepos } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { selectRepos, selectReposState } from "../homepageSlice";
import { fetchRepos } from "../homepageSlice";
import { Content } from "./Content";


export const Portfolio = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchRepos());
    }, []);

    const repos = useSelector(selectRepos);
    const status = useSelector(selectReposState)

    return (
        <Section>
            <Header>
                <StyledGithubIcon />
                <SubHeader>Portfolio </SubHeader>
                <MyRecentRepos>My recent projects </MyRecentRepos>
                <Content
                    repos={repos}
                    status={status}
                />
            </Header>
        </Section>
    );
};
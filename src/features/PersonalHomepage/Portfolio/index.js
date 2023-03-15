import React, { useState, useEffect } from "react";
import { Section, SubHeader, Header, StyledGithubIcon, Title, ReposSection } from "./styled";
import { Repositories } from "./Content/Repositories";
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
    const status=useSelector(selectReposState)
    console.log(`repos w Portfolio`)
    console.log({repos})
    return (
        <Section>
            <Header>
                <StyledGithubIcon />
                <SubHeader>Portfolio </SubHeader>
                <Title>My recent projects </Title>
                <Content 
                     repos={repos}           
                     status={status}
                />
              
               
            </Header>
        </Section>
    );
};
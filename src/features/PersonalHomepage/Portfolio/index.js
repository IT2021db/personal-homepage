import React, { useState, useEffect } from "react";
//import { useDispatch, useSelector } from "react-redux";
import { Section } from "../Skills/styled";
import { MyRecentProjects, SubHeader, Header, StyledGithubIcon } from "./styled";
import { Content } from "./Content";
import { githubUsername } from "./githubUsername";
import { Title,  } from "./styled";
import { Tiles } from "./Tiles";



export const Portfolio = () => {
  
const [state, setState]=useState()
// useEffect (()=>{
//     fetch("https://api.github.com/users/IT2021db/repos").then(res=>setState(res.data))
// })

    // useEffect(()=>{
    //     dispatch(fetchRepositories(githubUsername));
    // }, [dispatch]);

    return (
        <Section>
            <Header>
                <StyledGithubIcon />
                <SubHeader>Portfolio </SubHeader>
                <MyRecentProjects>My recent projects </MyRecentProjects>
            </Header>
            <Content
            // status={repositoriesStatus}
            // repositories={repositories}
            
          
            
            />
       <>
       </>
           
         
        </Section>
    );
};
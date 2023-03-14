import React from "react";
import { Container } from "./styled";
import { MainInformation } from "./MainInformation";
import { Skills } from "./Skills";
import { Portfolio } from "./Portfolio";
import {Footer}from "./Footer";
import { ThemeSwitcher } from "./ThemeSwitcher";

export const PersonalHomepage = () => (
    <Container>
        <ThemeSwitcher />
        <MainInformation />
        <Skills />
        <Portfolio />
        <Footer/>
    </Container>

);
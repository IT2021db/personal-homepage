import React from "react";
import { Container } from "./styled";
import { MainInformation } from "./MainInformation";
import { Skills } from "./Skills";
import { Portfolio } from "./Portfolio";
import {Footer}from "./Footer";

export const PersonalHomepage = () => (
    <Container>
        <MainInformation />
        <Skills />
        <Portfolio />
        <Footer/>
    </Container>

);
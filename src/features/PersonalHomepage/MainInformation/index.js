import React from "react";
import { Avatar, Paragraph, Wrapper, Name, ThisIs, StyledButtonLink } from "./styled";



import imgProfile from "./imgProfile.jpg";

export const MainInformation = () => (
    <Wrapper>
        <Avatar src={imgProfile} alt="Dorota Borowska" />
        <div>
            <ThisIs>This is</ThisIs>
            <Name>Dorota Borowska</Name>
            <Paragraph>Hi! I am a begining Frontend Developer mostly using React</Paragraph>
            <StyledButtonLink>Hire Me</StyledButtonLink>
        </div>
    </Wrapper>

);

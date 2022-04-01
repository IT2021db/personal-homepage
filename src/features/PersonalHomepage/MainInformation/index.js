import React from "react";
import { Avatar, Paragraph, Wrapper, Name, ThisIs } from "./styled";



import imgProfile from "./imgProfile.jpg";

export const MainInformation = () => (
    <Wrapper>
        <Avatar src={imgProfile} alt="Dorota Borowska" />
        <div>
            <ThisIs>This is</ThisIs>
            <Name>Dorota Borowska</Name>
            <Paragraph>Hi! I’m a begining Frontend Developer mostly using React</Paragraph>
        </div>
    </Wrapper>

);

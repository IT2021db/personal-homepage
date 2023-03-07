import React from "react";
import { Avatar, Paragraph, Wrapper, Name, ThisIs, LinkButton, Icon } from "./styled";
import { email } from "../../../common/myEmail";
import envelope from "./envelope.svg";
import imgProfile from "./imgProfile.jpg";
import { ThemeSwitcher } from "../../../common/ThemeSwitcher";

export const MainInformation = () => (
    <Wrapper>
        <Avatar src={imgProfile} alt="Dorota Borowska" />
        <div>
            <ThemeSwitcher/>
        <div>
            <ThisIs>This is</ThisIs>
            <Name>Dorota Borowska</Name>
            <Paragraph>Hi! I am a begining Frontend Developer mostly using React</Paragraph>
            <LinkButton
                href={`mailto:${email}`}
                title={email}
                target="_blank"
                rel="noopener norefereer"
            >
                <Icon src={envelope} />
                Hire Me
            </LinkButton>
            </div></div>
            
       
    </Wrapper>

);

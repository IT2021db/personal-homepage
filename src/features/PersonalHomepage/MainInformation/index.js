import React from "react";
import { Avatar, Paragraph, Wrapper, Name, ThisIs, StyledButton, Icon } from "./styled";
import { email } from "../../../common/myEmail";
import envelope from "./envelope.svg";
import imgProfile from "./imgProfile.jpg";
import { ThemeSwitcher } from "../ThemeSwitcher";

export const MainInformation = () => (
    <Wrapper>
        <Avatar src={imgProfile} alt="Dorota Borowska" />
        <div>
            <ThisIs>This is</ThisIs>
            <Name>Dorota Borowska</Name>
            <Paragraph>Hi there! I am a beginning Frontend Developer with a strong focus on React.
                I&nbsp;thrive on new challenges in the workplace and enjoy discovering new
                tools and solutions to improve my&nbsp;work. As a team player, I value building strong
                relationships with my&nbsp;colleagues and believe in the&nbsp;importance of mutual support,
                sensitivity, and empathy.
                Outside of work, I&nbsp;enjoy staying active through sports, as well as taking time to relax and enjoy nature.</Paragraph>
            <StyledButton
                href={`mailto:${email}`}
                title={email}
                target="_blank"
                rel="noopener norefereer"
            >
                <Icon src={envelope} />
                Hire Me
            </StyledButton>
        </div>


    </Wrapper>

);

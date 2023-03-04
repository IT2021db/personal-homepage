import React from "react";
import { LetsTalk, Wrapper, Paragraph, Email, Link, SocialWrapper } from "./styled";
import { email } from "../../../common/myEmail";
import { linkedIn } from "../../../common//MyLinkedIn.js";
import { github } from "../../../common/myGithub";
import { ReactComponent as GithubIcon } from "./githubIcon.svg";
import { ReactComponent as LinkedInIcon } from "./linkedInIcon.svg";

export const Footer = () => (
    <Wrapper>
        <LetsTalk>Let's talk!</LetsTalk>
        <Email
            href={`mailto:${email}`}
            title={email}
            target="_blank"
            rel="noopener norefereer"
        >
            {email}
        </Email>
        <Paragraph>
            I’m always open to the new chalenge.If you have a website,
            dashboard or mobile app in mind
            and need some help to make your ideas come to life,
            feel free to conatct me 😊
        </Paragraph>
        <SocialWrapper>
            <Link
                href={github}
                title={github}
                target="_blank"
                rel="noopener norefereer"
            >
                <GithubIcon />
            </Link>
            <Link
                href={linkedIn}
                title={linkedIn}
                target="_blank"
                rel="noopener norefereer"
            >
                <LinkedInIcon />
            </Link>
        </SocialWrapper>
    </Wrapper>
)

import React from "react";
import {
    LetsTalk,
    Wrapper,
    Paragraph,
    Email,
    Link,
    SocialWrapper,
    StyledLinkedIn,
    StyledGithub
} from "./styled";
import { email } from "../../../common/myEmail";
import { linkedIn } from "../../../common//MyLinkedIn.js";
import { github } from "../../../common/myGithub";

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
            I’m always open to the new chalenge.If you have a&nbsp;website,
            dashboard or mobile app in mindand need some help to%nbsp;make your ideas come to life,
            feel free to conatct me 😊
        </Paragraph>
        <SocialWrapper>
            <Link
                href={github}
                title={github}
                target="_blank"
                rel="noopener norefereer"
            >
                <StyledGithub />
            </Link>
            <Link
                href={linkedIn}
                title={linkedIn}
                target="_blank"
                rel="noopener norefereer"
            >
                <StyledLinkedIn />
            </Link>
        </SocialWrapper>
    </Wrapper>
)

import { ReactComponent as WarningIcon } from "./warning.svg";
import { Wrapper, Header, Paragraph } from "./styled.js";
import { ButtonLink } from "../../../ButtonLink/styled";
import { githubUsername } from "../../../githubUsername";

export const ErrorBox = () => (
    <Wrapper>
        < WarningIcon />
        <Header>Ooops! Something went&nbsp;wrong...</Header>
        <Paragraph>
            Sorry, failed to load Github projects.<br />
            You can check them directly on Github.
        </Paragraph>
        <ButtonLink
            href={`https://github.com/${githubUsername}`}
            target="_blank"
            rel="noreferrer noopener"
        >
            Go to Github
        </ButtonLink>
    </Wrapper>

);
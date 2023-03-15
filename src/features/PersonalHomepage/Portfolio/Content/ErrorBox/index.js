import { ReactComponent as WarningIcon } from "./warning.svg";
import { Wrapper, Header, Paragraph } from "./styled.js";

export const ErrorBox = () => (
    <Wrapper>
        < WarningIcon />
        <Header>Ooops! Something went&nbsp;wrong...</Header>
        <Paragraph>
            Sorry, failed to load Github projects.<br />
            You can check them directly on Github.
        </Paragraph>
    </Wrapper>

);
import { Title, Description, Link, LinkWrapper, Wrapper } from "./styled"

export const Repositories = ({ repoName, userName, description, repoURL }) => {

    return (
        <Wrapper>
            <Title>{repoName}</Title>
            <Description>
                {description}
            </Description>
            <LinkWrapper>
                Demo:
                <Link
                    href={`https://${userName}.github.io/${repoName}`}
                    target="_blank"
                    rel="noopener norefereer"
                >
                    {`https://${userName}.github.io/${repoName}`}
                </Link>
            </LinkWrapper>
            <LinkWrapper>
                Code:
                <Link
                    href={repoURL}
                    target="_blank"
                    rel="noopener norefereer"
                >
                    {repoURL}
                </Link>
            </LinkWrapper>
        </Wrapper>
    );
};
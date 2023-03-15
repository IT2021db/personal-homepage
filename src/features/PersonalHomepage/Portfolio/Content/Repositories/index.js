import { List, Title, Description, Link, LinkWrapper, Wrapper } from "./styled"

export const Repositories = ({ repos }) => {
    console.log("repos w Repositories:")
    console.log(repos)
    return (
        <List>
            {repos.map(repo => (
                < Wrapper key={repo.id} >
                    <Title>{repo.name}</Title>
                    <Description>
                        {repo.description}
                    </Description>
                    <LinkWrapper>
                        Demo:
                        <Link
                            href={`https://${repo.owner.login}.github.io/${repo.name}`}
                            target="_blank"
                            rel="noopener norefereer"
                        >
                            {`https://${repo.owner.login}.github.io/${repo.name}`}
                        </Link>
                    </LinkWrapper>
                    <LinkWrapper>
                        Code:
                        <Link
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener norefereer"
                        >
                            {repo.html_url}
                        </Link>
                    </LinkWrapper>
                </Wrapper >
            ))}

        </List>

    );
};
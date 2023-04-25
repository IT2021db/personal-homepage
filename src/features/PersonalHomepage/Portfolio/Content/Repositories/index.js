import { List, Title, Description, Link, LinkWrapper, Tile } from "./styled"

export const Repositories = ({ repos }) => {
    const selectedFirstRepoName = "movies-browser-react";
    const selectedSecondRepoName = "todos-list-react-ts";
    const selectedFirstRepo = repos.find(repo => repo.name === selectedFirstRepoName);
    const selectedSecondRepo = repos.find(repo => repo.name === selectedSecondRepoName);
    const otherRepos = repos.filter(repo => repo.name !== selectedFirstRepoName && repo.name !== selectedSecondRepoName);
    const orderedRepos = [selectedFirstRepo, selectedSecondRepo, ...otherRepos];
   
    return (
        <List>
            {orderedRepos.map(repo => (
                < Tile key={repo.id} >
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
                </Tile >
            ))}
        </List>
    );
};
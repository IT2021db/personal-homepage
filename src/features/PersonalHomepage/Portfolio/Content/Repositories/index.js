import { List, Title, Description, Link, LinkWrapper, Tile } from "./styled"

export const Repositories = ({ repos }) => {
const selectedRepoName="movies-browser-react";
const selectedRepo = repos.find(repo => repo.name === selectedRepoName);
const otherRepos = repos.filter(repo => repo.name !== selectedRepoName);
const orderedRepos = [selectedRepo, ...otherRepos];
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
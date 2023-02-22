import { Title, Description, Link, LinkWrapper, Wrapper } from "./styled"

export const Repositories = ({ repoName, description }) => {

    return (


        <Wrapper>
            <Title>{repoName}</Title>
            <Description>
                {description}
            </Description>

            <LinkWrapper>
                Demo:
                <Link>https://Demo_addres</Link>
            </LinkWrapper>

            <LinkWrapper>
                Code:
                <Link>https://Link_addres</Link>
            </LinkWrapper>
        </Wrapper>



    )
}
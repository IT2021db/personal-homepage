import { Title, Description, Link, LinkWrapper, Tile } from "./styled"

export const Tiles = () => {

    return (
        <>
            <Tile>
                <Title>repoName</Title>
                <Description>Jest to aplikacja tralalala... loremmjviuveiuv her ivuheru ivheivher viheiv evbh
                                        ebviebvievbf
                    hvh fvuefhvo ufhvifhvfubuh
                </Description>

                <LinkWrapper>
                    Demo: 
                    <Link>https://Demo_addres</Link>
                </LinkWrapper>

                <LinkWrapper>
                   Code: 
                    <Link>https://Link_addres</Link>
                </LinkWrapper>
            </Tile>

        </>
    )
}
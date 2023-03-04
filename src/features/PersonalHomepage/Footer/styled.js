import styled from "styled-components";

export const Wrapper = styled.section`
    max-width: 700px;
    height: 404px;
    background-color: ${({ theme }) => theme.color.galery};
    margin-top: 120px;
`;

export const LetsTalk = styled.div`
    text-transform: uppercase;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: initial;
    margin-bottom:24px;
    color:${({ theme }) => theme.color.slateGray}
`;

export const Email = styled.a`
    font-weight: 900;
    font-size: 38px;
    line-height: 46px;
    color:${({ theme }) => theme.color.mineShaft};
    text-decoration: none;

    &:hover {
        color:${({ theme }) => theme.color.scienceBlue};
    }
`;

export const Paragraph = styled.p`
    font-size: 20px;
    line-height: 1.4;
    letter-spacing: 0.05em; 
    color:${({ theme }) => theme.color.slateGray};
    margin: 24px 0 24px 0;
`;

/* export const Icon = styled.img`
    margin:56px 24px 0 0 ;
   
    &hover{
       color: blue;
         transition: color 0.1s linear;
    }
`; */

export const Link = styled.a`
    color:${({ theme }) => theme.color.black};
    width:48px;
    height: 48px;
    margin-right:24px;
    margin:  130px 26px 20px 0;

    &:hover {
       color:${({ theme }) => theme.color.scienceBlue};
    }
`;

export const SocialWrapper=styled.div`
    margin-top: 56px;
`;
import styled from "styled-components";
import { ReactComponent as Github } from "./githubIcon.svg";
import { ReactComponent as LinkedIn } from "./linkedInIcon.svg";


export const Wrapper = styled.footer`
    max-width: 700px;
    height: 404px;
    margin-top: 120px;

    @media (max-width:${({ theme }) => theme.breakpoints.mobileMax}){
       margin-top:48px;
    }
`;

export const LetsTalk = styled.h2`
    text-transform: uppercase;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: initial;
    margin:0 0 18px 0;
    color:${({ theme }) => theme.color.secondaryTextColor};
    font-size:12px;
`;

export const Email = styled.a`
    font-weight: 900;
    font-size: 38px;
    line-height: 46px;
    color:${({ theme }) => theme.color.headerTextColor};
    text-decoration: none;
    margin: 0;

    @media (max-width:${({ theme }) => theme.breakpoints.mobileMax}){
       font-size:22px;
    }

    &:hover {
        color:${({ theme }) => theme.color.blueElementColor};
    }
`;

export const Paragraph = styled.p`
    font-size: 20px;
    line-height: 1.4;
    letter-spacing: 0.05em; 
    color:${({ theme }) => theme.color.secondaryTextColor};
    margin: 24px 0 46px 0;

    @media (max-width:${({ theme }) => theme.breakpoints.mobileMax}){
      font-size: 14px; 
      margin: 12px 0 36px 0;    
    }
`;

export const Link = styled.a`
    color:${({ theme }) => theme.color.headerTextColor};
    width:48px;
    height: 48px;
    margin-right:24px;
    margin:  130px 26px 20px 0;

    @media (max-width:${({ theme }) => theme.breakpoints.mobileMax}){
     
    }

    &:hover {
       color:${({ theme }) => theme.color.blueElementColor};
    }
`;

export const SocialWrapper = styled.div``;
export const StyledGithub = styled(Github)`
    height: 48px;
    width:48px;

    @media (max-width:${({ theme }) => theme.breakpoints.mobileMax}){
        height: 32px;
        width:32px;
    }
`;
export const StyledLinkedIn = styled(LinkedIn)`
   height: 48px;
    width:48px;

    @media (max-width:${({ theme }) => theme.breakpoints.mobileMax}){
        height: 32px;
        width:32px;
    }
`;
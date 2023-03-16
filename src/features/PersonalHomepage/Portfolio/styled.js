import styled from "styled-components";
import { ReactComponent as GithubIcon } from "./github.svg";

export const Section = styled.section`
   margin-top:72px;

   @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        margin-top:48px;
     }
`;

export const StyledGithubIcon = styled(GithubIcon)`
    margin-bottom:8px ;  
`;

export const Header = styled.header`
    text-align: center;
`;

export const MyRecentRepos = styled.h3`
    text-align: center;
    font-weight:normal;
    margin-top:8px;
    font-size: 20px;
    color: ${({ theme }) => theme.color.headerTextColor};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        font-size:17px;
     }
`;




export const SubHeader = styled.header`
    font-size: 30px;
    font-weight: 900;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.color.headerTextColor};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        font-size:22px;
     }
`;

export const ReposSection = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap:32px;
    padding:0;
`;


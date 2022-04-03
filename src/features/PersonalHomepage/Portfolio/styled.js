import styled from "styled-components";
import {ReactComponent as GithubIcon} from "./github.svg";

export const SubHeader = styled.header`
    font-size: 30px;
    font-weight: 900;
    letter-spacing: 0.05em;
    padding-bottom: 16px;
  
    color: ${({ theme }) => theme.color.black};
`;

export const MyRecentProjects = styled.div`
    text-align: center;
`;

export const Header=styled.header`
    text-align: center;
`;

export const StyledGithubIcon=styled(GithubIcon)`
    margin-bottom:12px ;
`;

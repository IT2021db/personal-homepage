import styled from "styled-components";
import { ReactComponent as GithubIcon } from "./github.svg";

export const SubHeader = styled.header`
    font-size: 30px;
    font-weight: 900;
    letter-spacing: 0.05em;
    padding-bottom: 16px;
  
    color: ${({ theme }) => theme.color.black};
`;

export const Title = styled.h3`
    text-align: center;
    margin-bottom: 32px;
`;
export const Header = styled.h3`
    text-align: center;
    margin-bottom: 32px;
`;

export const Section = styled.header`
    text-align: center;
    background-color: ${({theme})=>theme.color.galery};
`;

export const StyledGithubIcon = styled(GithubIcon)`
    margin-bottom:12px ;
`;

export const ReposWrapper = styled.h3`
    text-align: center;
    background-color: ${({theme})=>theme.color.galery};
`;


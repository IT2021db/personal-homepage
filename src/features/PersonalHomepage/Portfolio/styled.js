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
export const Wrapper = styled.section`
    padding:32px 32px 32px 0;
    background-color: ${({ theme }) => theme.color.white};
    text-align: center;
   
`;

export const StyledGithubIcon = styled(GithubIcon)`
    margin-bottom:12px ;
`;

export const ReposWrapper = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap:32px;
    background-color: ${({ theme }) => theme.color.galery};
`;


import styled from "styled-components";
import { themeLight } from "../../../core/App/theme";

export const Section = styled.section`
    margin: 63px 0;
    padding:32px ;
    background-color: ${({ theme }) => theme.color.white};
`;

export const StyleHeader = styled.header`
    font-size: 30px;
    font-weight: 900;
    letter-spacing: 0.05em;
    padding-bottom: 16px;
    border-bottom: 1px solid ${({ theme }) => theme.color.iron};
    color: ${({ theme }) => theme.color.black};

`;

export const List = styled.ul`
color: ${({ theme }) => theme.color.slateGray};
`;

export const Item = styled.li`
   
`;
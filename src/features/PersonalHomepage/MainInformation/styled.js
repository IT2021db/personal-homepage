import styled from "styled-components";
import { themeLight } from "../../../core/App/theme";

export const Wrapper = styled.header`
    display:grid;
    grid-template-columns: auto 1fr;
       /* height: 404px; */
    grid-gap:66px; //64px
    align-items: center;
    background-color: ${({ theme }) => theme.color.mercury};
`;

export const Avatar = styled.img`
    max-width: 398px;
    width: 30vw;
    border-radius: 50%;
`;

export const ThisIs = styled.div`
    text-transform: uppercase;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: initial;
    color:${({ theme }) => theme.color.slateGray}
`;

export const Name = styled.h1`
    font-weight: 900;
    font-size: 38px;
    line-height: 46px;
    color:${({ theme }) => theme.color.mineShaft}
`;

export const Paragraph = styled.p`
    font-size: 20px;
    line-height: 1.4;
    letter-spacing: 0.05em; 
    color:${({ theme }) => theme.color.slateGray}
`;

export const StyledButtonLink = styled.button`

`;
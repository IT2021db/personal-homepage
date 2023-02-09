import styled from "styled-components";
import { themeLight } from "../../../core/App/theme";

export const Wrapper = styled.header`
    display:grid;
    grid-template-columns: auto 1fr;
    max-width: 1216px;
    height: 404px;
    background-color: ${({ theme }) => theme.color.galery};
`;

export const Avatar = styled.img`
    width: 398px;
    height: 398px;
    border-radius: 50%;
    margin-right:66px;
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
    font-weight: 400;
    font-size: 20px;
    line-height: 1.4;
    letter-spacing: 0.05em; 
    color:${({ theme }) => theme.color.slateGray}
`;

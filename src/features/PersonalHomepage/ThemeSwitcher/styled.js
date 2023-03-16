import styled, { css } from "styled-components";
import { ReactComponent as SunIcon } from "./brightness.svg";

export const SwitchContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items:center;
`;

export const SwitchText = styled.p`
    font-size:12px;
    font-weight:700;
    text-transform: uppercase;

    @media(max-width:${({theme})=>theme.breakpoints.mobileMax}){
        display: none;
    }
`;

export const SwitchIcon = styled.span`
    background-color:${({ theme }) => theme.color.switcherBackground};
    border: 1px solid ${({ theme }) => theme.color.switcherBorder};
    border-radius:14px;
    margin-left: 12px;
    height: 25px;
    width: 47px;
    padding: 2px;
    display:flex;
    align-items:center;
`;

export const Switcher=styled.span`
    width:20px;
    height:20px;
    border-radius: 50%;
    background-color:${({ theme }) => theme.color.secondaryTextColor};
    display:flex;
    align-items:center;
    justify-content:center;

    ${({ isDark }) => isDark && css`
        transform: translateX(20px);
    `}
  `;

export const IconPicture = styled(SunIcon)`
    color:${({ theme }) => theme.color.sunColor};
`;
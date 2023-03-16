import styled from "styled-components";
import {ReactComponent as Icon}from"./dot.svg";

export const Section = styled.section`
    margin-top: 63px;
    padding:32px 0;
    background-color: ${({ theme }) => theme.color.sectionBackgroundColor};

    @media(max-width:${({theme})=>theme.breakpoints.mobileMax}){
        margin:48px 0;
        padding:0;
    }
`;

export const Title = styled.h3`
    font-size: 30px;
    font-weight: 900;
    letter-spacing: 0.05em;
    padding-bottom: 16px;
    border-bottom: 1px solid ${({ theme }) => theme.color.talesBorder};
    color: ${({ theme }) => theme.color.headerTextColor};

    @media(max-width:${({theme})=>theme.breakpoints.mobileMax}){
       font-size:18px;
    }

`;

export const List = styled.ul`
 color: ${({ theme }) => theme.color.secondaryTextColor};
 display: grid;
 grid-template-columns:repeat(2, 1fr);
 grid-gap:5px;
 list-style:none;
`;

export const Item = styled.li``;

export const Bullet=styled(Icon)`
color: ${({ theme }) => theme.color.blueElementColor};
`;

import styled from "styled-components";
import {ButtonLink}from"../ButtonLink/styled";

export const Wrapper = styled.header`
    margin-top:-30px;           //that is height of the theme switch
    display:grid;
    grid-template-columns: auto 1fr;
    grid-gap: 64px;
    align-items:center;
  
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    grid-template-columns: 1fr;
    grid-gap:12px;
    }
`;

export const Avatar = styled.img`
    max-width: 398px;
    width: 30vw;
    border-radius: 50%;
    margin-bottom:63px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}){
        width: 132px;
       margin-bottom:0;
    }
`;

export const ThisIs = styled.div`
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: initial;
    color:${({ theme }) => theme.color.secondaryTextColor};
`;

export const Name = styled.h1`
    font-weight: 900;
    font-size: 38px;
    margin:12px 0 0 0;
    color:${({ theme }) => theme.color.headerTextColor};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 22px;
    margin-top:8px;
     }
`;

export const Paragraph = styled.p`
    font-size: 20px;
    margin: 36px 0 ;
    line-height: 1.4;
    max-width: 650px;
    color:${({ theme }) => theme.color.secondaryTextColor};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 16px;
    max-width: 570px;
    margin: 16px 0;
     }

     /* @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}) {
            margin-top:16px;
     } */
`;

export const Icon = styled.img`
    padding: 10px;
`;

export const StyledButton=styled(ButtonLink)`
display:inline-flex;  //width adjusted  to content
padding-right:25px;
`;
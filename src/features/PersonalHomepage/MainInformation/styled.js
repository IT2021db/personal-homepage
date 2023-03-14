import styled from "styled-components";

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

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}){
        width: 132px;
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
    color:${({ theme }) => theme.color.headerTextColor}

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 22px;
    margin-top:8px;
     }
`;

export const Paragraph = styled.p`
    font-size: 20px;
    margin: 36px 0 0 0;
    line-height: 1.4;
    max-width: 650px;
    color:${({ theme }) => theme.color.secondaryTextColor};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 16px;
    max-width: 570px;
    margin-top: 16px;
     }

     /* @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}) {
            margin-top:16px;
     } */
`;

export const ButtonLink = styled.a`
    cursor:pointer;
    text-decoration:none;
    padding-right:15px;
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.blueElementColor};
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin-top:32px;
    border-radius: 4px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        margin-top:24px;
     }
`;
export const Icon = styled.img`
    padding: 10px;
`;
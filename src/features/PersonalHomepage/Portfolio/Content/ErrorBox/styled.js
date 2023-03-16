import styled from "styled-components";

export const Wrapper = styled.article`
    margin-top:96px;
    display:grid; 
    justify-items:center;  
    text-align:center;
    grid-gap:32px;
    color:${({ theme }) => theme.color.headerTextColor};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        margin-top: 56px;
       grid-gap:24px;
     }

`;

export const Header = styled.header`
    font-size:24px;
    font-weight:700;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        font-size: 17px;
     }
`;

export const Paragraph = styled.p`
    margin:0px;
    font-size:20px;
    line-height:1.4;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        font-size: 16px;
     }
`;


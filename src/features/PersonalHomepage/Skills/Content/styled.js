import styled from "styled-components";
//import { ReactComponent as Icon } from "./dot.svg";

export const Section = styled.section`
    margin-top: 63px;
    padding:12px 0;
    padding-left:20px;
    background-color: ${({ theme }) => theme.color.sectionBackgroundColor};

    @media(max-width:${({ theme }) => theme.breakpoints.mobileMax}){
        margin:38px 0;
        padding-left:10px;
    }
`;

export const Title = styled.h3`
    font-size: 30px;
    font-weight: 900;
    letter-spacing: 0.05em;
    padding-bottom: 16px;
    border-bottom: 1px solid ${({ theme }) => theme.color.talesBorder};
    color: ${({ theme }) => theme.color.headerTextColor};

    @media(max-width:${({ theme }) => theme.breakpoints.mobileMax}){
       font-size:12px;
    }

`;

export const List = styled.ul`
    padding:0;
    color: ${({ theme }) => theme.color.secondaryTextColor};
    display: grid;
    grid-template-columns:repeat(3, 1fr);
    grid-gap:8px 32px;
    list-style:none;
    font-size: 18px;
    line-height:100%;
    

    @media(max-width:${({ theme }) => theme.breakpoints.mobileMax}){
        grid-template-columns:1fr;
        font-size: 12px;
    }

     /* @media(max-width:${({ theme }) => theme.breakpoints.mobileMax}){
        grid-template-columns:1fr;
        font-size: 12px;
    } */
`;

export const Item = styled.li`
 ::before{
   content:".";
    font-size: 4em;
    padding-right: 16px;
    vertical-align:3px;
    color: ${({ theme }) => theme.color.blueElementColor}; 

    @media(max-width:${({ theme }) => theme.breakpoints.mobileMax}){
        padding-right:8px;
    }
  }
`;

// export const Bullet = styled(Icon)`
//     color: ${({ theme }) => theme.color.blueElementColor};
//     margin-right:16px;
//     margin-top: 8px;
//     height: auto;

/* @media(max-width:${({ theme }) => theme.breakpoints.mobileMax}){
   width: 6px;
   margin-right: 8px;
} */
/* @media(max-width:${({ theme }) => theme.breakpoints.tablet}){
   width: 6px;
   margin-right: 8px; //59min
} */
/* `; */
// export const Bullet = styled.div`
//   width: 9px;
//   height: 9px;
//   border-radius: 50%;
//   background-color: ${({ theme }) => theme.color.scienceblue};
//   margin-right: 16px;
// `;

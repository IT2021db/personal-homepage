import styled from "styled-components";

export const List = styled.ul`
  display:grid;
  grid-template-columns: repeat(2,1fr);
  grid-gap:32px;
  padding:0;
  list-style:none;

       @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
          grid-template-columns:1fr;
          grid-gap:16px;
        
  }
`;

export const Tile = styled.li`
  border: 6px solid ${({ theme }) => theme.color.talesBorder};
  transition:border-color 0.3s;
  text-align: left;
  padding:56px;
  margin: 0;
  font-size: 18px;
  background-color: ${({ theme }) => theme.color.sectionBackgroundColor};

  &:hover {
    border-color: ${({theme})=>theme.color.talesBorderHover};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        padding:20px;
     }
`;

export const Title = styled.h3`
  margin: 0;
  color:${({ theme }) => theme.color.blueElementColor};
  font-size: 24px;
  line-height: 29px;
`;

export const Description = styled.p`
  margin: 24px 0;
  line-height: 1.4;
  font-size: 18px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        font-size:14px;
        margin: 16px, 0;  
     }
`;

export const LinkWrapper = styled.div`
  margin:8px 0;
`;

export const Link = styled.a` 
  color: ${({ theme }) => theme.color.blueElementColor};
  border-bottom: 1px solid rgb(3, 102, 214, 0.2);
  text-align:left;
  margin: 0 8px ;
`;

import styled from "styled-components";

export const List=styled.ul`
display:grid;
grid-template-columns: repeat(2,1fr);
grid-gap:32px;
`;

export const Wrapper = styled.section`
  border: 6px solid ${({ theme }) => theme.color.talesBorder};
  text-align: left;
  padding:20px;
  font-size: 18px;
  background-color: ${({ theme }) => theme.color.sectionBackgroundColor};
`;

export const Title = styled.h3`
  margin: 0;
  color:${({ theme }) => theme.color.blueElementColor};
  font-size: 24px;
  line-height: 29px;
`;

export const Description = styled.p`
  margin: 24px 0;
  line-height: 140%;
  font-size: 18px;
`;

export const LinkWrapper = styled.div`
padding:8px 0;
`;

export const Link = styled.a` 
  color: ${({ theme }) => theme.color.blueElementColor};
  border-bottom: 1px solid rgb(3, 102, 214, 0.2);
  text-align:left;
  margin: 0 8px ;
`;

import styled from "styled-components";

export const Tile = styled.li`
    max-width: 592px;
    padding: 56px;
    text-align: left;
    color: ${({ theme }) => theme.color.slateGray};
    background-color: ${({ theme }) => theme.color.white};
    border: 6px solid ${({ theme }) => theme.color.iron};
    box-shadow: 0px 0px 10px  ${({ theme }) => theme.color.iron};
    border-radius: 4px;
    list-style-type:none;
       
`;

export const Title = styled.h3`
  margin: 0;
  color:${({ theme }) => theme.color.scienceBlue};
  font-size: 24px;
  line-height: 29px;
`;

export const Description = styled.p`
  margin: 24px 0;
  line-height: 140%;
  font-size: 18px;
`;
export const LinkWrapper = styled.p

  `;`
export const Link = styled.a` 
  color: ${({ theme }) => theme.color.scienceBlue};
  border-bottom: 1px solid rgb(3, 102, 214, 0.2);
  //list-style-type:none;
  text-align:left;
  margin: 0 8px ;
`;

import styled from "styled-components";

export const Repositories = styled.li`
    max-width: 592px;
    padding: 56px;
    text-align: left;
    color: ${({ theme }) => theme.color.slateGray};
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
    border-radius: 4px;
    //list-style-type:none;
       
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
export const Wrapper = styled.div`
  border: 6px solid ${({ theme }) => theme.color.iron};
`;
export const LinkWrapper = styled.p

  `;`
export const Link = styled.a` 
  color: ${({ theme }) => theme.color.scienceBlue};
  border-bottom: 1px solid rgb(3, 102, 214, 0.2);
  text-align:left;
  margin: 0 8px ;
`;

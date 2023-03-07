import styled from "styled-components";

export const Wrapper = styled.section`
    margin: 63px 0;
    padding:32px ;
    background-color: ${({ theme }) => theme.color.sectionBackgroundColor};
`;

export const Title = styled.h3`
    font-size: 30px;
    font-weight: 900;
    letter-spacing: 0.05em;
    padding-bottom: 16px;
    border-bottom: 1px solid ${({ theme }) => theme.color.talesBorder};
    color: ${({ theme }) => theme.color.headerTextColor};

`;

export const List = styled.ul`
 color: ${({ theme }) => theme.color.secondaryTextColor};
 display: grid;
 grid-template-columns:repeat(2, 1fr);
 grid-gap:5px;
`;

export const Item = styled.li``;

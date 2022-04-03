import styled from "styled-components";

export const SubHeader = styled.header`
    font-size: 30px;
    font-weight: 900;
    letter-spacing: 0.05em;
    padding-bottom: 16px;
    text-align: center;
    color: ${({ theme }) => theme.color.black};
`;
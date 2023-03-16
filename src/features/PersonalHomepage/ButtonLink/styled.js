import styled from "styled-components";

export const ButtonLink = styled.a`
    cursor:pointer;
    text-decoration:none;
    padding:12px  16px;
    font-size:20px;
    font-weight: 600;
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.blueElementColor};
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        font-size:18px;
     }
`;

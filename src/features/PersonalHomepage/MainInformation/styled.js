import styled from "styled-components";

export const Wrapper = styled.header`
    display:grid;
    grid-template-columns: auto 1fr;
    max-width: 1216px;
    height: 404px;
    margin-top: 115px;
`;

export const Avatar = styled.img`
    max-width: 398px;
    width: 30vw;
    border-radius: 50%;
    margin-right:66px;
`;

export const ThisIs = styled.div`
    text-transform: uppercase;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: initial;
    color:${({ theme }) => theme.color.secondaryTextColor}
`;

export const Name = styled.h1`
    font-weight: 900;
    font-size: 38px;
    line-height: 46px;
    color:${({ theme }) => theme.color.headerTextColor}
`;

export const Paragraph = styled.p`
    font-size: 20px;
    line-height: 1.4;
    letter-spacing: 0.05em; 
    color:${({ theme }) => theme.color.secondaryTextColor}
`;

export const LinkButton = styled.a`
    cursor:pointer;
    text-decoration:none;
    padding-right:15px;
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.blueElementColor};
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
`;
export const Icon = styled.img`
    padding: 10px;
`;
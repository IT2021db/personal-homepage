import styled, {keyframes}from "styled-components";
import {ReactComponent as Spinner}from "./spinner.svg";

export const Wrapper=styled.div`
    display:grid;
    justify-items:center;
`;

const loaderAnimation = keyframes`
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
`;

export const StyledSpinner = styled(Spinner)`
    animation: 1.8s infinite linear ${loaderAnimation};
    color:${({ theme }) => theme.color.blueElementColor};
    margin-top: 48px;

    @media (orientation: landscape) and (max-width: 900px) {
      height: 45px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        height: 35px;
        margin-top:25px;
    }
`;
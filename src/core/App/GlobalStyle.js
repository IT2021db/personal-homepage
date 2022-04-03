import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
    box-sizing: border-box;
    }

    *, ::after, ::before {
    box-sizing: inherit;
    }

    body {
    font-family: "Inter", sans-serif;
    transition: background 0.3s;
    background-color: ${({ theme }) => theme.color.whiteLilac};
    font-size: 18px;
    letter-spacing: 0.05em;
    word-break: break-word; //by linki przerzucaly sie do nowej linii
    overflow-y: scroll;
    padding-bottom:  108px; //by odstep na dole byl
    margin-top: 46px;

  


    }
;`
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
    background-color: ${({ theme }) => theme.color.generalBackground};
    font-size: 18px;
    letter-spacing: 0.05em;
    word-break: break-word; //by linki przerzucaly sie do nowej linii ciągle najlepiej wspierane
    overflow-y: scroll;    //aby usunąć przeskok podczas ładowania repos
    padding-bottom:  108px; 
    color:${({ theme }) => theme.color.secondaryTextColor};
 
    }

    @media(max-width:${({ theme }) => theme.breakpoints.mobileMax}){
        padding-bottom:32px;
    }
;`
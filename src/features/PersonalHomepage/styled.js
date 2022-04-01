import styled from "styled-components";
import { theme } from "../../core/App/theme";

export const Container = styled.div`
    max-width: 1920px;
    margin: auto;
    background-color: ${({ theme }) => theme.color.whiteLilac};
`;
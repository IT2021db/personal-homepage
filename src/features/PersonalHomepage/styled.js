import styled from "styled-components";

export const Container = styled.div`
    max-width: 1248px;
    padding:16px;
    margin: auto;

    @media (max-width:${({ theme }) => theme.breakpoints.mobileMax}){
        padding:8px;
    }
    
  
   
`;
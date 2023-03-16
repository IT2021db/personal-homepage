import styled from "styled-components";

export const Container = styled.div`
    max-width: 1248px;
    padding:16px;
    margin: auto;
    margin-top: 20px;

    @media (max-width:${({ theme }) => theme.breakpoints.mobileMax}){
        padding:14px;
        margin-top:10px;
       
    }
    
  
   
`;
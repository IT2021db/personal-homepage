import {SwitchContainer, SwitchText, Icon, Sun } from "./styled";

export const ThemeSwitcher = () => {
    return (
     
         <SwitchContainer>
               <SwitchText>DARK MODE OFF&nbsp;&nbsp; </SwitchText>
            <Icon>
                <Sun />
            </Icon>
         </SwitchContainer>
       
    )
};
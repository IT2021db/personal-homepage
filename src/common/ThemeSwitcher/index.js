import { useDispatch, useSelector } from "react-redux";
import { SwitchContainer, SwitchText, Icon, Sun } from "./styled";
import { selectIsDark, toggleTheme } from "./themeSwitcherSlice";

export const ThemeSwitcher = () => {
    const dispatch = useDispatch();
    const isDark = useSelector(selectIsDark);
    console.log(`isDark in ThemeSwitcher: ${isDark}`)
    return (
        <SwitchContainer onClick={() => dispatch(toggleTheme())}>
            <SwitchText>DARK MODE {isDark ? "on" : "off"} </SwitchText>
            <Icon isDark={isDark}>
                <Sun />
            </Icon>
        </SwitchContainer>
    )
};
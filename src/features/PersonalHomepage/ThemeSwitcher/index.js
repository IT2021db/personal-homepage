import { useDispatch, useSelector } from "react-redux";
import { SwitchContainer, SwitchText,Switcher, SwitchIcon, IconPicture } from "./styled";
import { selectIsDark, toggleTheme } from "./themeSwitcherSlice";

export const ThemeSwitcher = () => {
    const dispatch = useDispatch();
    const isDark = useSelector(selectIsDark);
 
    return (
        <SwitchContainer onClick={() => dispatch(toggleTheme())}>
            <SwitchText>DARK MODE {isDark ? "on" : "off"} </SwitchText>
            <SwitchIcon >
                <Switcher isDark={isDark}>
                    <IconPicture />
                </Switcher>
            </SwitchIcon>
        </SwitchContainer>
    )
};
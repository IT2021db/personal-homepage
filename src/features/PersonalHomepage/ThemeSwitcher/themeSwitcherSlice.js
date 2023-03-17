import { createSlice } from "@reduxjs/toolkit";
import {getIsDarkFromLocalStorage}from "./themeLocalStorage";

const themeSwitcherSlice = createSlice({
    name: "theme",
    initialState: {
        isDark: getIsDarkFromLocalStorage(),
    },
    reducers: {
        toggleTheme: state => {
            state.isDark = !state.isDark;
        },
    }
});

export const { toggleTheme } = themeSwitcherSlice.actions;

const selectThemeState = state => state.theme;
export const selectIsDark = state =>selectThemeState(state).isDark;

export default themeSwitcherSlice.reducer;


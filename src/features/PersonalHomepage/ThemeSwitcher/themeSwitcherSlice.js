import { createSlice } from "@reduxjs/toolkit";

const themeSwitcherSlice = createSlice({
    name: "theme",
    initialState: {
        isDark: false,
    },
    reducers: {
        toggleTheme: state => {
            state.isDark = !state.isDark;
        },
    }
});

export const { toggleTheme } = themeSwitcherSlice.actions;

const selectThemeState = state => state.theme;
export const selectIsDark = state => state.theme.isDark;


//export const selectIsDark = state => selectThemeState(state).isDark;
//export const selectIsDark = state => selectThemeState(state).isDark;

export default themeSwitcherSlice.reducer;


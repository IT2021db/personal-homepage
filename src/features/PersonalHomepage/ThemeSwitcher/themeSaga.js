import { takeLatest, call, select } from "redux-saga/effects";
import { saveIsDarkInLocalStorage } from "./themeLocalStorage";
import { selectIsDark, toggleTheme } from "./themeSwitcherSlice";

function* saveIsDarkInLocalStorageHandler(){
    const isDark=yield select (selectIsDark);
    yield call (saveIsDarkInLocalStorage, isDark);
}

export function* themeSaga(){
    yield takeLatest(toggleTheme.type, saveIsDarkInLocalStorageHandler );
};
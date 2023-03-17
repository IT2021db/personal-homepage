const localStorageKey="isDark";

export const saveIsDarkInLocalStorage=isDark=>localStorage.setItem(localStorageKey, JSON.stringify(isDark));

export const getIsDarkFromLocalStorage=()=>JSON.parse(localStorage.getItem(localStorageKey)||false);
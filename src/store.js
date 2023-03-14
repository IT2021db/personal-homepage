import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import homepageReducer from "./features/PersonalHomepage/homepageSlice";
import toggleTheme from "./features/PersonalHomepage/ThemeSwitcher/themeSwitcherSlice";
import { watchHomepageSaga } from "./features/PersonalHomepage/homepageSaga";
//import { getRepos } from "../../features/PersonalHomepage/getRepos";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        homepage: homepageReducer,
        theme: toggleTheme
    },
    middleware: [sagaMiddleware],
});

//getRepos().then(ZMIENNA => console.log(ZMIENNA));

sagaMiddleware.run(watchHomepageSaga)
export default store;
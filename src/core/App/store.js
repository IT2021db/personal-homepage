import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import homepageReducer from "../../features/PersonalHomepage/homepageSlice";
import { watchHomepageSaga } from "../../features/PersonalHomepage/homepageSaga";
//import { getRepos } from "../../features/PersonalHomepage/getRepos";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        homepage: homepageReducer
    },
    middleware: [sagaMiddleware],
});

//getRepos().then(ZMIENNA => console.log(ZMIENNA));

sagaMiddleware.run(watchHomepageSaga)
export default store;
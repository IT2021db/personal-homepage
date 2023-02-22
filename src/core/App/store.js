import { configureStore } from "@reduxjs/toolkit";
import homepageReducer from "../../features/PersonalHomepage/homepageSlice";
import createSagaMiddleware from "redux-saga";
import { watchHomepageSaga } from "../../features/PersonalHomepage/homepageSaga";
import rootSaga from "../../rootSaga";
import { homepageSaga } from "../../features/PersonalHomepage/homepageSaga"
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
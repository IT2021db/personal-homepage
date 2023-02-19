import { configureStore } from "@reduxjs/toolkit";
import homepageReducer from "../../features/PersonalHomepage/homepageSlice";

const store = configureStore({
    reducer:{
        homepage: homepageReducer
    }

});
export default store;
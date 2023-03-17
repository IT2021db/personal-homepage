import { all } from "redux-saga/effects";
import { themeSaga } from "../../features/PersonalHomepage/ThemeSwitcher/themeSaga";
import { homepageSaga } from "../../features/PersonalHomepage/homepageSaga";

export default function* rootSaga() {
    yield all([
        themeSaga(),
        homepageSaga(),
    ]);
};

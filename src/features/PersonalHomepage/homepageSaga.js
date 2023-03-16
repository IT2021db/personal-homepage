import { delay, call, put, takeLatest } from "redux-saga/effects";

import { getRepos } from "./getRepos";
import { fetchRepos, fetchReposSuccess, fetchReposError } from "./homepageSlice";

function* fetchReposHandler() {
    try {
        yield delay(1000);
        const repos = yield call(getRepos);
        yield put(fetchReposSuccess(repos));
            
    } catch (error) {
        yield put(fetchReposError());
    }
}

export function* watchHomepageSaga() {
    yield takeLatest(fetchRepos.type, fetchReposHandler);
}


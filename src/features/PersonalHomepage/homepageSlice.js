import { createSlice } from "@reduxjs/toolkit";

const homepageSlice = createSlice({
    name: "homepage",
    initialState: {
        repos: [],
        status: "loading"
    },
    reducers: {
        fetchRepos: state => {
            state.status = "loading";
        },
        fetchReposSuccess: (state, { payload: repo }) => {
            state.status = "success";
            state.repos = repo;
        },
        fetchReposError: state => {
            state.status = "error";
        },
    },
});

const selecthomepageSlice = state => state.homepage;
export const selectRepos = state => selecthomepageSlice(state).repos;
export const { fetchRepos, fetchReposSuccess, fetchReposError } = homepageSlice.actions;

export default homepageSlice.reducer;
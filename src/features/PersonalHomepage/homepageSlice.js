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

export const { fetchRepos, fetchReposSuccess, fetchReposError } = homepageSlice.actions;

const selecthomepageSlice = state => state.homepage;
export const selectRepos = state => selecthomepageSlice(state).repos;
export const selectReposState = state => selecthomepageSlice(state).status;

export default homepageSlice.reducer;
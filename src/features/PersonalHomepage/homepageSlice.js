import { createSlice } from "@reduxjs/toolkit";

const homepageSlice = ({
    name: "externalRepos",
    initialState: {
        repos: [],
        staus: "loading"
    },
    rducers: {
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
const selectExternalReposSlice = state => state.externalRepos;

export const selectRepos = state => selectExternalReposSlice(state).repos;
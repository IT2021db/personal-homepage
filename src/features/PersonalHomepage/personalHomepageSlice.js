import { createSlice } from "@redux/toolkit";

const personalHomePageSlice = createSlice({
    name: "personalHomepage",
    initialState: {
        repositories: null,
        status: "initial",

    },
    reducers: {
        fetchRepositories: () => ({
            status: "loading",
            repositories: null,
        }),
        fetchRepositoriesSuccess: (_, { payload: repositories }) => ({
            status: "success",
            repositories,
        }),
        fetchRepositoriesError: () => ({
            status: "error",
            repositories: null,
        }),
    },
});

export const {
    fetchRepositories,
    fetchRepositoriesSuccess,
    fetchRepositoriesError,
} = personalHomePageSlice.actions;

const selectPersonalHomePageState = state => state.personalHomePageState;

export const selectrepositories = state => selectPersonalHomePageState(state).repositories;
export const selectRepositoriesStatus = state => selectPersonalHomePageState(state).status;

export default personalHomePageSlice.reducer;
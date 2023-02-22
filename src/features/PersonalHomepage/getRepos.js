export const getRepos = async () => {
    const response = await fetch("http://api.github.com/users/IT2021db/repos");
    const repos = await response.json();
    return repos;
};
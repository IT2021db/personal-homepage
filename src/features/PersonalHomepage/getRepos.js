export const getRepos = async () => {
    const response = await fetch("https://api.github.com/users/IT2021db/repos");

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return await response.json();
};
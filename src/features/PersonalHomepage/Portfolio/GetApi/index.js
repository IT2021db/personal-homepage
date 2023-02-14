import React from "react";

export const GetApi = () => {
  (async () => {
    const res = await fetch("https://api.github.com/users/IT2021db/repos");
    const repo = await res.json();
    const recentRepo = repo[2].name;

    console.log(repo[2].id);
    console.log(repo[2].name);
    console.log(repo[2].html_url);
    console.log(repo[2].description);
    console.log(repo[2].owner.login);
  })();
 
};

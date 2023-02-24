const APIURL = "https://api.github.com";

async function getUserGithubInformations(username) {
  const respUser = await fetch(APIURL + "/users/" + username);
  const respDataUser = await respUser.json();

  const respRepos = await fetch(APIURL + "/users/" + username + "/repos?per_page=100");
  const respDataRepos = await respRepos.json();

  let languages = respDataRepos.map(repo => repo.language)
      languages = languages.filter((item, index) => (languages.indexOf(item) === index && item));

  const filteredRepos = respDataRepos.sort((repoA, repoB) => (
    parseInt(repoB.stargazers_count) - parseInt(repoA.stargazers_count)
  )).slice(0, 10);

  return {user: respDataUser, repos: filteredRepos, languages: languages };
}
const repositoriesContainer = document.querySelector("#content .repositories--content");

function loadProfileCard(user){
  const imageProfileTag = document.getElementById('profile-image');
  const nameProfileTag = document.getElementById('profile-name');
  const bioProfileTag = document.getElementById('profile-bio');

  imageProfileTag.src = user.avatar_url;
  nameProfileTag.innerText = user.name;
  bioProfileTag.innerText = user.bio;
}

function loadContactCard(user){
  const contactLocation = document.getElementById("contact-location");
  const contactWork = document.getElementById("contact-work");
  const contactGithub = document.getElementById("contact-github");
  const contactSite = document.getElementById("contact-site");

  contactLocation.innerText = user.location;
  contactWork.innerText = user.company;
  contactGithub.innerText = user.login;
  contactSite.innerText = user.blog;
}

function loadLanguages(languages){
  const languagesContainer = document.getElementById('languages');
  languagesContainer.innerHTML = languages.map(language => `<li> ${language} </li>`).join('');
}

function loadRepositories(repos){
  const strContent = repos.map(repo => {
    return `
      <a href="${repo.html_url}" target="_blank" class="card repositories--content--card">
        <h4 class="repositories--content--card--title"><img src="./assets/folder.svg"/><span>${repo.full_name}</span></h4>
        <p class="repositories--content--card--description">${repo.description}</p>
        <div class="repositories--content--card--informations">
          <div>
            <span> <img src="./assets/star.svg" /> ${repo.stargazers_count} </span>
            <span> <img src="./assets/git-branch.svg" /> ${repo.forks_count} </span>
          </div>
          <span> ${repo.language || ''} </span>
        </div>
      </a>
    `;
  }).join('');

  const repositoriesCardsContainer = document.getElementById("repositories--cards")
  repositoriesCardsContainer.innerHTML = strContent;
}

(async () => {
  const { user, repos, languages } = await getUserGithubInformations('ernanej');

  loadProfileCard(user);
  loadLanguages(languages)
  loadContactCard(user);
  loadRepositories(repos);
})();
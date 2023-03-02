function handleColor(){
  const inputColor = document.getElementById("color");
  inputColor.addEventListener("input", function(){
    const card = document.getElementById("card");
    card.style.backgroundColor = inputColor.value;
  });
}

function handleUser(){
  const inputUsername = document.getElementById("username");

  let timer = null;
  inputUsername.addEventListener("input", function(){
    if(timer){ clearTimeout(timer); timer = null; }

    timer = setTimeout(() => getDataAndFillCard(inputUsername.value.toLowerCase()), 350);
  });
}

function getDataAndFillCard(username){
  const url = `https://api.github.com/users/${username}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const img = document.querySelector("img.card--avatar");
      const username = document.querySelector("a.card--username");
      const followers = document.querySelector("div.card--followers--count");
      const following = document.querySelector("div.card--following--count");
      const repos = document.querySelector("div.card--repository--count");
      const company = document.querySelector("div.card--company");
      const location = document.querySelector("div.card--location");
      
      [followers, following, repos, company, location].forEach(el => el.style.opacity = 0);

      setTimeout(() => {
        img.src = data.avatar_url;
        blobAvatarImage(img)
        username.innerHTML = '@' + data.login;
        username.href = data.html_url;
        followers.innerHTML = data.followers;
        following.innerHTML = data.following;
        repos.innerHTML = data.public_repos;
        company.innerHTML = data.company;
        location.innerHTML = data.location.split(',').slice(-1);
  
        [username, followers, following, repos, company, location].forEach(el => el.style.opacity = 1);
      }, 500);
    });
}

async function blobAvatarImage(img){
  await fetch(img.src).then(r => r.blob()).then(data => {
    const file = new File([data], "temp-image", {type: 'image/png', lastModified: Date.now()});
    img.src = URL.createObjectURL(file);
  });
}

function shareRocketcard(){
  const button = document.getElementById("share-rocketcard");
  button.addEventListener("click", () => {
    const card = document.getElementById("card");
    html2canvas(card).then(canvas => {
      const url = canvas.toDataURL("image/png");

      fetch(url)
        .then((response) => response.blob())
        .then(blob => {
          const file = new File([blob], "rocketcard.png", {type: 'image/png', lastModified: Date.now });
          const dataToShare = {
            title: 'Rocketcard',
            text: 'Rocketcard',
            url: window.location.href,
          }

          if (navigator.share !== undefined && navigator.canShare) {
            if(navigator.canShare({ files: [file] })) dataToShare['files'] = [file];

            navigator.share(dataToShare)
              .then(() => true)
              .catch((error) => console.error('Error sharing', error));
          }else{
            navigator.clipboard.writeText(dataToShare.url);
            alert("Conteúdo copiado para a àrea de transferência.");
          }
        });
    });
  });
};

function handleDownloadCard(){
  const btnDownload = document.getElementById("download-rocketcard");
  btnDownload.addEventListener("click", function(){
    const card = document.getElementById("card");
    html2canvas(card).then(canvas => {
      const link = document.createElement('a');
      link.download = 'rocketcard.png';
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  });
}

function init(){
  handleColor();
  handleUser();
  getDataAndFillCard('ErnaneJ');
  handleDownloadCard();
  shareRocketcard();
}

init();
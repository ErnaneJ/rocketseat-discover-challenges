import { API_KEY, BASE_URL, IMG_URL, language } from './assets/api.js'

(() => {
  const buttonFild = document.getElementById('find-movie');

  buttonFild.addEventListener('click', async () => {
    const movieContainer = document.querySelector('.movie');
    const moovieId = Math.floor(Math.random() * 500);
    const response = await fetch(`${BASE_URL}${moovieId}?${API_KEY}&${language}`);
    
    if(buttonFild.disabled) return;

    buttonFild.disabled = true;
    buttonFild.querySelector('span').innerHTML = 'Procurando...';

    const data = await response.json();

    movieContainer.style.opacity = 0;
    setTimeout(() => manipulationOfHTML(data.status_code !== 34, data), 500);
  });
})();

function manipulationOfHTML(found, data){
  const buttonFild = document.getElementById('find-movie');
  const movieContainer = document.querySelector('.movie');
  const movieImage = document.querySelector('.movie-image');
  const moovieTitle = document.querySelector('.movie-title');
  const moovieDescription = document.querySelector('.movie-description');

  

  if(found){
    movieImage.src = `${IMG_URL}${data.poster_path}`;
    moovieTitle.innerHTML = data.title;
    movieContainer.style.alignItems = 'flex-start';
    moovieDescription.style.display = 'inline-block';
    moovieDescription.innerHTML = data.overview || 'Ops, não encontramos nenhuma descrição para esse filme. 😢';
  }else{
    movieImage.src = './assets/poster.png';
    moovieTitle.innerHTML = 'Ops, hoje não é dia de assistir filme. Bora codar! 🚀';
    movieContainer.style.alignItems = 'center';
    moovieDescription.style.display = 'none';
  }

  movieContainer.style.display = 'flex';
  movieContainer.style.opacity = 1;
  buttonFild.disabled = false;
  buttonFild.querySelector('span').innerHTML = 'Encontrar filme';
}
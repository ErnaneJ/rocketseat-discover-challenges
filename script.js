const cards = [
  {permalink: 'portfolio', img: "./assets/banner-portfolio.png", title: 'Desafio "Portfolio"', description: 'Neste desafio você poderá criar uma página web para que seja seu portfolio e currículo. Utilizando HTML e CSS.', badges: {levelText: "Iniciante", levelImage: "./assets/iniciante.svg", tags: ['HTML', "CSS"]}},
  {permalink: 'social-tree', img: "./assets/banner-social-tree.png", title: 'Desafio "Social Tree"', description: 'Neste desafio você deve criar uma página com uma lista de links (menu) que pode ser usada em perfis de redes sociais para direcionar o usuário para o local escolhido. Utilizando HTML e CSS.', badges: {levelText: "Iniciante", levelImage: "./assets/iniciante.svg", tags: ['HTML', "CSS"]}},
  {permalink: 'rocket-news', img: "./assets/banner-rocket-news.webp", title: 'Desafio "RocketNews"', description: 'Desenvolva uma página web simples utilizando HTML e CSS que servirá no futuro para captação de leads ou inscrição em newsletter.', badges: {levelText: "Iniciante", levelImage: "./assets/iniciante.svg", tags: ['HTML', "CSS"]}},
  {permalink: 'html', img: "./assets/banner-html-challenge.webp", title: 'Desafios HTML', description: 'Essa é uma série de desafios básicos para que você possa praticar seus conhecimentos em HTML. Teste suas habilidades nas tags HTML mais utilizadas no dia a dia do Desenvolvimento Web.', badges: {levelText: "Iniciante", levelImage: "./assets/iniciante.svg", tags: ['HTML']}},
  {permalink: 'recipe-page', img: "./assets/banner-cookbook.webp", title: 'Desafio "Página de Receita"', description: 'Nesse desafio você deverá criar uma página web de uma receita com título, imagem, lista de ingredientes e modo de preparo. O desafio está dividido em duas partes, no primeiro momento você irá criar a estrutura HTML com as informações da receita e na segunda parte será o momento de adicionar os estilos à página com o CSS.', badges: {levelText: "Iniciante", levelImage: "./assets/iniciante.svg", tags: ['HTML', "CSS"]}},
  {permalink: 'countdown', img: "./assets/banner-countdown.webp", title: 'Desafio "Countdown"', description: 'Neste desafio você deve criar uma página de coming soon (em breve) para o lançamento de um site, produto ou serviço, e na página deve ter um countdown timer (timer de contagem regressiva) informando quanto tempo falta para o lançamento. Utilizando HTML, CSS e Javscript.', badges: {levelText: "Intermediário", levelImage: "./assets/intermediario.svg", tags: ['HTML', 'CSS', 'Javascript']}},
  {permalink: 'sidebar', img: "./assets/banner-sidebar.webp", title: 'Desafio "Sidebar"', description: 'Neste desafio você deve criar uma sidebar. Quando o usuário clicar no ícone do menu isso deve fazer com que o estado da sidebar mude entre "aberto", mostrando ícones e texto e "fechado", mostrando apenas os ícones. Utilizando HTML, CSS e Javascript.', badges: {levelText: "Intermediário", levelImage: "./assets/intermediario.svg", tags: ['HTML', 'CSS', 'Javascript']}},
  {permalink: 'theme-switcher', img: "./assets/banner-theme-switcher.webp", title: 'Desafio "Theme Switcher"', description: 'Nesse desafio você deverá desenvolver uma página que contenha um toggle para alternar entre o tema dark e light.', badges: {levelText: "Intermediário", levelImage: "./assets/intermediario.svg", tags: ['HTML', 'CSS', 'Javascript']}},	
  {permalink: 'pricing-table', img: "./assets/banner-pricing-table.webp", title: 'Desafio "Pricing Table"', description: 'Neste desafio você vai desenvolver uma página com uma tabela com as opções de preços/planos do produto/serviço.', badges: {levelText: "Intermediário", levelImage: "./assets/intermediario.svg", tags: ['HTML', 'CSS']}},
  {permalink: 'login-form', img: "./assets/banner-login-form-css.webp", title: 'Desafio "Login Form CSS"', description: 'Neste desafio você vai criar um formulário de login.', badges: {levelText: "Intermediário", levelImage: "./assets/intermediario.svg", tags: ['HTML', 'CSS']}},
  {permalink: 'rocket-shoes', img: "./assets/banner-rocket-shoes.webp", title: 'Desafio "RocketShoes"', description: 'Neste desafio você deverá desenvolver um mini e-commerce de calçados esportivos.', badges: {levelText: "Intermediário", levelImage: "./assets/intermediario.svg", tags: ['HTML', 'CSS']}},
  {permalink: 'rocket-blog', img: "./assets/banner-rocket-blog.webp", title: 'Desafio "RocketBlog"', description: 'Neste desafio você irá desenvolver uma homepage para um blog.', badges: {levelText: "Intermediário", levelImage: "./assets/intermediario.svg", tags: ['HTML', 'CSS']}},
  {permalink: 'rocket-coffee', img: "./assets/banner-rocket-coffee.webp", title: 'Desafio "RocketCoffee"', description: 'Neste desafio você deverá desenvolver uma homepage para uma marca de café.', badges: {levelText: "Intermediário", levelImage: "./assets/intermediario.svg", tags: ['HTML', 'CSS', 'Javascript']}},
  {permalink: 'rocket-flix', img: "./assets/banner-rocket-flix.webp", title: 'Desafio "RocketFlix"', description: 'Neste desafio você deverá utilizar a API do themoviedb.org para exibir um filme aleatório sempre que clicar em Encontrar Filme.', badges: {levelText: "Avançado", levelImage: "./assets/avancado.svg", tags: ['HTML', 'CSS', 'Javascript']}},
  {permalink: 'rocket-card', img: "./assets/banner-rocket-card.png", title: 'Desafio "RocketCard"', description: 'Neste desafio você deverá desenvolver um card que traga as informações da API do Github e tenha um botão que altere a cor do fundo do card.', badges: {levelText: "Avançado", levelImage: "./assets/avancado.svg", tags: ['HTML', 'CSS', 'Javascript']}},
  {permalink: 'rocket-nfts', img: "./assets/banner-rocket-nfts.webp", title: 'Desafio "Rocket Nfts"', description: 'Neste desafio você deverá desenvolver uma landing page completa sobre NFTs.', badges: {levelText: "Avançado", levelImage: "./assets/avancado.svg", tags: ['HTML', 'CSS', 'Javascript']}},
];

function buildCard(info){
  return `<a href="./${info.permalink}" class="card" key="${info.permalink}">
            <img class="card--banner" width="100%" src="${info.img}" alt="desafio ${info.title}">
            <h2 class="card--title">${info.title}</h2>
            <p class="card--description">${info.description}</p>
            <div class="card--bages--container">
              <button data-card="${info.permalink}" data-action="prev" style="${info.badges.tags.length >= 3 ? '' : 'display: none;'} padding: 0px; width: 0px;" class="card--bages--button--arrow" type="button"> ⟨ </button>
              <div class="card--badges" id="cardBadges">
                <span class="card--badge">
                  <img src="${info.badges.levelImage}" alt="badge ${info.badges.levelText}">
                  ${info.badges.levelText}
                </span>

                ${info.badges.tags.map(tag => (
                  `<span class="card--badge">${tag}</span>`
                )).join('')}
              </div>
              <button data-card="${info.permalink}" data-action="next" style="${info.badges.tags.length >= 3 ? '' : 'display: none'}"  class="card--bages--button--arrow" type="button"> ⟩ </button>
            </div>
          </div>`;
}

function loadActionButtonArrowCard(){
  const buttons = document.querySelectorAll('.card--bages--button--arrow');

  buttons.forEach(button => {
    button.addEventListener('click', e => {
      e.preventDefault();
      const card = button.dataset.card;
      const action = button.dataset.action;
      const badge = button.parentNode.querySelector('.card--badges');

      const buttonsCard = document.querySelectorAll('a.card[key="'+card+'" ] .card--bages--button--arrow');

      buttonsCard.forEach(button => { 
        button.style.width = '20px';  
        button.style.padding = action === 'prev' ? '0 0 0 .75rem' : '0 .75rem 0 0'
      });
      
      e.target.style.width = '0';
      e.target.style.padding = '0';
      
      if(action === 'prev'){
        badge.scrollTo({ top: 0, left: badge.scrollLeft - 500, behavior: 'smooth' });
      } else {
        badge.scrollTo({ top: 0, left: badge.scrollLeft + 500, behavior: 'smooth' });
      }
    })
  })
}

function loadCards() {
  const cardsContainer = document.getElementById("cardsContainer");
  cardsContainer.innerHTML = cards.map(buildCard).join('');
  loadActionButtonArrowCard();
}

loadCards();
function setActiveBanner(element, bannerIndex){
    const options = document.querySelectorAll('.showcase--tennis-options button');
    options.forEach((option) => {
      option.classList.remove('active');
    });

    element.classList.add('active');

    const activeBannerImg = document.querySelector('.showcase--banner');
    
    activeBannerImg.style.opacity = 0;
    setTimeout(() => {
      activeBannerImg.src = `./assets/tenis-${bannerIndex}-galeria-nbg.png`;
      activeBannerImg.style.opacity = 1;
    }, 300);
}
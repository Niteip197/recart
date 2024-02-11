window.onload = () => {
  setTimeout(() => {
    return loadingOff();
  }, 1000)
}

function loadingOff(){
  let loader = document.getElementById('loaderHolder');
  loader.style.opacity = '0';
  setTimeout(() => {
    loader.style.zIndex = '-50';
    let aboutButton = document.getElementById('aboutButton');
    let portfolioButton = document.getElementById('portfolioButton');
    let servicesButton = document.getElementById('servicesButton');
    let contactsButton = document.getElementById('contactsButton');
    let navigation = document.getElementById('navigationHolder');
    navigation.style.opacity = '1';
    aboutButton.classList.add('revealAbout');
    portfolioButton.classList.add('revealPortfolio');
    servicesButton.classList.add('revealServices');
    contactsButton.classList.add('revealContacts');
    setTimeout(() => {
      aboutButton.classList.remove('revealAbout');
      portfolioButton.classList.remove('revealPortfolio');
      portfolioButton.style.opacity = '1';
      servicesButton.classList.remove('revealServices');
      servicesButton.style.opacity = '1';
      contactsButton.classList.remove('revealContacts');
      contactsButton.style.opacity = '1';
    }, 3700);
    setTimeout(() => {
      let lines = document.getElementById('mainLines');
      let maskLines = document.getElementById('maskLines');
      let logo = document.getElementById('logo');
      logo.style.opacity = '1';
      lines.classList.add('lineReveil');
      setTimeout(() => {
        maskLines.style.opacity = '1';
      }, 700);
    }, 3000);
    siteLoaded();
  }, 1000);
  return;
}

function siteLoaded(){
  return;
}
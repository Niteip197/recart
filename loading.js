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
        setTimeout(() => {
          introStart();
        }, 500);
      }, 700);
    }, 3000);
  }, 1000);
  return;
}

function introStart(){
  let introText1 = document.getElementById('introT1');
  let introText2 = document.getElementById('introT2');
  let introText3 = document.getElementById('introT3');
  let introText4 = document.getElementById('introT4');
  introText1.style.left = '600px';
  setTimeout(() => {
    introText1.style.transform = 'scale(80%) translateX(41.25px) translateY(-35px)';
    introText1.style.opacity = '0.8';
    introText2.style.bottom = '170px'
    setTimeout(() => {
      introText1.style.transform = 'scale(70%) translateX(88.35px) translateY(-77px)';
      introText1.style.opacity = '0.6';
      introText2.style.transform = 'scale(80%) translateX(41.25px) translateY(-35px)';
      introText2.style.opacity = '0.8';
      introText3.style.bottom = '170px'
      setTimeout(() => {
        introText1.style.transform = 'scale(60%) translateX(143.35px) translateY(-126px)';
        introText1.style.opacity = '0.4';
        introText2.style.transform = 'scale(70%) translateX(88.35px) translateY(-77px)';
        introText2.style.opacity = '0.5';
        introText3.style.transform = 'scale(80%) translateX(41.25px) translateY(-35px)';
        introText3.style.opacity = '0.6';
        introText4.style.bottom = '170px';
        setTimeout(() => {
          introText1.style.transform = 'scale(60%) translateX(1950px) translateY(-126px)';
          introText1.style.transition = 'all 2s cubic-bezier(.79,0,.76,.79)';
          introText2.style.transform = 'scale(70%) translateX(1850px) translateY(-77px)';
          introText2.style.transition = 'all 2s cubic-bezier(.79,0,.76,.79)';
          introText3.style.transform = 'scale(80%) translateX(1850px) translateY(-35px)';
          introText3.style.transition = 'all 2s cubic-bezier(.79,0,.76,.79)';
        }, 2000);
      }, 2500);
    }, 2500);
  }, 2500);
  return
}
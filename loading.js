window.onload = () => {
  setTimeout(() => {
    return loadingOff();
  }, 1000)
}

function loadingOff(){
  let loader = document.getElementById('loaderHolder');
  loader.style.opacity = '0';
  setTimeout(() => {
    let background = document.getElementById('backgroundHolder');
    background.style.opacity = '1';
    loader.style.zIndex = '-50';
    setTimeout(() => {
      let lines = document.getElementById('linesHolder');
      lines.style.opacity = '1';
    }, 500);
    setTimeout(() => {
      let navigation = document.getElementById('navigationHolder');
      navigation.style.opacity = '1';
    }, 1000);
    siteLoaded();
  }, 1000);
  return;
}

function siteLoaded(){
  return;
}
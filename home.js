function setHeight(){
  var body = document.body,
  html = document.documentElement;

  var docheight = Math.max( body.scrollHeight, body.offsetHeight, 
                     html.clientHeight, html.scrollHeight, html.offsetHeight );
  const root = document.querySelector(':root');
  root.style.setProperty('--height', `${docheight}px`)
  let height = getComputedStyle(root).getPropertyValue('--height')
  console.log(height);
};

window.addEventListener('DOMContentLoaded', setHeight);

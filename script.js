
function hideMenu(){
  if(document.querySelector('#nav-button').checked){
    document.querySelector('#nav-button').checked = false;
  }
  }
document.querySelector('.home-link')
  .addEventListener("click", hideMenu);

document.querySelector('.about-link')
  .addEventListener("click", hideMenu);

document.querySelector('.skills-link')
  .addEventListener("click", hideMenu);

document.querySelector('.portfolio-link')
  .addEventListener("click", hideMenu);

document.querySelector('.contacts-link')
  .addEventListener("click", hideMenu);

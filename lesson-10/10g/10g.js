function istoggled(selector){
  const chaecking = document.querySelector(selector)
  if (!chaecking.classList.contains('is-toggled')){
    turnoffistoggled();
  chaecking.classList.add('is-toggled');
    
  }else{
    chaecking.classList.remove('is-toggled')
  }
}
function turnoffistoggled(){
  const istooggled = document.querySelector('.is-toggled');
  if(istooggled){
    istooggled.classList.remove('is-toggled');

  }
}
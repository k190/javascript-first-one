/*const chaeckifClass = document.querySelector('.js-button');
console.log(chaeckifClass.classList.contains('js-button'));
function istoggled(){
  const chaecking = document.querySelector('.toggle-button')
  const chaecked =chaecking.classList.contains('is-toggled')
 
  if (chaecking.classList.contains('is-toggled')){
    chaecking.classList.remove('is-toggled');
  }else{
    chaecking.classList.add('is-toggled');
  }

}function music(){
  const chaecking = document.querySelector('.music-button')
  const chaecked =chaecking.classList.contains('is-toggled')
 
  if (chaecking.classList.contains('is-toggled')){
    chaecking.classList.remove('is-toggled');
  }else{
    chaecking.classList.add('is-toggled');
  }

}function tech(){
  const chaecking = document.querySelector('.tech-button')
  const chaecked =chaecking.classList.contains('is-toggled')
 
  if (chaecking.classList.contains('is-toggled')){
    chaecking.classList.remove('is-toggled');
  }else{
    chaecking.classList.add('is-toggled');
  }
}*/
function istoggled(selector){
  const chaecking = document.querySelector(selector)
 
 
  if (chaecking.classList.contains('is-toggled')){
  
    chaecking.classList.remove('is-toggled')
  }else{
    

    turnoffistoggled();
    chaecking.classList.add('is-toggled');
  }
}
function turnoffistoggled(){
  const istooggled = document.querySelector('.is-toggled');
  if(istooggled){
    istooggled.classList.remove('is-toggled');

  }
}
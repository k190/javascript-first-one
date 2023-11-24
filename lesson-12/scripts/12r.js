let score=JSON.parse(localStorage.getItem('score'))||  {
  wins:0,
  losses:0,
  ties:0
};
updateScoreElement();


/*
if(!score 
{
score= {
  wins:0,
  losses:0,
  ties:0

}
};*/
let isAutoplaying = false;
let intervalId;
//const autoPlay = () => {

//};
document.querySelector('.js-rock-button').addEventListener('click',()=>{
  playGame('rock')
});

document.querySelector('.js-paper-button').addEventListener('click',()=>{
  playGame('paper')
});

document.querySelector('.js-scissors-button').addEventListener('click',()=>{
  playGame('scissors')
});
document.querySelector('.js-reset-score-button').addEventListener('click',()=>{
   // <div>are you sure you want to resete the score?</div>
    resetButton()
   
})

document.body.addEventListener('keydown',(event)=>{
  if(event.key=== 'r'){
    playGame('rock')
  }else if(event.key==='p'){
    playGame('paper')
  }else if(event.key==='s'){
    playGame('scissors')
  }else if(event.key==='a'){
    autoPlay()
  }else if(event.key==='Backspace'){
    resetButton()
  }
})
function autoPlay(){

  if(!isAutoplaying){
   intervalId = setInterval(()=>{
    const playerMove = pickComputerMove();
    playGame(playerMove);
  },1000);
  document.querySelector('.js-auto-play-button').innerHTML='Stop Playing'
  isAutoplaying = true;

}else{
  clearInterval(intervalId);
  document.querySelector('.js-auto-play-button').innerHTML='Auto Play'
  isAutoplaying = false;
}
}
function resetButton(){
    document.querySelector('.js-reset-confirmation').innerHTML=`Are you sure you want to reset the scote?<button class="js-yes-reset-button">yes</button>
    <button class="js-no-reset-button">No</button>`

    document.querySelector('.js-yes-reset-button').addEventListener('click',()=>{
        resetScore();
        hideResetMessage();

    })
    document.querySelector('.js-no-reset-button').addEventListener('click',()=>{
        hideResetMessage();
    })
}
function hideResetMessage(){
    document.querySelector('.js-reset-confirmation').innerHTML='';
}
function resetScore(){
    
    score.wins=0;
    score.losses=0;
    score.ties=0;
    localStorage.removeItem('score');
    updateScoreElement() ;
}

function playGame(playerMove){
const compurerMove=pickComputerMove();
let result='';
if (playerMove==='scissors') {
  if(compurerMove=== 'scissors'){
  result='Tie.';
  } else if (compurerMove==='rock'){
  result= 'you lose.';
  }else if (compurerMove=== 'paper'){
  result= 'you win.';
  }
}else if(playerMove==='paper'){
      if(compurerMove=== 'paper'){
    result='Tie.';}
  else if (compurerMove==='scissors'){
    result= 'you lose.';}
  else if (compurerMove=== 'rock'){
      result= 'you win.'; }
  


} else if(playerMove==='rock'){
    if(compurerMove=== 'rock'){
    result='Tie.';}
  else if (compurerMove==='paper'){
    result= 'you lose.';}
  else if (compurerMove=== 'scissors'){
    result= 'you win.';
  }
  

}
if(result==='you win.'){
  score.wins+=1;
}else if(result==='you lose.'){
  score.losses+=1;
}else if(result=== 'Tie.'){
  score.ties+=1;
}

localStorage.setItem('score',JSON.stringify(score));

updateScoreElement();
document.querySelector('.js-result').innerHTML=result;
document.querySelector('.js-moves').innerHTML=` you 
<img src="images/${playerMove}-emoji.png"
class="move-icon">
<img src="images/${compurerMove}-emoji.png"
class="move-icon">computer
`;


}

function updateScoreElement(){
document.querySelector('.js-score')
  .innerHTML= `wins:${score.wins},losses:${score.losses},Ties:${score.ties}`;
}
function pickComputerMove(){
const randomNumber = Math.random();

let compurerMove = '';


if(randomNumber>=0 && randomNumber<1/3){
compurerMove = 'rock';
}
else if (randomNumber >= 1/3 && randomNumber<2/3){
compurerMove ='paper';}
else if (randomNumber >= 2/3 && randomNumber<1){
compurerMove = 'scissors';
}
return compurerMove;



}
document.querySelector('.js-auto-play-button').addEventListener('click',()=>{

    autoPlay();
})
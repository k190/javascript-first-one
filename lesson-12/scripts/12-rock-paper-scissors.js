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

document.body.addEventListener('keydown',(event)=>{
  if(event.key=== 'r'){
    playGame('rock')
  }else if(event.key==='p'){
    playGame('paper')
  }else if(event.key==='s'){
    playGame('scissors')
  }
})
function autoPlay(){

  if(!isAutoplaying){
   intervalId = setInterval(()=>{
    const playerMove = pickComputerMove();
    playGame(playerMove);
  },1000);
  isAutoplaying = true;

}else{
  clearInterval(intervalId);
  isAutoplaying = false;
}
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
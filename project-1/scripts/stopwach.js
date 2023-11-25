let iscounting = false;
let intervalId;
const buttonStart=document.querySelector('.js-Start-button')
const buttonReset=document.querySelector('.js-reset-button')
const displayTime=document.querySelector('.js-time')
let centisecond = 1
let second = 0;
let minute = 0;
buttonStart.classList.add('resume-button');


buttonStart.addEventListener('click',()=>{
    if(!iscounting){
        intervalId=setInterval(()=>{
          
            //console.log(time)
            centisecond++
            
           if(centisecond===100){
              second++
              centisecond=0
            }else if(second===60){
              minute++
              second=0
            }

             const formattedTime = displayTime.innerHTML=`${minute.toString().padStart(2,'0')}:${second.toString().padStart(2,'0') }. ${centisecond.toString().padStart(2,'0')}`;

           
        },10);
        buttonStart.innerHTML='Stop';
        buttonStart.classList.remove('resume-button')
        buttonStart.classList.add('stop-button')
        iscounting=true;
        buttonReset.innerHTML='Lap';
     }else if(iscounting){
       clearInterval(intervalId);
        buttonStart.innerHTML='Resume';
        buttonStart.classList.remove('stop-button');
        buttonStart.classList.add('resume-button');


        iscounting=false;
        buttonReset.innerHTML='Reset';
        buttonReset.classList.add('reset-button');
     }

})
buttonReset.addEventListener('click',()=>{
    centisecond=0;
    buttonStart.innerHTML='Start';
    buttonStart.classList.remove('stop-button')
    buttonStart.classList.add('resume-button');
   
    buttonReset.innerHTML='Lap';
    displayTime.innerHTML='00:00.00';                                      
})

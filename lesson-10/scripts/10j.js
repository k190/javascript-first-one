let calculation=localStorage.getItem('calculation')||'';

        function updateCalculation(value){
          calculation+=value;
          desplayingOnPage()
          localStorage.setItem('calculation',calculation);
        }
        function desplayingOnPage(){
          const element12=calculation 
          document.querySelector('.js-desplaying').innerHTML=element12;
      }desplayingOnPage();
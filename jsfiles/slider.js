 const toggle= document.getElementById('hhh');
    const slider = document.getElementById('leftbox');

    document.onclick=function(e){
      if(e.target.id !== 'leftbox' && e.target.id !== 'hhh' && e.target.id !== 'Colormod'   && e.target.id !=='slidertop' && e.target.id!=='middleslider'){



 toggle.classList.remove('active');slider.classList.remove('active');
      }
    }

      toggle.onclick=function(){
      toggle.classList.toggle('active');slider.classList.toggle('active');
     
    }
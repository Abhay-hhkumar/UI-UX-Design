 function handleRadioChange(event) {
      var selectedValue = event.target.value;
      
      if(selectedValue=="white"){
        bosy.classList.add('active');
        
        //to dhange heading;
        console.log("white")
      }
      else{
        bosy.classList.remove('active')
        console.log("dark")
      }

    }

    var radios = document.getElementsByName('mode');
    var bosy=document.getElementById('body');
    for (var i = 0; i < radios.length; i++) {
      radios[i].addEventListener('change', handleRadioChange);
    }
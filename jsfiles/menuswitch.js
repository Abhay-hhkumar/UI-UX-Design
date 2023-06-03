 //default
		var width = window.innerWidth;
        var height = window.innerHeight;
        
                // cnahge menu on resize window
		let mode1=document.getElementById('Colormod');
		let menu = document.getElementById('hhh');

                     //default
		if (height > width) {  mode1.style.display="none";
                               menu.style.display="block";
                            } else {mode1.style.display="block";menu.style.display="none"}

                     //onresize window dynamicaly
		window.addEventListener('resize',switchmode);

		function switchmode(){
			// Check if the screen is in portrait mode
            if (window.matchMedia("(orientation: portrait)").matches) {
                      mode1.style.display="none";menu.style.display="block";
             } else { mode1.style.display="block";menu.style.display="none"}}

    let load=document.getElementById('loading');

	        	window.addEventListener("load",function(){

	        		load.style.display="none";
	        	});




    function loadIframe() {
     
    let iframe = document.getElementById('framemain');
    let loadbox=document.getElementById('loading');

    // loading animation is already display:none (when we had loaded our page at first)
    loadbox.style.display="block";
    iframe.addEventListener('load',function(){
      loadbox.style.display="none";
    });

  }


// get data from local storage

                var head=document.getElementById('heading');

                window.addEventListener('load', () => {

                const framelink = localStorage.getItem('iframelink');

                const iddata=localStorage.getItem('iddata');
 
                document.getElementById('framemain').src = framelink;
   



                // change background color of list
                const navItems = document.querySelectorAll('.anc');

	            // remove active class from active list
                navItems.forEach(navItem => {  navItem.classList.remove('active');  });

                // add active class which was clicked
                navItems.forEach( navItem => {   
                                                  if(navItem.id==iddata){  

                                                   navItem.classList.add('active'); 

                                                   // change heading also

                                                   head.textContent=navItem.textContent;}  })

                 });
   

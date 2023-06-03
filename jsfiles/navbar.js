const navItems = document.querySelectorAll('.anc');
	var head=document.getElementById('heading');
	
	var head=document.getElementById('heading');
  navItems.forEach(navItem => {
    navItem.addEventListener('click', () => {
        navItems.forEach(navItem => {
            navItem.classList.remove('active');
        });
        navItem.classList.add('active');
        //to dhange heading;
        head.textContent=navItem.textContent;
       


    });

});


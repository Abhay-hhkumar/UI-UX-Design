// Get all the link elements
                  var links = document.getElementsByClassName('linkstransfer');

                 // Attach click event listener to each link
                 for (var i = 0; i < links.length; i++) {

                  links[i].addEventListener('click', function(event){

                 // Get the ID of the clicked link
                  var linkID = this.id;


                    // to set into local storage
                    localStorage.setItem("iddata", linkID); 
                      });}


                    // set link in local storage
                   function linktransfer(item){localStorage.setItem("iframelink", item);}
function showLoading() {
      document.getElementById('loading').style.display = 'block';
    }

    function hideLoading() {
      document.getElementById('loading').style.display = 'none';
    }
 
    function loadIframe() {
      showLoading();
      var iframe = document.getElementById('framemain');

      var body = document.getElementById('body');
      iframe.onload = function() {
        hideLoading();       
      };
    }
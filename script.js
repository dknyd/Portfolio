window.addEventListener('load', function() {
    var navbar = document.querySelector('.navbar');
    navbar.style.visibility = 'visible';
    setTimeout(function() {
      navbar.style.opacity = '1';
    }, 100);
  });
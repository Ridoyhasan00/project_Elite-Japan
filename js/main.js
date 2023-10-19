
//toggler
'use strict';

document.querySelector('.toggle')
        .addEventListener('click', function() {
  this.classList.toggle('activate');
});

//banner_carousel

$(document).ready(function(){
  $(".banner_carousel").owlCarousel({
      items:1,
      loop:true,
      autoplay:true,
      autoplayTimeout:5000,
      smartSpeed:1000,
      autoplayHoverPause:true, 
  });
  
});

//wow
new WOW().init();




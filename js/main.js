'use strict';

document.addEventListener('DOMContentLoaded', function() {
  
  const scrollUpBtn = document.querySelector('.longread__nav-button');

  window.addEventListener('scroll', () => {
    if(scrollY < 800) {
      scrollUpBtn.style.display = 'none';
    } else {
      scrollUpBtn.style.display = 'flex';
    }
  });


})




//menu 
var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function() {
hamburger.classList.toggle("is-active");
});

const typed = new Typed(".typed",{
    strings: ['Front End Developer.','Web Designer.'],
  typeSpeed: 75,
  startDelay: 1000,
  backDelay:3000,
  shuffle: false,
  backSpeed:20,
  loop: true,
  loopCount: false,
});
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}


/* Fade-in effect */
/* This script and function controls our fade in effect */
document.body.className += ' fade-out';
$(function() {
  $('body').removeClass('fade-out');
});

/* Slideshow Functions */
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) {slideIndex = 1;}
  if (n < 1) {slideIndex = slides.length;}

  for (i=0; i<slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i=0; i<dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

}


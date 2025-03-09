let slideIndex = [1, 1, 1]; // stored data to represent the slide index of the respective slide
let slideId = ["events", "projects", "committee"]
let indexId = ["index-events", "index-projects", "index-committee"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let slides = document.getElementsByClassName(slideId[no]);
  let index = document.getElementsByClassName(indexId[no]);
  if (n > slides.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = slides.length}
  for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";  
     index[i].classList.remove("active");
  }
  slides[slideIndex[no]-1].style.display = "flex"; // note slideIndex[no]-1 the correct index of the slide
  index[slideIndex[no]-1].classList.add("active");
}
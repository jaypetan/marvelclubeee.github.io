let slideIndex = [1,1];
let slideId = ["events", "projects"]
let indexId = ["index-events", "index-projects"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let images = document.getElementsByClassName(slideId[no]);
  let index = document.getElementsByClassName(indexId[no]);
  if (n > images.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = images.length}
  for (i = 0; i < images.length; i++) {
     images[i].style.display = "none";  
     index[i].classList.remove("active");
  }
  images[slideIndex[no]-1].style.display = "block"; 
  index[slideIndex[no]-1].classList.add("active");
}
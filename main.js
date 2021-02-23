var prev = document.querySelector(".prev-btn");
var next = document.querySelector(".next-btn");
var num = 1;
prev.onclick = function () {
  var prevSlide = document.querySelector(".active");
  prevSlide.classList.remove("active");
  if (num == 1) {
    num = 2;
  } else {
    num = 1;
  }
  var slide = document.querySelector(`#slide-${num}`);
  slide.classList.add("active");
};
next.onclick = function () {
  var prevSlide = document.querySelector(".active");
  prevSlide.classList.remove("active");
  if (num == 1) {
    num = 2;
  } else {
    num = 1;
  }
  var slide = document.querySelector(`#slide-${num}`);
  slide.classList.add("active");
};

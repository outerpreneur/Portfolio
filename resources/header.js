// when I scroll down the page, at a certain point. make the header white

// defining constant

const headerTag = document.querySelector("header");

// functions

const toggleHeader = function () {
  const pixels = window.pageYOffset;
  if (pixels > 60) {
    headerTag.classList.add("scrolled");
  } else {
    headerTag.classList.remove("scrolled");
  }
};

const fadeBox = function () {
  const pixels = window.pageYOffset;
  const alpha = Math.min(pixels / 1000, 0.25);
  headerTag.style.boxShadow = `0 0 10px rgba( 0, 0, 0, ${alpha})`;
};

// running the functions

fadeBox();
toggleHeader();

// adding an event

document.addEventListener("scroll", function () {
  toggleHeader();
  fadeBox();
});

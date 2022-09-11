// defining tags

const animatedTags = document.querySelectorAll("h2, h1, p, section img, button, div, div.button");

// fadeout on load  . Making items dissapear on load

animatedTags.forEach((tag) => {
  tag.style.opacity = 0;
});

const fadeIn = function () {
  //   look throguh all the animated tags and see with the get BoundingclueientRect if its in the window
  let delay = 0.25;

  animatedTags.forEach((tag) => {
    const tagTop = tag.getBoundingClientRect().top;
    const tagBottom = tag.getBoundingClientRect().bottom;

    if (tagTop < window.innerHeight) {
      tag.style.animation = `fadein 1s ${delay}s both`;
      delay = delay + 0.01;
    }
  });
};

// on load, run fadeIn
fadeIn();

// on scroll, run fadeIn

document.addEventListener("scroll", function () {
  fadeIn();
});

// on browser resize, add FadeIn

window.addEventListener("resize", function () {
  fadeIn();
});

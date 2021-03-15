let alumniSlides = document.getElementsByClassName("alumni-carousel-slide");
let totalAlumniSlides = alumniSlides.length;
let changeAlumniSlide = (toSlide) => {
  for (let i = 0; i < totalAlumniSlides; i++) {
    if (alumniSlides[i].classList.contains("active")) {
      let endOfArray = i + toSlide > totalAlumniSlides - 1 ? true : false;
      let beginningOfArray = i + toSlide < 0 ? true : false;
      alumniSlides[i].classList.remove("active");
      if (endOfArray) {
        alumniSlides[0].classList.add("active");
      } else if (beginningOfArray) {
        alumniSlides[totalAlumniSlides - 1].classList.add("active");
      } else {
        alumniSlides[i + toSlide].classList.add("active");
      }
      break;
    }
  }
};
let toggleAlumniModal = (modalName) => {
  let modal = document.querySelectorAll(`[modal=${modalName}]`)[0];
  if (modal.classList.contains("active")) {
    fullpage_api.setAllowScrolling(true);
    modal.classList.remove("active");
    document.getElementsByClassName(
      "team-banner-button-container"
    )[0].style.zIndex = 4;
  } else {
    fullpage_api.setAllowScrolling(false);
    modal.classList.add("active");
    document.getElementsByClassName(
      "team-banner-button-container"
    )[0].style.zIndex = 0;
  }
};

document.addEventListener("click", function (event) {
  let modal = document.getElementsByClassName("alumni-modal active")[0];
  let modalButtons = document.getElementsByClassName("alumni-open-modal");
  let buttonClicks = [];
  for (let i = 0; i < modalButtons.length; i++) {
    modalButtons[i].contains(event.target)
      ? buttonClicks.push(1)
      : buttonClicks.push(0);
  }
  if (modal) {
    let isClickInside = modal.contains(event.target);
    if (!isClickInside && !buttonClicks.includes(1)) {
      modal.classList.remove("active");
      fullpage_api.setAllowScrolling(true);
    }
  }
});

let slides = document.getElementsByClassName("carousel-slide");
let bulletsContainer = document.getElementById("carousel-bullets");
let totalSlides = slides.length;
// Initialize Carousel Bullets, if there is a container to do so
if (bulletsContainer) {
  for (let i = 0; i < totalSlides; i++) {
    // Create button to be clicked on
    let bulletButton = document.createElement("button");
    bulletButton.classList.add("carousel-bullet");
    bulletButton.setAttribute("onclick", `bulletSlider(${i})`);
    // Create bullet with active classes
    let bullet = document.createElement("i");
    bullet.classList.add("fas");
    bullet.classList.add("fa-circle");
    slides[i].classList.contains("active")
      ? bullet.classList.add("active")
      : bullet.classList.remove("active");
    // Add bullet to bulletButton
    bulletButton.appendChild(bullet);
    // Add bulletButton to buttonContainer
    bulletsContainer.appendChild(bulletButton);
  }
}
let bulletSlider = (index) => {
  let bullets = document.getElementsByClassName("fa-circle");
  for (let i = 0; i < totalSlides; i++) {
    if (index === i) {
      bullets[i].classList.add("active");
      slides[i].classList.add("active");
    } else {
      bullets[i].classList.remove("active");
      slides[i].classList.remove("active");
    }
  }
};

let changeSlide = (toSlide) => {
  let bullets = document.getElementsByClassName("fa-circle");
  for (let i = 0; i < totalSlides; i++) {
    if (slides[i].classList.contains("active")) {
      let endOfArray = i + toSlide > totalSlides - 1 ? true : false;
      let beginningOfArray = i + toSlide < 0 ? true : false;
      slides[i].classList.remove("active");
      if (bullets.length !== 0) bullets[i].classList.remove("active");
      if (endOfArray) {
        slides[0].classList.add("active");
        if (bullets.length !== 0) bullets[0].classList.add("active");
      } else if (beginningOfArray) {
        if (bullets.length !== 0)
          bullets[totalSlides - 1].classList.add("active");
        slides[totalSlides - 1].classList.add("active");
      } else {
        if (bullets.length !== 0) bullets[i + toSlide].classList.add("active");
        slides[i + toSlide].classList.add("active");
      }
      break;
    }
  }
};

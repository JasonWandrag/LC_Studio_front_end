let changeBanner = (current, type) => {
  let currentBanner = document.querySelectorAll(`[banner=${current}]`)[0];
  let newBanner = document.querySelectorAll(`[banner=${type}]`)[0];
  newBanner.classList.add("active");
  currentBanner.classList.remove("active");
};

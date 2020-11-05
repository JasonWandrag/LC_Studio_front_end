let changeBanner = (current, type) => {
  console.log(current, type);
  let currentBanner = document.querySelectorAll(`[banner=${current}]`)[0];
  let newBanner = document.querySelectorAll(`[banner=${type}]`)[0];
  console.log(currentBanner, newBanner);
  newBanner.classList.add("active");
  currentBanner.classList.remove("active");
};

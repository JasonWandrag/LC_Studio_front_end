let changeBanner = (banner) => {
  let banners = document.querySelectorAll(`.team-banner`);
  let newBanner = document.querySelectorAll(`[banner=${banner}]`)[0];
  for (let i = 0; i < banners.length; i++) {
    banners[i].classList.remove("active");
  }
  newBanner.classList.add("active");
};

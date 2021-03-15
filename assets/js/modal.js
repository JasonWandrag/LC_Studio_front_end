function toggleModal(modalID) {
  let modal = document.getElementById(modalID);

  if (modal.classList.contains("active")) {
    fullpage_api.setAllowScrolling(true);
    modal.classList.remove("active");
  } else {
    fullpage_api.setAllowScrolling(false);
    modal.classList.add("active");
  }
}

let closeMenu = () => {
  document.getElementById("toggler").checked = false;
  toggleProjectModalButton();
};
let toggleSubMenu = (subMenuIndex) => {
  let subMenus = document.getElementsByClassName("sub-menu");
  let activeSubMenu = subMenus[subMenuIndex];
  fullpage_api.moveTo(subMenuIndex + 3);
  for (let i = 0; i < subMenus.length; i++) {
    if (subMenus[i] !== activeSubMenu) {
      subMenus[i].classList.remove("active");
    } else {
      activeSubMenu.classList.contains("active")
        ? activeSubMenu.classList.remove("active")
        : activeSubMenu.classList.add("active");
    }
  }
};

document.addEventListener("click", function (event) {
  let menuElement = document.getElementById("menuToggle");
  let menuToggler = document.getElementById("toggler");
  let isClickInside = menuElement.contains(event.target);
  let currentTarget = event.target;
  if (currentTarget === menuToggler) menuToggler.blur();
  if (!isClickInside) {
    document.getElementById("toggler").checked = false;
    toggleProjectModalButton();
  }
});

//Open Project Modal
let startProject = () => {
  document.getElementById("modal-container").removeAttribute("class");
  document.getElementById("modal-container").classList.add("one");
  document.getElementsByTagName("body")[0].classList.add("modal-active");
};

// Close Project Modal
let closeProject = () => {
  document.getElementById("modal-container").classList.add("out");
  document.getElementsByTagName("body")[0].classList.remove("modal-active");
};
// slider functionality
let slider = document.getElementById("myRange");
let output = document.getElementById("budgetDisplay");
output.innerHTML = slider.value == 0 ? "Probono" : `R${slider.value}k`;
// slider.step = 10;

slider.oninput = function () {
  output.innerHTML = this.value == 0 ? "Probono" : `R${this.value}k`;
};
// change color of start project button when menu opens
let toggleProjectModalButton = () => {
  if (document.getElementById("toggler").checked) {
    document.getElementsByClassName("modal-open-button")[0].style.transform =
      "translate(400%)";
  } else {
    document.getElementsByClassName("modal-open-button")[0].style.transform =
      "translate(0)";
  }
};

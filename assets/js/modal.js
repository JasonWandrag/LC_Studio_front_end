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
const probonoSection = document.getElementById("probono");

document.addEventListener(
  "wheel",
  function () {
    if (probonoSection) {
      isInViewport(probonoSection)
        ? document
            .getElementsByClassName("modal-open-button")[0]
            .classList.add("in-probono")
        : document
            .getElementsByClassName("modal-open-button")[0]
            .classList.remove("in-probono");
    }
  },
  {
    passive: true,
  }
);
// slider functionality
let slider = document.getElementById("myRange");
let output = document.getElementById("budgetDisplay");
output.innerHTML = slider.value == 0 ? "Probono" : `R${slider.value}k`;
// slider.step = 10;

slider.oninput = function () {
  output.innerHTML = this.value == 0 ? "Probono" : `R${this.value}k`;
};

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

// change color of start project button when menu opens
let changeProjectColor = () => {
  if (document.getElementById("toggler").checked) {
    document
      .getElementsByClassName("modal-open-button")[0]
      .classList.add("black");
  } else {
    document
      .getElementsByClassName("modal-open-button")[0]
      .classList.remove("black");
  }
};

// Check if class changes
let element = document.getElementsByTagName("body")[0];
let header = document.getElementById("landing-header");
var observer = new MutationObserver(function (event) {
  let selected = event[0].target;
  if (selected.classList.contains("yellow")) {
    header.innerHTML = `We are on a mission <br> to transform the tech industry <br> in South Africa`;
  } else if (selected.classList.contains("blue")) {
    header.innerHTML = "Doing good <br> is good business";
  } else {
    header.innerHTML = "Digital Solutions<br> developed by youth";
  }
});

observer.observe(element, {
  attributes: true,
  attributeFilter: ["class"],
  childList: false,
  characterData: false,
});

// slider functionality
var slider = document.getElementById("myRange");
var output = document.getElementById("budgetDisplay");
output.innerHTML = slider.value == 0 ? "Probono" : `R${slider.value}k`;
// slider.step = 10;

slider.oninput = function () {
  output.innerHTML = this.value == 0 ? "Probono" : `R${this.value}k`;
};

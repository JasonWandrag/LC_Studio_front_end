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

// Animate logo
var svg = document.getElementsByTagName("svg")[0];
var bbox = svg.getBBox();
var viewBox = [bbox.x, bbox.y, bbox.width, bbox.height].join(" ");
svg.setAttribute("viewBox", viewBox);

let AnimateLogo = () => {
  document.getElementById("Logo").setAttribute("class", "animated-logo");
  setTimeout(function () {
    document.getElementById("Logo").setAttribute("class", "static-logo");
  }, 2200);
};

// function to choose random color, as long as it has not been chosen before
let classNameList = ["red", "yellow", "blue"];
let chooseColor = () => {
  classNameList.push(classNameList.shift()); // push first item in array to end of array
  return classNameList[0]; // pick first item in array
};

// Spacebar functionality
let changeColor = () => {
  document.getElementsByTagName("body")[0].className = chooseColor();
};
document.body.onkeydown = function (e) {
  if (e.which == 32 && e.target == document.body) {
    e.preventDefault(); // Prevent SPACEBAR moving page when pressed down
  }
};
// change color on spacebar press
document.body.onkeyup = function (e) {
  if (e.which == 32 && e.target.tagName.toUpperCase() !== "INPUT") {
    changeColor(); // set body to random color
  }
};
// change color when swiping
document.body.addEventListener(
  "touchmove",
  function touchMoveEvent(event) {
    let x = event.touches[0].clientX;
    if (x > 0) {
      let x = event.touches[0].clientX;
      document.body.addEventListener(
        "touchend",
        function touchEndEvent(e) {
          document.getElementsByTagName("body")[0].className = chooseColor();
        },
        false
      );
    }
  },
  false
);

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

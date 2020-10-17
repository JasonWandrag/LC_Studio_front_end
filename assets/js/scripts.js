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
  topFunction();
};

// Scroll to top function
let topFunction = () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
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
  let chooseColorIndex = Math.floor(Math.random() * 2); // random number between 1 and 2
  return classNameList[chooseColorIndex]; // Choose item from first two places in array
};

// Spacebar functionality
document.body.onkeydown = function (e) {
  if (e.keyCode == 32 && e.target == document.body) {
    e.preventDefault(); // Prevent SPACEBAR moving page when pressed down
  }
};

document.body.onkeyup = function (e) {
  if (e.keyCode == 32) {
    document.getElementsByTagName("body")[0].className = chooseColor(); // set body to random color
  }
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

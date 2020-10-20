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
  return classNameList[0]; // pick first item in array
};

// Spacebar functionality
document.body.onkeydown = function (e) {
  if (e.which == 32 && e.target == document.body) {
    e.preventDefault(); // Prevent SPACEBAR moving page when pressed down
  }
};

document.body.onkeyup = function (e) {
  if (e.which == 32 && e.target.tagName.toUpperCase() !== "INPUT") {
    document.getElementsByTagName("body")[0].className = chooseColor(); // set body to random color
  }
};

document.body.addEventListener(
  "touchmove",
  function myFunction(event) {
    let x = event.touches[0].clientX;
    if (x > 0) {
      document.getElementsByTagName("body")[0].className = chooseColor();
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
let img = document.getElementById("landing-img");
var observer = new MutationObserver(function (event) {
  let selected = event[0].target;
  // console.log(selected);
  if (selected.classList.contains("yellow")) {
    header.innerHTML =
      "We are on a mission to transform the tech industry in South Africa";
    img.src = "./assets/images/banner2.jpg";
  } else if (selected.classList.contains("blue")) {
    header.innerHTML = "Doing good is good business";
    img.src = "./assets/images/banner3.jpg";
  } else {
    header.innerHTML = "Digital Solutions developed by youth";
    img.src = "./assets/images/banner1.jpg";
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
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
};

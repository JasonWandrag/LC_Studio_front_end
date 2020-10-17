//Start a project
let startProject = () => {
  document.getElementById("modal-container").removeAttribute("class");
  document.getElementById("modal-container").classList.add("one");
  document.getElementsByTagName("body")[0].classList.add("modal-active");
};

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

// Spacebar functionality
document.body.onkeyup = function (e) {
  e.preventDefault();
  if (e.keyCode == 32) {
    //your code
    let classNameList = ["red", "yellow", "blue"];
    document.getElementsByTagName("body")[0].className =
      classNameList[Math.floor(Math.random() * 3)]; // set class name to random color
    topFunction();
  }
};
